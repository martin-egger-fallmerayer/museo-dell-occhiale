import HeaderMenu from "components/HeaderMenu";
import type { NextPage } from "next";
import styles from "../../styles/Search.module.scss";

type Props = {
	project: any;
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project }) => {
	return (
		<>
			<HeaderMenu />

			<div className={styles.body} >
				<input type="text" placeholder="Search..." />
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
