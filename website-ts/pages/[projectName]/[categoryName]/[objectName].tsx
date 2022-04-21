import type { NextPage } from "next";
import styles from "../../../styles/ProjectHomePage.module.scss";
import { useRouter } from "next/router";

// components
import HeaderMenu from "components/HeaderMenu";
import { API_BASE } from "constants/network";

type Props = {
	object: any;
};

type Context = {
	params: {
		projectName: string;
		categoryName: string;
		objectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ object }) => {
	const router = useRouter();

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<h1>{object.name}</h1>				
				<p>{object.description}</p>
                <p>{object.location}</p>
                <img src={object.image} alt={object.name} />
			</div>
		</>
	);
};

// export async function getStaticPaths() {
//     const { projectName, categoryName } = context.params
// 	const res = await fetch("http://" + API_BASE + "/api/" + projectName + "/" + categoryName);
// 	const names = await res.json();

// 	let paths: Object[] = [];
// 	names.forEach((name: string) => {
// 		paths.push({ params: { objectName: name } });
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

export async function getServerSideProps(context: Context) {
	const { projectName, categoryName, objectName } = context.params;
	
	console.log(context.params)

	const res = await fetch(`http://${API_BASE}/api/${projectName}/${categoryName}/${objectName}`)
	const object = await res.json()

	return {
		props: {
			object
		}
	};
}

export default ProjectHomePage;