"use client";

import { useEffect } from "react";

type Mode = "interaction" | "idle";

/**
 * Loads the AdSense script after the page has loaded.
 * - "interaction" (default): waits for the visitor's first scroll, tap, click or key press.
 *   On a calculator site almost every real visitor does this within seconds, and the page
 *   stays fast for Google's speed test. Visitors who leave without touching the page see no ad.
 * - "idle": loads when the browser is idle after load (more ad impressions, slower speed score).
 */
export default function AdSenseLoader({ client, mode = "interaction", src }: { client: string; mode?: Mode; src?: string }) {
  useEffect(() => {
    if (!client) return;
    let done = false;
    const load = () => {
      if (done || document.querySelector('script[data-gc="adsense"]')) return;
      done = true;
      const s = document.createElement("script");
      s.async = true;
      s.crossOrigin = "anonymous";
      s.src = src ?? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      s.setAttribute("data-gc", "adsense");
      document.head.appendChild(s);
      cleanup();
    };
    const events = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
    const cleanup = () => events.forEach((e) => window.removeEventListener(e, load));

    if (mode === "interaction") {
      events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    } else {
      const start = () => ("requestIdleCallback" in window ? window.requestIdleCallback(load, { timeout: 4000 }) : setTimeout(load, 2000));
      if (document.readyState === "complete") start();
      else window.addEventListener("load", start, { once: true });
    }
    return cleanup;
  }, [client, mode, src]);
  return null;
}
