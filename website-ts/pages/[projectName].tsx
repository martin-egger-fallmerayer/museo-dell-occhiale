import type { NextPage } from "next";
import styles from "../styles/ProjectHomePage.module.scss";
import { useRouter } from "next/router";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

// three.js
import Scene from "components/three/Scene";
import Model from "components/three/Model";

// components
import HeaderMenu from "components/HeaderMenu";
import { db, storage } from "./firebase";

type Props = {
	project: any;
	categories: any[];
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project, categories }) => {
	const router = useRouter();

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<h1>{project.name}</h1>
				<input
					type="button"
					value="Search"
					onClick={(_) => router.push("/" + project.name + "/search")}
				/>
				<div className={styles.model}>
					<Scene
						Model={
							<Model
								path={project.model}
								position={[-0.05, -0.13, -0.03]}
							/>
						}
						camera={[-0.175, 0.1, 0.25]}
					/>
				</div>
				<p>{project.description}</p>
			</div>
		</>
	);
};

export async function getStaticPaths() {
	// const res = await fetch("http://" + API_BASE + "/projects?names");
	// const names = await res.json();

	let paths: Object[] = [];

	const querySnapshot = await getDocs(collection(db, "projects"));
	querySnapshot.forEach((doc) => {
		paths.push({ params: { projectName: doc.id } });
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: Context) {
	const { projectName } = context.params;
	const docRef = doc(db, "projects", projectName);
	const project = await getDoc(docRef);

	const projRef = collection(db, "projects/" + projectName + "/test")
	console.dir(project)

	return {
		props: {
			project: project.data(),
		},
	};
}

export default ProjectHomePage;
