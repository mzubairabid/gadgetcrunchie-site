import Script from "next/script";
import { TRACKING } from "@/lib/site";
import AdSenseLoader from "./AdSenseLoader";

/** Google AdSense + Google Analytics 4. Loads only the IDs that are filled in lib/site.ts. */
export default function Tracking() {
  const { adsenseClient, gaMeasurementId } = TRACKING;
  return (
    <>
      {adsenseClient ? <AdSenseLoader client={adsenseClient} /> : null}

      {gaMeasurementId ? (
        <>
          <Script id="ga4-src" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}