import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components/navbar";
import { ScrollArea } from "~/components/ui/scroll-area";
import { MDX_COMPONENTS } from "~/shared/mdx-components";

export default function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[300px,1fr] gap-5">
      <aside className="hidden lg:block px-5 lg:px-10">
        <ScrollArea className="h-[calc(100vh-64px)] -mx-2 py-10">
          <Navbar />
        </ScrollArea>
      </aside>

      <div className="px-5 lg:pr-10">
        <article className="prose prose-sm mx-auto max-w-none prose-neutral">
          <MDXProvider components={MDX_COMPONENTS}>
            <Outlet />
          </MDXProvider>
        </article>
      </div>
    </div>
  );
}
