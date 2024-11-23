import { Outlet } from "react-router";
import { Nav } from "~/components/nav";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function DocsLayout() {
	return (
		<div className="container mx-auto grid lg:grid-cols-[300px_1fr]">
			<aside className="p-5 lg:p-10 h-[calc(100vh-calc(var(--spacing)*16))] overflow-hidden sticky top-16">
				<ScrollArea className="h-full">
					<Nav />
				</ScrollArea>
			</aside>

			<div className="p-5 lg:p-10 border-x border-neutral-200 bg-white">
				<article className="prose prose-sm mx-auto max-w-none prose-neutral">
					<Outlet />
				</article>
			</div>
		</div>
	);
}
