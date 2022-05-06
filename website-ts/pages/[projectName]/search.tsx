import HeaderMenu from "components/HeaderMenu";
import type { NextPage } from "next";
import styles from "../../styles/Search.module.scss";
import Link from "next/link"

import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { API_BASE } from "constants/network";
import { useRouter } from "next/router";

type Props = {
	objects: any;
	categories: any
};

type Context = {
	params: {
		projectName: string;
	};
	query: {
		q: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ objects, categories }) => {

	const router = useRouter()
	const { projectName } = router.query

	const [searchResults, setSearchResult] = useState(objects);

	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedCategories, setSelectedCategories] = useState("")

	function onChangeSearch(e: any) {
		setSearchTerm(e.target.value);

		if (selectedCategories === "") {
			setSearchResult(objects.filter((object: any) => object.name.toLowerCase().includes(e.target.value.toLowerCase())));
		} else {
			setSearchResult(objects.filter((object: any) => object.name.toLowerCase().includes(e.target.value.toLowerCase()) && object.category === selectedCategories));
		}


	}

	const handleSearchByCategory = (e: any) => {

		if (selectedCategories === e.target.innerText) {
			setSelectedCategories("");
			setSearchResult(objects.filter((object: any) => object.name.toLowerCase().includes(searchTerm.toLowerCase())));
		} else {
			setSelectedCategories(e.target.innerText);
			setSearchResult(objects.filter((object: any) => object.category === e.target.innerText && object.name.toLowerCase().includes(searchTerm.toLowerCase())));
		}
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

				<div className={styles.categories}>
					{categories.map((term: string) => (
						<p key={term} className={(selectedCategories === term) ? styles.activeCategory : ""}
							onClick={handleSearchByCategory}
						>{term}</p>

					))}
				</div>

				<div className={styles.searchResults}>
					{
						searchResults.map((result: any) => (
							<Link key={result.name} href={`/${projectName}/${result.category}/${result.id}`}>
								<div  className={styles.resultCard}>
									<img
										src={(result.image !== "" && result.image !== undefined) ?
											result.image
											:
											"https://via.placeholder.com/150"}

									/>

									<div>
										<h3>{result.name}</h3>
										<p>{result.description}</p>
									</div>
								</div>
							</Link>

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

	const resCat = await fetch("http://" + API_BASE + "/api/" + projectName + "/categories");
	const categories = await resCat.json();

	return {
		props: {
			objects: objects.result,
			categories: categories
		},
	};
}

export default ProjectHomePage;
