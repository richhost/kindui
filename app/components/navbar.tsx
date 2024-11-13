import { Link, useLocation } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { NAVIGATION_CONFIG } from "~/shared/navigation-config";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <ul className="text-sm space-y-0.5">
      {NAVIGATION_CONFIG.map((nav) => (
        <li
          key={nav.name}
          className={cn("px-2 hover:bg-muted rounded transition-colors", {
            "bg-muted": pathname === nav.path,
          })}
        >
          <Link to={nav.path} className="h-7 flex items-center">
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
