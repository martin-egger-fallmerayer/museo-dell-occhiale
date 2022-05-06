import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../firebase";

type Data = any[];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { projectName, categoryName } = req.query;

	const projRef = db.collection("projects").doc(String(projectName));
	const categoryRef = projRef.collection(String(categoryName))
    const objectsRef = await categoryRef.listDocuments()
	
	let objectNames: Data = []
	objectsRef.forEach((object: { id: any; }) => objectNames.push(object.id))
	
	res.status(200).json(objectNames);
}
