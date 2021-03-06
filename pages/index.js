import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

export default function Home({ allArticles }) {
	return (
		<>
			<Layout>
				<h1 className={styles.title}>Welcome to NerdAlert!</h1>

				<div className={card.grid}>
					{allArticles.map((article) => {
						return (
							<a
								href={`/articles/${article.slug}`}
								key={article.id}
								className={card.card}
							>
								<div className={card.cardImageContainer}>
									<Image
										className={card.cardImage}
										src={
											article.attributes.image.data.attributes.formats.small.url
										}
										alt={
											article.attributes.image.data.attributes.alternativeText
										}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<h2>{article.attributes.title}</h2>
								<p>{article.attributes.tagline}</p>
								<p className={card.authorName}>
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
	const allArticles = await contentSvc(
		'articles?sort=publishedAt:ASC&pagination[pageSize]=3&pagination[page]=1&populate=*'
	);
	return { allArticles };
};
