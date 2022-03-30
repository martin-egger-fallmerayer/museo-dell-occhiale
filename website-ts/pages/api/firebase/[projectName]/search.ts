import { doc } from "firebase/firestore";
import { truncate } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "pages/firebase";

type Data = {
	result: FirebaseFirestore.DocumentData[] | undefined;
};

type Query = {
	by: string;
	q: string;
};

type Document = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// [GUARD] If requred query params are not given
	if (!("by" in req.query && "q" in req.query)) return res.status(500);
	const { by, q, projectName } = req.query;

	if (by === "all") {
		let allDocs: FirebaseFirestore.DocumentData[] = [];

		const projectRef = db.collection("projects").doc(String(projectName));
		const categories = await projectRef.listCollections();

		for (const category of categories) {
			const docsRef = await category.listDocuments();
			docsRef.forEach(async (docRef) => {
				const document = await docRef.get();
				const data = document.data();
				Object.assign(data, { name: document.id });
				allDocs.push(data!); // !: surpress undefined
			});
		}

		console.log(allDocs);

		const filteredDocs = allDocs.filter(doc => {
			return doc.name.includes(q);
		});

		res.status(200).json({ result: filteredDocs });
	} else if (by === "category") {
		res.status(200).json({ name: by });
	}
}
