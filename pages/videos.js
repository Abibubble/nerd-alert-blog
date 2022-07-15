import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Videos() {
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
			<main className={styles.main}>
				<h1 className={styles.title}>NerdAlert Videos</h1>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<span className={styles.cardImageContainer}>
							<Image
								className={styles.cardImage}
								src="/logo.png"
								alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
								layout="fill"
								objectFit="contain"
							/>
						</span>
						<h2>Video title</h2>
						<p>Small description of the blog will go here</p>
						<p className={styles.authorName}>Speaker name here</p>
					</a>

					<a href="https://nextjs.org/docs" className={styles.card}>
						<span className={styles.cardImageContainer}>
							<Image
								className={styles.cardImage}
								src="/logo.png"
								alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
								layout="fill"
								objectFit="contain"
							/>
						</span>
						<h2>Video title</h2>
						<p>Small description of the blog will go here</p>
						<p className={styles.authorName}>Speaker name here</p>
					</a>

					<a href="https://nextjs.org/docs" className={styles.card}>
						<span className={styles.cardImageContainer}>
							<Image
								className={styles.cardImage}
								src="/logo.png"
								alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
								layout="fill"
								objectFit="contain"
							/>
						</span>
						<h2>Video title</h2>
						<p>Small description of the blog will go here</p>
						<p className={styles.authorName}>Speaker name here</p>
					</a>

					<a href="https://nextjs.org/docs" className={styles.card}>
						<span className={styles.cardImageContainer}>
							<Image
								className={styles.cardImage}
								src="/logo.png"
								alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
								layout="fill"
								objectFit="contain"
							/>
						</span>
						<h2>Video title</h2>
						<p>Small description of the blog will go here</p>
						<p className={styles.authorName}>Speaker name here</p>
					</a>

					<a href="https://nextjs.org/docs" className={styles.card}>
						<span className={styles.cardImageContainer}>
							<Image
								className={styles.cardImage}
								src="/logo.png"
								alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
								layout="fill"
								objectFit="contain"
							/>
						</span>
						<h2>Video title</h2>
						<p>Small description of the blog will go here</p>
						<p className={styles.authorName}>Speaker name here</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>Build, owned and run by NerdAlert</p>
			</footer>
		</>
	);
}
