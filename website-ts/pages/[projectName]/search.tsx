import HeaderMenu from "components/HeaderMenu";
import type { NextPage } from "next";
import styles from "../../styles/Search.module.scss";

import { HiSearch } from "react-icons/hi";

type Props = {
	project: any;
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project }) => {
	// example data
	const recentTerms = ["term1", "term2", "term3", "term4", "term5"];

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

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<div className={styles.searchBar}>
					<input type="text" placeholder="Search..." />
					<HiSearch />
				</div>

				<div className={styles.recentTerms}>
					{recentTerms.map((term) => (
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

export async function getStaticPaths() {
	const res = await fetch("http://10.10.30.67:4000/projects?names");
	const names = await res.json();
	const paths = names.map((name: string) => {
		return { params: { projectName: name } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: Context) {
	const { projectName } = context.params;
	const res = await fetch("http://10.10.30.67:4000/projects/" + projectName);
	const project = await res.json();

	return {
		props: { project },
	};
}

export default ProjectHomePage;
