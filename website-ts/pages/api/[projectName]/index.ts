import { DocumentData } from "@google-cloud/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../firebase";

type Data = {
	project: DocumentData | undefined;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { projectName } = req.query;

	const projectObj = await db
		.collection("projects")
		.doc(String(projectName))
		.get();

	const project: any = projectObj.data()
	
	res.status(200).json(project);
}
