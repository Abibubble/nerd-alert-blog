import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="A blog site for the articles and videos created by NerdAlert"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<span className={styles.logoContainer}>
					<Image
						className={styles.logo}
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						layout="fill"
						objectFit="contain"
					/>
				</span>
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

			<Component {...pageProps} />

			<footer className={styles.footer}>
				<p>Built, owned and run by NerdAlert</p>
			</footer>
		</>
	);
}

export default MyApp;
