import { useGLTF } from "@react-three/drei";

type Props = {
	path: string;
	position: any;
};

const Model = ({ path, position }: Props) => {
	// const [modelUrl, setModelUrl] = useState("");
	// const { scene } = useGLTF(path, true);
	const { scene } = useGLTF(path || "/data/models/Persian.glb", true);


	return <primitive position={position} object={scene} dispose={null} />;
};

export default Model;



// https://firebasestorage.googleapis.com/v0/b/database-visualization.appspot.com/o/models%2FPersian.glb?alt=media&token=da12bfdf-ed02-413d-844c-d40928e637a1