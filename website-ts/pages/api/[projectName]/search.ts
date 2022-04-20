import type { NextApiRequest, NextApiResponse } from "next";
import db from "pages/firebase";

type Data = {
	result: FirebaseFirestore.DocumentData[] | undefined;
};

type Query = {
	by: string;
	q: string;
	category: string;
};

type Document = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// [GUARD] If requred query params are not given
	if (!("by" in req.query)) return res.status(500);
	const { by, q="", projectName, category } = req.query;

	if (by === "all") {
		let allDocs: FirebaseFirestore.DocumentData[] = [];

		const projectRef = db.collection("projects").doc(String(projectName));
		const categories = await projectRef.listCollections();

		for (const category of categories) {
			const docsRef = await category.listDocuments();
			for (const docRef of docsRef){
				const document = await docRef.get();
				const data = document.data();
				Object.assign(data, { name: document.id, category: category.id });
				allDocs.push(data!); // !: surpress undefined
			}
			
		}

		const filteredDocs = allDocs.filter((doc) => {
			return doc.name.includes(q);
		});

		res.status(200).json({ result: filteredDocs });
	} else if (by === "category") {
		const projectRef = db.collection("projects").doc(String(projectName));
		const categoryRef = projectRef.collection(String(category));
		const cat = await categoryRef.listDocuments()
		
	}
}
