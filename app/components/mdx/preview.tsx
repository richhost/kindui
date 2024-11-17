import { Loader } from "lucide-react";
import React, { Suspense, useMemo } from "react";
import { cn } from "~/lib/utils";
import { PREVIEW_COMPONENTS_MAPPING } from "~/shared/preview-component-mapping";

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	componentProps?: any;
}

export function Preview({ name, className, componentProps, ...props }: PreviewProps) {
	const Component = useMemo(() => {
		return PREVIEW_COMPONENTS_MAPPING[name];
	}, [name]);

	return (
		<section
			className={cn(
				"relative min-h-[350px] border rounded-md flex items-center justify-center not-prose",
				className
			)}
			{...props}
		>
			<div
				className="absolute inset-0 pointer-events-none -z-10"
				aria-hidden
				style={{
					opacity: 0.6,
					backgroundImage: "radial-gradient(#a2a2a2 0.5px, #ffffff 0.5px)",
					backgroundSize: "10px 10px"
				}}
			></div>
			<Suspense
				fallback={
					<div className="absolute inset-0 grid place-items-center">
						<Loader size={16} className="animate-spin" />
					</div>
				}
			>
				<Component {...componentProps} />
			</Suspense>
		</section>
	);
}
