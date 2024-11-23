import { ArrowRight } from "lucide-react";

function AnimatedMeetingButton() {
	return (
		<button className="h-14 rounded-full flex items-center bg-gradient-to-b shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.8),inset_0px_-2px_0px_0px_rgba(0,0,0,0.1)] border border-amber-400 from-amber-400 to-amber-500 text-white px-1.5 relative group overflow-hidden">
			<div className="px-5 flex flex-col justify-center leading-none">
				<span className="font-semibold">Schedule Free Meeting</span>
				<span className="text-xs text-left text-white/80">with our expert team</span>
			</div>
			<div className="size-11 rounded-full bg-black/10 grid place-items-center">
				<ArrowRight size={20} />
			</div>
			<div className="size-11 rounded-full bg-white text-neutral-950 grid place-items-center absolute right-1.5 transition-transform duration-500 ease-in-out translate-x-[120%] rotate-90 group-hover:translate-x-0 group-hover:rotate-0">
				<ArrowRight size={20} />
			</div>
		</button>
	);
}

export { AnimatedMeetingButton };
