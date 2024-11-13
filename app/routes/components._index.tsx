import { redirect } from "@remix-run/cloudflare";
import { NAVIGATION_CONFIG } from "~/shared/navigation-config";

export const loader = async () => {
  return redirect(NAVIGATION_CONFIG[0].path, 307);
};
