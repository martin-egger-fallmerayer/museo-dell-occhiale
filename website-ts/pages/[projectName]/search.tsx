import HeaderMenu from "components/HeaderMenu";
import type { NextPage } from "next";
import styles from "../../styles/Search.module.scss";

import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import { API_BASE } from "constants/network";

type Props = {
	project: any;
	q: string;
};

type Context = {
	params: {
		projectName: string;
	};
	query: {
		q: string;
	};
};

const ProjectHomePage: NextPage<Props> = (props) => {
	// example data
	const catergories = ["glasses", "binoculars", "term3", "term4", "term5"];

	const searchResults = [
		{
			img: "",
			title: "title1",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title2",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title3",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title4",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title5",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title6",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title7",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title8",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
		{
			img: "",
			title: "title9",
			content:
				"asdlköfjasdlkföjaslödkjflöaksjdföljsadfölkjasdlöfkjasöldkfjasödlkfjasödlfkjasldkjffsdölkj",
		},
	];

	const [searchTerm, setSearchTerm] = useState<string>(
		"q" in props ? props.q : ""
	);

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<div className={styles.searchBar}>
					<input
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<HiSearch />
				</div>

				<div className={styles.recentTerms}>
					{catergories.map((term) => (
						<p key={term}>{term}</p>
					))}
				</div>

				<div className={styles.searchResults}>
					{searchResults.map((result) => (
						<div className={styles.resultCard}>
							<img
								src="https://via.placeholder.com/150"
								alt={result.img}
							/>

							<div>
								<h3>{result.title}</h3>
								<p>{result.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps(context: Context) {
	const { projectName } = context.params;
	const res = await fetch("http://" + API_BASE + "/projects/" + projectName);
	const project = await res.json();

	// const { q } = context.query;
	// if (q === undefined) return { props: { project } };

	return {
		props: { project },
	};
}

export default ProjectHomePage;
