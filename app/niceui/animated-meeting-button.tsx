import { ArrowRight } from "lucide-react";

export default function AnimatedMeetingButton() {
  return (
    <button className="h-14 rounded-full flex items-center bg-neutral-700 text-white px-1.5 relative group overflow-hidden">
      <div className="px-5 flex flex-col justify-center gap-1 leading-none">
        <span className="font-semibold">Schedule Free Meeting</span>
        <span className="text-xs text-left text-white/70">
          with our expert team
        </span>
      </div>
      <div className="size-11 rounded-full bg-neutral-950 grid place-items-center">
        <ArrowRight size={20} />
      </div>
      <div className="size-11 rounded-full bg-white text-neutral-950 grid place-items-center absolute right-1.5 transition-transform duration-500 ease-in-out rotate-90 translate-x-[calc(100%+0.375rem)] group-hover:translate-x-0 group-hover:rotate-0">
        <ArrowRight size={20} />
      </div>
    </button>
  );
}
