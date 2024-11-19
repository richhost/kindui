import React from "react";

export const PREVIEW_COMPONENTS_MAPPING: Record<
	string,
	React.LazyExoticComponent<(props: any) => JSX.Element>
> = {
	"animated-meeting-button": React.lazy(() => import("~/niceui/animated-meeting-button")),
	subscribe: React.lazy(() => import("~/niceui/subscribe")),
	"flip-text": React.lazy(() => import("~/niceui/flip-text")),
	"flipping-card-demo": React.lazy(() => import("~/example/flipping-card-demo")),
	"sparkles-button": React.lazy(() => import("~/niceui/sparkles-button")),
	"polka-dot-mask-demo": React.lazy(() => import("~/example/polka-dot-mask-demo"))
};
