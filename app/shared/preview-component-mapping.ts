import React from "react";

export const PREVIEW_COMPONENTS_MAPPING: Record<
  string,
  React.LazyExoticComponent<() => JSX.Element>
> = {
  "animated-meeting-button": React.lazy(
    () => import("~/niceui/animated-meeting-button")
  ),
};
