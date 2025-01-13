import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://ec1cef9536ba14913b306f06a5f57a5f@o4508635252195328.ingest.us.sentry.io/4508635253964800",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
