"use client";

import { useEffect } from "react";

/**
 * Loads the AdSense script AFTER React has finished loading the page.
 * Loading it earlier lets AdSense insert its own tags into <head> before React
 * checks the page, which causes a "hydration mismatch" error.
 */
export default function AdSenseLoader({ client, src }: { client: string; src?: string }) {
  useEffect(() => {
    if (!client || document.querySelector('script[data-gc="adsense"]')) return;
    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = src ?? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
    s.setAttribute("data-gc", "adsense");
    document.head.appendChild(s);
  }, [client, src]);
  return null;
}