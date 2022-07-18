import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Home.module.css';
import contentSvc from '@/services/content-svc';

export default function Home({ allArticles }) {
	return (
		<>
			<Layout>
				<h1 className={styles.title}>Welcome to NerdAlert!</h1>

				<div className={styles.grid}>
					{allArticles.map((article) => {
						return (
							<a
								href={`/articles/${article.id}`}
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
			</Layout>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
Home.getInitialProps = async (ctx) => {
	const allArticles = await contentSvc('articles?populate=*');
	return { allArticles };
};
