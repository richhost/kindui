import React from "react";
import { cn } from "~/lib/utils";

interface FlippingCardProps extends React.HTMLAttributes<HTMLDivElement> {
	/** unit: second */
	duration?: number;
}

function FlippingCard({ className, duration = 8, ...props }: FlippingCardProps) {
	return (
		<div
			style={{ "--duration": duration } as React.CSSProperties}
			className={cn(
				"relative [transform-style:preserve-3d] animate-flipping-card hover:[animation-play-state:paused]",
				className
			)}
			{...props}
		/>
	);
}

interface FlippingCardItemProps extends React.HTMLAttributes<HTMLDivElement> {}

function FlippingCardFront({ className, ...props }: FlippingCardItemProps) {
	return <div className={cn("[backface-visibility:hidden]", className)} {...props} />;
}

function FlippingCardBack({ className, ...props }: FlippingCardItemProps) {
	return (
		<div
			className={cn(
				"[backface-visibility:hidden] absolute inset-0 [transform:rotateY(0.5turn)]",
				className
			)}
			{...props}
		/>
	);
}

export { FlippingCard, FlippingCardFront, FlippingCardBack };
