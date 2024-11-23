"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Loader } from "lucide-react";
import { cn } from "~/lib/utils";

function Subscribe() {
	const [email, setEmail] = useState("");
	const [focus, setFocus] = useState(false);
	const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

	const show = focus || email;

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setStatus("loading");

		setTimeout(() => {
			setStatus("success");
		}, 3000);
	};

	return (
		<form onSubmit={onSubmit} className="grow flex justify-center">
			<div
				className={cn(
					"h-12 transition-[outline] outline-2 flex items-center gap-2 rounded-full max-w-96 w-full pl-5 bg-white relative overflow-hidden",
					show ? "outline-amber-500" : "outline-amber-400"
				)}
			>
				<input
					type="email"
					className="outline-none bg-transparent grow border-none"
					placeholder="your@email.com"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>
				<motion.div
					className="absolute"
					initial={false}
					animate={{
						right: 4,
						x: show ? "calc(0% + 0px)" : "calc(100% + 4px)"
					}}
					transition={{ type: "spring", bounce: 0.3 }}
				>
					<motion.button
						layoutId="button"
						type="submit"
						style={{ borderRadius: 999 }}
						className="px-6 h-10 bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 font-semibold flex-shrink-0 transition-colors text-white border-none"
					>
						Subscribe
					</motion.button>
				</motion.div>

				<AnimatePresence mode="popLayout">
					{status === "loading" && (
						<motion.div
							layoutId="button"
							className="absolute inset-0 z-10 bg-gradient-to-b from-amber-400 to-amber-500 flex items-center justify-center text-white"
							style={{ borderRadius: 999 }}
						>
							<Loader size={18} className="animate-spin" />
						</motion.div>
					)}

					{status === "success" && (
						<div className="absolute inset-0 z-10 bg-gradient-to-b from-amber-400 to-amber-500 flex items-center justify-center font-semibold text-white">
							<motion.span
								initial={{ y: -6, filter: "blur(4px)" }}
								animate={{ y: 0, filter: "blur(0px)" }}
								transition={{ type: "spring", bounce: 0.3 }}
							>
								Your email has been subscribed!
							</motion.span>
						</div>
					)}
				</AnimatePresence>
			</div>
		</form>
	);
}

export { Subscribe };
