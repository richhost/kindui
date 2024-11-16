import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import useMeasure from "react-use-measure";

export default function FlipText() {
	const words = ["UI UX", "Product", "Motion"];
	const [index, setIndex] = useState(0);
	const letters = useMemo(() => words[index].split(""), [index]);
	const [ref, { width }] = useMeasure();

	const [text, setText] = useState("C");

	// useEffect(() => {
	//     const interval = setInterval(() => {
	//         setIndex((index) => (index + 1) % words.length);
	//     }, 3000);
	//     return () => clearInterval(interval);
	// }, []);

	return (
		<div className="flex flex-col">
			<button
				className="border rounded p-2 mb-4"
				onClick={() => {
					setIndex((index) => (index + 1) % words.length);
				}}
			>
				change
			</button>

			<motion.h3 className="text-7xl font-semibold flex">
				<motion.span animate={{ width: width ? width : undefined }}>
					<span ref={ref} className="inline-block">
						<AnimatePresence mode="popLayout" initial={false}>
							<motion.span
								key={words[index]}
								className="flex"
								// initial="initial"
								// animate="enter"
								// exit="exit"
								// transition={{ staggerChildren: 0.1 }}
								exit={{ rotateY: 90 }}
							>
								{letters.map((letter, i) => (
									<AnimatePresence mode="wait" key={i}>
										<motion.span
											key={`${words[index]}-${i}`}
											// variants={items}
											initial={{ rotateY: -90 }}
											animate={{ rotateY: 0 }}
											exit={{ rotateY: 90 }}
											transition={{
												delay: i * 0.08,
												duration: 3
											}}
										>
											{letter.trim() || "\u00A0"}
										</motion.span>
									</AnimatePresence>
								))}
							</motion.span>
						</AnimatePresence>
					</span>
				</motion.span>

				<span>{"\u00A0"}Design</span>
			</motion.h3>
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
