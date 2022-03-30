import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/HeaderMenu.module.scss";
import logo from "../public/Logsiv-logos_white.png";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderMenu = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "About us", href: "https://www.fallmerayer.it" },
		
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
					<Link  key={navItem.label} href={navItem.href}>
						<a>{navItem.label}</a>
						</Link>
				))}
			</div>
		</>
	);
};

export default HeaderMenu;
