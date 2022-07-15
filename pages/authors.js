import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import getAuthors from '../services/author-svc';

export default function Authors() {
	let authors;

	async function authorFetch() {
		authors = await getAuthors();
	}

	console.log('Page authors = ' + authors);
	let resolvedAuthors = Promise.resolve(authors);
	console.log('resolvedAuthors = ' + resolvedAuthors);
	let authorContent = 'hi';
	// authors.map((author) => {
	// 	authorContent += `<p>${author.attributes.name}</p>`;
	// });

	return (
		<>
			<Head>
				<title>NerdAlert Authors</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>NerdAlert Authors</h1>

				<p>Authors starts here</p>
				{authorContent}
				<p>Authors ends here</p>

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
