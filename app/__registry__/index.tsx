import React from "react";

export const Index: Record<string, React.LazyExoticComponent<(props: any) => JSX.Element>> = {
	"sparkles-button-demo": React.lazy(() => import("~/example/sparkles-button-demo"))
};
