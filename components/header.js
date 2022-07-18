import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<div className={styles.logoContainer}>
					<Image
						className={styles.logo}
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						layout="fill"
						objectFit="contain"
						priority={true}
					/>
				</div>
			</Link>

			<nav className={styles.mainNav}>
				<ul>
					<li>
						<Link href="/articles">Articles</Link>
					</li>
					<li>
						<Link href="/videos">Videos</Link>
					</li>
					<li>
						<Link href="/authors">Authors</Link>
					</li>
					<li>
						<Link href="/about">About Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
