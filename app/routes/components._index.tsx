import { redirect } from "react-router";
import { NAVIGATION_CONFIG } from "~/shared/navigation-config";

export const loader = async () => {
	return redirect(NAVIGATION_CONFIG[0].path, 307);
};
