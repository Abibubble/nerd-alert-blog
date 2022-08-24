import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import articleSvc from '@/services/article-svc';

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
										src={article.image.formats.small.url}
										alt={article.image.alternativeText}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<h2 className={card.articleTitle}>{article.title}</h2>
								<p className={card.articleTagline}>{article.tagline}</p>
								{article.author && (
									<p className={card.articleAuthor}>{article.author.name}</p>
								)}
							</a>
						);
					})}
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const query = {
		sort: 'publishedAt',
		pagination: {
			pageSize: 6,
			page: 1,
		},
	};

	let allArticles = await articleSvc(query);
	allArticles = allArticles.data;

	return { props: { allArticles } };
}
