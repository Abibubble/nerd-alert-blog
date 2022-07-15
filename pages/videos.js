import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Videos() {
	return (
		<>
			<Head>
				<title>NerdAlert Videos</title>
			</Head>

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
		</>
	);
}
