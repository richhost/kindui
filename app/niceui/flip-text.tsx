import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import useMeasure from "react-use-measure";

export default function FlipText({
	words = ["UI UX", "Product", "Motion"],
	duration = 3000
}: {
	words: string[];
	duration: number;
}) {
	const [index, setIndex] = useState(0);

	let max = useMemo(() => {
		let value = 0;
		for (let i = 0; i < words.length; i++) {
			if (value < words[i].length) {
				value = words[i].length;
			}
		}
		return value;
	}, [words]);

	const letters = useMemo(() => words[index].split(""), [index]);
	const [ref, { width }] = useMeasure();

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index) => (index + 1) % words.length);
		}, duration);
		return () => clearInterval(interval);
	}, [duration]);

	return (
		<div className="flex flex-col">
			<h3 className="text-7xl font-semibold flex">
				<motion.span
					aria-hidden={true}
					className="inline-block overflow-hidden relative text-nowrap"
					animate={{ width: width ? width : undefined }}
					transition={{ duration: 0.3 }}
				>
					<span ref={ref} className="inline-block opacity-0 pointer-events-none absolute">
						{words[index]}
					</span>

					{Array.from({ length: max }).map((_, i) => {
						return (
							<AnimatePresence key={i} mode="wait" initial={false}>
								<motion.span
									key={`${words[index]}-${i}`}
									initial={{ rotateY: -90 }}
									animate={{ rotateY: 0 }}
									exit={{ rotateY: 90 }}
									className="inline-block"
									transition={{
										type: "tween",
										delay: 0.1 + i * 0.01,
										duration: 0.1
									}}
								>
									{letters[i] === " " ? "\u00A0" : letters[i]}
								</motion.span>
							</AnimatePresence>
						);
					})}
				</motion.span>

				<span>{"\u00A0"}Design</span>
			</h3>
		</div>
	);
}

const items: Variants = {
	initial: {
		rotateY: -90
		// opacity: 0
	},
	enter: {
		rotateY: 0
		// opacity: 1
	},
	exit: {
		rotateY: 90
	}
};
