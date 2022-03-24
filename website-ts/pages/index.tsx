import type { NextPage } from 'next'
import styles from "../styles/Index.module.scss"
import HeaderMenu from 'components/HeaderMenu'
import Scene from 'components/three/Scene'
import Logo from 'components/three/Logo'


const Home: NextPage = () => {
  return (
    <>
      	{/* Header */}
			<HeaderMenu />

      	<div className={styles.model}>
			<Logo/>
		</div>
    </>
  )
}

export default Home
