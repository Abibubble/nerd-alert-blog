import Image from 'next/image';
import styles from '@/styles/Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<a href="/">
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
			</a>

			<div className={styles.search}>
				<input type="text" placeholder="Search" />
			</div>

			<nav className={styles.mainNav}>
				<ul>
					<li>
						<a href="/articles">Articles</a>
					</li>
					<li>
						<a href="/videos">Videos</a>
					</li>
					<li>
						<a href="/authors">Authors</a>
					</li>
					<li>
						<a href="/categories">Categories</a>
					</li>
					<li>
						<a href="/about">About Us</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
