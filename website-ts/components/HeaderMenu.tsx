import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/components/HeaderMenu.module.scss";
import logo from "../public/Logsiv-logos_white.png";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderMenu = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const navItems = [
		{ label: "About us", href: "www.fallmerayer.it" },
		{ label: "item2", href: "#" },
		{ label: "item3", href: "#" },
	];

	return (
		<>
			{/* Header */}
			<div className={styles.header}>
				<Image src={logo} height={90} width={90} />
				<p>TFO Fallmerayer</p>
				<div>
					{!showMenu ? (
						<HiMenu
							className={styles.menuIcon}
							onClick={(_) => setShowMenu(!showMenu)}
						/>
					) : (
						<HiX
							className={styles.menuIcon}
							onClick={(_) => setShowMenu(!showMenu)}
						/>
					)}
				</div>
			</div>

			{/* Menu */}
			<div
				className={styles.menu}
				style={{
					display: showMenu ? "flex" : "none",
				}}
			>
				{navItems.map((navItem) => (
					<a key={navItem.label} href={navItem.href}>{navItem.label}</a>
				))}
			</div>
		</>
	);
};

export default HeaderMenu;
