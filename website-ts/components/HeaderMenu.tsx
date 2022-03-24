import React from "react";
import Image from "next/image";

import styles from "../styles/components/HeaderMenu.module.scss"

const HeaderMenu = () => {
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
		</>
	);
};

export default HeaderMenu;
