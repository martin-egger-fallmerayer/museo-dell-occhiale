import type { NextPage } from "next";
import styles from "../../../styles/ObjectPage.module.scss";

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

const ObjectPage: NextPage<Props> = ({ object }) => {

	return (
		<>
			<HeaderMenu />

			<div className={styles.body}>
				<div className={styles.container}>
					
					<div className={styles.left}>
						<h1>{object.name}</h1>
						<div className={styles.descriptionContainer}>
							<h2>Description</h2>
							<p>{object.description}</p>
						</div>

						<div className={styles.locationContainer}>
							<h2>Location</h2>
							<p>{object.location}</p>
						</div>
					</div>

					<div className={styles.right}>
						<img src={object.image} alt={object.id} />
					</div>
				</div>


			</div>
		</>
	);
};

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

export default ObjectPage;