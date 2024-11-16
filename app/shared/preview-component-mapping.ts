import React from "react";

export const PREVIEW_COMPONENTS_MAPPING: Record<
	string,
	React.LazyExoticComponent<() => JSX.Element>
> = {
	"animated-meeting-button": React.lazy(() => import("~/niceui/animated-meeting-button")),
	subscribe: React.lazy(() => import("~/niceui/subscribe")),
	'flip-text': React.lazy(() => import("~/niceui/flip-text")),
};
