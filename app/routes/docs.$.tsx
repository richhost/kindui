import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { allDocs } from "content-collections";
import { Mdx } from "~/components/mdx-components";

export async function loader({ params }: LoaderFunctionArgs) {
	const filePath = params["*"];
	return allDocs.find((item) => item._meta.path.replaceAll("\\", "/") === filePath);
}

export default function DocsPage() {
	const data = useLoaderData<typeof loader>();

	if (!data) {
		return null;
	}

	return (
		<>
			<h1>{data.title}</h1>
			<Mdx code={data.mdx} />
		</>
	);
}
