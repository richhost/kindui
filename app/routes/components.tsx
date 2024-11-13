import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components/navbar";
import { MDX_COMPONENTS } from "~/shared/mdx-components";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto grid xl:grid-cols-[300px,1fr] gap-5">
      <div className="hidden xl:block"></div>
      <aside className="hidden xl:block fixed top-16 left-0 bottom-0 w-[300px] px-5 lg:px-10 py-5">
        <Navbar />
      </aside>

      <div className="pr-5 lg:pr-10">
        <article className="prose prose-sm mx-auto max-w-none prose-neutral">
          <MDXProvider components={MDX_COMPONENTS}>
            <Outlet />
          </MDXProvider>
        </article>
      </div>
    </div>
  );
}
