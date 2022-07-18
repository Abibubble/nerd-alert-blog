import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import contentSvc from '../services/content-svc';

export default function Home({ allArticles }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="NerdAlert Blog, a blog site for articles and videos created by members of NerdAlert."
				/>
				<meta
					name="keywords"
					content="nerdalert, nerd, nerds, alert, blog, blogs, video, videos, author, authors, developer, developers"
				/>
				<link rel="canonical" href="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" name="title" content="NerdAlert Blog" />
				<meta
					property="og:description"
					content="NerdAlert Blog, a blog site for articles and videos created by members of NerdAlert."
				/>
				<meta property="og:url" content="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:site_name" content="NerdAlert Blog" />
				<meta property="og:image" name="image" content="docs/finalpage.png" />
				<meta
					property="og:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<meta name="twitter:title" content="NerdAlert Blog" />
				<meta
					name="twitter:description"
					content="NerdAlert Blog, a blog site for articles and videos created by members of NerdAlert."
				/>
				<meta
					name="twitter:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<title>NerdAlert Blog</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to NerdAlert!</h1>

				<div className={styles.grid}>
					{allArticles.map((article) => {
						return (
							<a
								href="https://nextjs.org/docs"
								key={article.id}
								className={styles.card}
							>
								<span className={styles.cardImageContainer}>
									<Image
										className={styles.cardImage}
										src={
											article.attributes.image.data.attributes.formats.small.url
										}
										alt={
											article.attributes.image.data.attributes.alternativeText
										}
										layout="fill"
										objectFit="contain"
									/>
								</span>
								<h2>{article.attributes.title}</h2>
								<p>{article.attributes.tagline}</p>
								<p className={styles.authorName}>
									{article.attributes.author.data.attributes.name}
								</p>
							</a>
						);
					})}
				</div>
			</main>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
Home.getInitialProps = async (ctx) => {
	const allArticles = await contentSvc('articles?populate=*');
	return { allArticles };
};
