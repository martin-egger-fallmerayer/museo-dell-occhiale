import type { NextApiRequest, NextApiResponse } from "next";
import db from "./firebase";

type Data = string[]

type Query = {
	by: string;
	q: string;
};

type Document = {
	name: string;
};

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
    res.status(200).json(await getAllProjectNames())
}

export const getAllProjectNames = async () => {
	const projRef = await db.collection("projects").listDocuments();
	return projRef.map((projectRef) => {
        const name = projectRef.id
        return name 
    });
}