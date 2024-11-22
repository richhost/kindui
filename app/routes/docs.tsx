import { Outlet } from "react-router";
import { Nav } from "~/components/nav";

export default function DocsLayout() {
	return (
		<div className="container mx-auto grid lg:grid-cols-[300px_1fr] gap-5">
			<aside className="px-5 lg:px-10">
				<Nav />
			</aside>

			<div className="px-5 lg:pr-10">
				<article className="prose prose-sm mx-auto max-w-none prose-neutral">
					<Outlet />
				</article>
			</div>
		</div>
	);
}
