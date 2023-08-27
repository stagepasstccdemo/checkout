import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Root from "./root.component";

Sentry.init({
  dsn: "https://caad34a1eea450911838673cc831124d@o4504899977936896.ingest.sentry.io/4505775011725312",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    Sentry.withScope((scope) => {
      scope.setExtra("props", props);
      scope.setExtra("info", info);
      Sentry.captureException(err);
    });

    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
