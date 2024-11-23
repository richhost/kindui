import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import { NAVIGATION_CONFIG } from "~/shared/navigation-config";

export function Nav() {
	const { pathname } = useLocation();

	return (
		<ul className="space-y-1 text-sm font-medium text-stone-600">
			{NAVIGATION_CONFIG.map((item) => (
				<li key={item.name} className={cn(pathname === item.path && "text-amber-500")}>
					<Link to={item.path} className="h-7 inline-flex items-center">
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
}
