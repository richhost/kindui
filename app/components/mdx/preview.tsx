import React, { Suspense, useMemo } from "react";
import { cn } from "~/lib/utils";
import { PREVIEW_COMPONENTS_MAPPING } from "~/shared/preview-component-mapping";

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export function Preview({ name, className, ...props }: PreviewProps) {
  const Component = useMemo(() => {
    return PREVIEW_COMPONENTS_MAPPING[name];
  }, [name]);

  return (
    <section
      className={cn(
        "relative min-h-[350px] border rounded-md flex items-center justify-center not-prose",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden
        style={{
          opacity: 0.15,
          backgroundImage:
            "linear-gradient(#b1b1b1 0.4px, transparent 0.4px), linear-gradient(to right, #b1b1b1 0.4px, #ffffff 0.4px)",
          backgroundSize: "8px 8px",
        }}
      ></div>
      <Suspense>
        <Component />
      </Suspense>
    </section>
  );
}