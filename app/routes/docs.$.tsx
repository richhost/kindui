import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { allDocs } from "content-collections";
import { Mdx } from "~/components/mdx-components";

export async function loader({ params }: LoaderFunctionArgs) {
	const filePath = params["*"];
	const doc = allDocs.find((item) => item._meta.path.replaceAll("\\", "/") === filePath);

	if (!doc) {
		throw new Response(null, { status: 404, statusText: "Not Found" });
	}

	return doc;
}

export default function DocsPage() {
	const data = useLoaderData<typeof loader>();

	return (
		<>
			<h1>{data.title}</h1>
			<Mdx code={data.mdx} />
		</>
	);
}
