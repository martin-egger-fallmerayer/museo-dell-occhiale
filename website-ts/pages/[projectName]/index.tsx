import type { NextPage } from "next";
import styles from "../../styles/ProjectHomePage.module.scss";
import { useRouter } from "next/router";

// three.js
import Scene from "components/three/Scene";
import Model from "components/three/Model";

// components
import HeaderMenu from "components/HeaderMenu";
import { API_BASE } from "constants/network";

// API
import { getAllProjectNames } from "../api/projects"

type Props = {
	project: any;
	projectName: string;
	categories: any[];
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project, projectName }) => {
	const router = useRouter();

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<h1>{project.name}</h1>
				<input
					type="button"
					value="Search"
					onClick={(_) => router.push("/" + projectName + "/search")}
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
	// const res = await fetch("http://" + API_BASE + "/api/projects?names");
	// const names = await res.json();

	const names = await getAllProjectNames()

	let paths: Object[] = [];
	names.forEach((name: string) => {
		paths.push({ params: { projectName: name } });
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: Context) {
	const { projectName } = context.params;
	
	const res = await fetch("http://" + API_BASE + "/api/" + projectName)
	const project = await res.json()

	return {
		props: {
			project,
			projectName
		}
	};
}

export default ProjectHomePage;