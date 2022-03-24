import type { NextPage } from 'next'
import styles from "../styles/Index.module.scss"
import HeaderMenu from 'components/HeaderMenu'
import Scene from 'components/three/Scene'
import Model from 'components/three/Model'


const Home: NextPage = () => {
  return (
    <>
      {/* Header */}
			<HeaderMenu />

      <div className={styles.model}>
					<Scene
						Model={
							<Model
								path="/logo.glb"
								position={[0,0, 0]}
							/>
						}
						camera={[-0.175, 0.1, 0.25]}
					/>
				</div>
    </>
  )
}

export default Home
