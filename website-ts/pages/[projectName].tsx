import type { NextPage } from "next";
import styles from "../styles/ProjectHomePage.module.scss";
import { useRouter } from "next/router";

// three.js
import Scene from "components/three/Scene";
import Model from "components/three/Model";

// components
import HeaderMenu from "components/HeaderMenu";

type Props = {
	project: any;
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project }) => {
	
	const router = useRouter()
	
	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<h1>{project.name}</h1>
				<input type="button" value="Search"
					onClick={e => router.push("/" + project.name + "/search")}
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
