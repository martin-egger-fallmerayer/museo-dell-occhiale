import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

type Props = {
  project: any;
};

type Context = {
	params: {
		projectName: string
	}
}

const ProjectHomePage: NextPage<Props> = ({ project }) => {
  
	console.dir(project)

	return (
    <>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </>
  );
};

export async function getServerSideProps(context:Context) {
  const { projectName } = context.params;
  const res = await fetch("http://10.10.30.67:4000/projects/" + projectName);
  const project = await res.json();

  return {
    props: { project }, // will be passed to the page component as props
  };
}

export default ProjectHomePage;
