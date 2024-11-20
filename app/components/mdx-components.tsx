import { MDXContent } from "@content-collections/mdx/react";
import { ComponentPreview } from "./component-preview";

interface MdxProps {
	code: string;
}

const COMPONENT = {
	ComponentPreview
};

export function Mdx({ code }: MdxProps) {
	return <MDXContent code={code} components={COMPONENT} />;
}
