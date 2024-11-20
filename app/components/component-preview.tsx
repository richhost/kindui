"use client";

import { Loader } from "lucide-react";
import { Suspense, useMemo } from "react";
import { Index } from "~/__registry__";
import { cn } from "~/lib/utils";

interface ComponentPreviewProps {
	name: string;
	className?: string;
}

export function ComponentPreview({ name, className }: ComponentPreviewProps) {
	const Preview = useMemo(() => {
		const Component = Index[name];

		if (!Component) {
			return (
				<p className="text-sm">
					Component <code className="px-1 py-0.5 rounded-sm font-mono bg-black/10">{name}</code> not
					fond.
				</p>
			);
		}

		return <Component />;
	}, [name]);

	return (
		<section
			className={cn(
				"relative min-h-[350px] border border-neutral-200 rounded-md not-prose flex items-center justify-center",
				className
			)}
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
				{Preview}
			</Suspense>
		</section>
	);
}
