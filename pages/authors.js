import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import contentSvc from '../services/content-svc';

export default function AllAuthors({ allAuthors }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="NerdAlert Authors, the authors page on the NerdAlert blog site for the members of NerdAlert."
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
					content="NerdAlert Authors, the articles page on the NerdAlert blog site for the members of NerdAlert."
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
					content="NerdAlert Authors, the articles page on the NerdAlert blog site for the members of NerdAlert."
				/>
				<meta
					name="twitter:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<title>NerdAlert Authors</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>NerdAlert Authors</h1>

				<div className={styles.grid}>
					{allAuthors.map((author) => {
						return (
							<a
								href="https://nextjs.org/docs"
								key={author.id}
								className={styles.card}
							>
								<span className={styles.cardImageContainer}>
									<Image
										className={styles.cardImage}
										src="/logo.png"
										alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
										layout="fill"
										objectFit="contain"
									/>
								</span>
								<h2>{author.attributes.name}</h2>
								<p>{author.attributes.tagline}</p>
							</a>
						);
					})}
				</div>
			</main>
		</>
	);
}

// Collect all authors from the content service, and pass them in as a page prop before the page loads
AllAuthors.getInitialProps = async (ctx) => {
	const allAuthors = await contentSvc('authors');
	return { allAuthors };
};
