import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>NerdAlert Blog</title>
				<meta
					name="description"
					content="A blog site for the articles and videos created by NerdAlert"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<header className={styles.header}>
					<span className={styles.logoContainer}>
						<Image
							className={styles.logo}
							src="/logo.png"
							alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
							height={64}
							layout="fill"
							objectFit="contain"
						/>
					</span>
					<nav className={styles.mainNav}>
						<ul>
							<li>
								<a href="#">Articles</a>
							</li>
							<li>
								<a href="#">Videos</a>
							</li>
							<li>
								<a href="#">Authors</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
						</ul>
					</nav>
				</header>
				<h1 className={styles.title}>Welcome to NerdAlert!</h1>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				Build, owned and run by{' '}
				<span className={styles.logo}>
					<Image
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						width={72}
						height={16}
					/>
				</span>
			</footer>
		</>
	);
}
