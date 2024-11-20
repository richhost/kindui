import { Link } from "react-router";

export function Header() {
	return (
		<div className="border-b border-neutral-200 sticky z-10 top-0 bg-white/85 backdrop-blur">
			<header className="max-w-screen-2xl mx-auto px-5 lg:px-10 h-16 flex items-center">
				<Link to="/" className="text-lg font-semibold">
					Nice UI
				</Link>
			</header>
		</div>
	);
}
