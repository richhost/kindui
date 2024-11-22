import { Link } from "react-router";
import { NAVIGATION_CONFIG } from "~/shared/navigation-config";

export function Nav() {
	return (
		<div>
			<ul>
				{NAVIGATION_CONFIG.map((item) => (
					<li key={item.name}>
						<Link to={item.path}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
