import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import card from '@/styles/Card.module.css';
import categorySvc from '@/services/category-svc';
import articleSvc from '@/services/article-svc';

export default function SingleCategory({ categoryName, articles }) {
	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${categoryName}`}
				description={`A list of all the articles and videos available in the ${categoryName} category on the NerdAlert site.`}
			>
				<div className={styles.container}>
					<h2 className={styles.title}>{categoryName}</h2>
					<hr className={styles.hr} />
					<div className={card.grid}>
						{articles.map((article) => {
							return (
								<a
									href={`/articles/${article.id}`}
									key={article.id}
									className={card.card}
								>
									<div className={card.cardImageContainer}>
										{article.image && (
											<Image
												className={card.cardImage}
												src={article.image.formats.small.url}
												alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
												layout="fill"
												objectFit="contain"
											/>
										)}
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
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps({ resolvedUrl }) {
	let currentSlug = resolvedUrl.substring(12);

	const categoryQuery = {
		filters: {
			slug: {
				$containsi: currentSlug,
			},
		},
	};

	let category = await categorySvc(categoryQuery);

	const categoryName = await category.data[0].name;

	const articlesQuery = {
		filters: {
			categories: {
				name: {
					$eq: categoryName,
				},
			},
		},
	};

	let articles = await articleSvc(articlesQuery);
	articles = articles.data;

	return { props: { categoryName, articles } };
}
