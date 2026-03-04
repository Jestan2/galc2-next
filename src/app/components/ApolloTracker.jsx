import Script from "next/script";

export default function ApolloTracker({ appId }) {
  if (!appId) return null;

  return (
    <Script id="apollo-tracker" strategy="afterInteractive">
      {`
        (function initApollo() {
          if (window.__apolloTrackerInitialized) return;
          window.__apolloTrackerInitialized = true;

          var nocache = Math.random().toString(36).substring(7);
          var script = document.createElement("script");
          script.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + nocache;
          script.async = true;
          script.defer = true;
          script.onload = function onApolloLoad() {
            if (!window.trackingFunctions || typeof window.trackingFunctions.onLoad !== "function") {
              return;
            }

            window.trackingFunctions.onLoad({ appId: "${appId}" });
          };

          document.head.appendChild(script);
        })();
      `}
    </Script>
  );
}
