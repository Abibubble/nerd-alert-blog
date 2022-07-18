import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="About NerdAlert, for information about the members of NerdAlert on the NerdAlert blog site."
				/>
				<meta
					name="keywords"
					content="nerdalert, nerd, nerds, alert, blog, blogs, video, videos, author, authors, developer, developers"
				/>
				<link rel="canonical" href="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" name="title" content="NerdAlert Articles" />
				<meta
					property="og:description"
					content="About NerdAlert, for information about the members of NerdAlert on the NerdAlert blog site."
				/>
				<meta property="og:url" content="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:site_name" content="NerdAlert Blog" />
				<meta property="og:image" name="image" content="docs/finalpage.png" />
				<meta
					property="og:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<meta name="twitter:title" content="NerdAlert Articles" />
				<meta
					name="twitter:description"
					content="About NerdAlert, for information about the members of NerdAlert on the NerdAlert blog site."
				/>
				<meta
					name="twitter:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<title>About NerdAlert</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>About NerdAlert</h1>
				<p>Info about us and how we met, etc.</p>

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
						<h2>Author name</h2>
						<p>Tagline description of the author will go here</p>
					</a>
				</div>
			</main>
		</>
	);
}
