import { getCollection } from 'astro:content';

import type { WiredInfoboxType } from "../content.config";

export default async function loadDataByInfoboxType(type: WiredInfoboxType) {
	const items = (await getCollection("docs"))
		.map(entry => {
			if (!entry.data.infobox || !("type" in entry.data.infobox) || entry.data.infobox.type !== type)
				return null;
			return entry.data.infobox;
		})
		.filter(infobox => infobox !== null)

	return items
}
