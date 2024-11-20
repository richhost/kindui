import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		cloudflareDevProxy(),
		reactRouter(),
		tsconfigPaths(),
		tailwindcss(),
		contentCollections()
	]
});
