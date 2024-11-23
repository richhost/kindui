import React from "react";

export const Index: Record<string, React.LazyExoticComponent<(props: any) => JSX.Element>> = {
	"sparkles-button-demo": React.lazy(() => import("~/example/sparkles-button-demo")),
	"subscribe-demo": React.lazy(() => import("~/example/subscribe-demo")),
	"animated-meeting-button-demo": React.lazy(
		() => import("~/example/animated-meeting-button-demo")
	),
	"flip-text-demo": React.lazy(() => import("~/example/flip-text-demo")),
	"polka-dot-mask-demo": React.lazy(() => import("~/example/polka-dot-mask-demo"))
};
