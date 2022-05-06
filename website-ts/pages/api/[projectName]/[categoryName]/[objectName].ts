import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../firebase";

type Data = FirebaseFirestore.DocumentData | undefined;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { projectName, categoryName, objectName } = req.query;

	const projRef = db.collection("projects").doc(String(projectName));
	const categoryRef = projRef.collection(String(categoryName))
    const objectRef = await categoryRef.doc(String(objectName)).get()
	
    let object = objectRef.data()
    Object.assign(object, { id: objectRef.id })

	res.status(200).json(object);
}
