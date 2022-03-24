import type { NextPage } from "next";
import styles from "../styles/ProjectHomePage.module.scss";
import logo from "../public/Logsiv-logos_white.png";

import Image from "next/image";
import Scene from "components/three/Scene";
import Model from "components/three/Model";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

type Props = {
	project: any;
};

type Context = {
	params: {
		projectName: string;
	};
};

const ProjectHomePage: NextPage<Props> = ({ project }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);


	return (
		<>
			{/* Header */}
			<div className={styles.header}>
				<Image src={logo} height={90} width={90} />
				<p>TFO Fallmerayer</p>
				<div>
					<HiMenu
						className={styles.menuIcon}
						onClick={(_) => setShowMenu(!showMenu)}
					/>
				</div>
			</div>

			{/* Menu */}
			<div
				className={styles.menu}
				style={{
					display: showMenu ? "flex" : "none",
				}}
			>
				<a href="#">ITEM 1</a>
				<a href="#">ITEM 2</a>
				<a href="#">ITEM 3</a>
			</div>

			{/* Body */}
			<div className={styles.body}>
				{/* <h1>{project.name}</h1> */}
				<h1>{project.name}</h1>
				<input type="button" value="Search" />
				{/* <div className={styles.model}>Hier hönnte ihr 3D Modell stehen</div> */}
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
		fallback: true, // false or 'blocking'
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
