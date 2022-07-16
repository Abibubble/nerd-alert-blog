import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
				/>
				<meta property="og:image" name="image" content="docs/finalpage.png" />
				<meta
					property="og:image:alt"
					content="An image of the final Holiday Hamper site on a range of devices"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:image" content="docs/finalpage.png" />
				<meta
					name="twitter:image:alt"
					content="An image of the final Holiday Hamper site on a range of devices"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<span className={styles.logoContainer}>
					<Link href="/">
						<Image
							className={styles.logo}
							src="/logo.png"
							alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
							layout="fill"
							objectFit="contain"
						/>
					</Link>
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
