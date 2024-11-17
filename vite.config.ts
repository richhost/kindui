import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";

export default defineConfig({
	plugins: [
		mdx({
			providerImportSource: "@mdx-js/react"
		}),
		cloudflareDevProxy(),
		reactRouter(),
		tsconfigPaths()
	]
});
