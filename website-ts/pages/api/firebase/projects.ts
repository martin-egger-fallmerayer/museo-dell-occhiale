import { doc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../firebase";

type Data = {
	data: String[];
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
	const projRef = await db.collection("projects").listDocuments();
    const projects = projRef.map((projectRef) => {
        const name = projectRef.id
        return name 
    });
    res.status(200).json(projects)
}
