import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "@remix-run/react";
import { MDX_COMPONENTS } from "~/shared/mdx-components";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-[240px,1fr] gap-5">
      <div>sidebar</div>
      <div>
        <article className="prose prose-sm mx-auto max-w-none prose-neutral">
          <MDXProvider components={MDX_COMPONENTS}>
            <Outlet />
          </MDXProvider>
        </article>
      </div>
    </div>
  );
}
