import { getCollection } from 'astro:content';


export async function getPageHistoryPaths() {
	const docs = await getCollection('docs');

	return docs.map(doc => ({
		params: { page: doc.id },
		props: { entry: doc }
	}));
}
