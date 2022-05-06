import { DocumentData } from "@google-cloud/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../firebase";

type Data = any[];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { projectName } = req.query;

	const projRef = db.collection("projects").doc(String(projectName));
	const categoriesRef = await projRef.listCollections()
	
	let categories: Data = []
	categoriesRef.forEach(category => categories.push(category.id))
	
	res.status(200).json(categories);
}
