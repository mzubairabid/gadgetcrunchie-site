import Script from "next/script";
import { TRACKING } from "@/lib/site";
import AdSenseLoader from "./AdSenseLoader";

/** Google AdSense + Google Analytics 4. Loads only the IDs that are filled in lib/site.ts. */
export default function Tracking() {
  const { adsenseClient, gaMeasurementId, adsenseLoad } = TRACKING;
  return (
    <>
      {adsenseClient ? <AdSenseLoader client={adsenseClient} mode={adsenseLoad} /> : null}

      {gaMeasurementId ? (
        <>
          <Script id="ga4-src" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
          <Script id="ga4-init" strategy="lazyOnload">
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
