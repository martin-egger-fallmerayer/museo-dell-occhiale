import type { NextPage } from "next";
import styles from "../styles/ProjectHomePage.module.scss";

type Props = {
	project: any;
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project }) => {
	console.dir(project);

	return (
		<>
			{/* Header */}
			<div className={styles.header}>
				<img className="" src="" alt="logo" />
				<p>TFO Fallmerayer</p>
				<div>III</div>
			</div>

			{/* Body */}
			<div className={styles.body}>
				<h1>{project.name}</h1>
				<input type="button" value="search" />
				<div className={styles.model}>djflsdjkf</div>
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
		fallback: true, // false or 'blocking'
	};
}

export async function getStaticProps(context: Context) {
	const { projectName } = context.params;
	const res = await fetch("http://10.10.30.67:4000/projects/" + projectName);
	const project = await res.json();

	return {
		props: { project }, // will be passed to the page component as props
	};
}

export default ProjectHomePage;
