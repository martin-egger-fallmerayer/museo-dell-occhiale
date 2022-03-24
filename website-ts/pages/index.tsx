import type { NextPage } from 'next'
import styles from "../styles/Index.module.scss"
import logo from "../public/Logsiv-logos_white.png"
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      {/* Header */}
			<div className={styles.header}>
				<Image src={logo} height={90} width={90} />
				<p>TFO Fallmerayer</p>
				<div><p>III</p></div>
			</div>
    </>
  )
}

export default Home
