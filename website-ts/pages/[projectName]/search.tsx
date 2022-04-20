import HeaderMenu from "components/HeaderMenu";
import type { NextPage } from "next";
import styles from "../../styles/Search.module.scss";

import { HiSearch } from "react-icons/hi";
import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { Router, useRouter } from "next/router";
import { API_BASE } from "constants/network";

type Props = {
	objects: any;
};



type Context = {
	params: {
		projectName: string;
	};
	query: {
		q: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({objects}) => {
	// example data
	const catergories = ["glasses", "binoculars", "term3", "term4", "term5"];

	const [searchResults, setSearchResult] = useState(objects);

	const [searchTerm, setSearchTerm] = useState<string>("");


	function onChangeSearch(e:any){
		setSearchTerm(e.target.value);

		setSearchResult(objects.filter((object: any) => object.name.toLowerCase().includes(e.target.value.toLowerCase())));

	}

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<div className={styles.searchBar}>
					<input
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={onChangeSearch}
					/>
					<HiSearch />
				</div>

				<div className={styles.recentTerms}>
					{catergories.map((term) => (
						<p key={term}>{term}</p>
					))}
				</div>

				<div className={styles.searchResults}>
					{searchResults.map((result: any) => (
						<div key={result.name} className={styles.resultCard}>
							<img
								src="https://via.placeholder.com/150"
								alt={result.img}
							/>

							<div>
								<h3>{result.name}</h3>
								<p>{result.description}</p>
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
	const res = await fetch("http://" + API_BASE + "/api/" + projectName + "/search?by=all");
	const objects = await res.json();


	return {
		props: { 
			objects: objects.result
		 },
	};
}

export default ProjectHomePage;
