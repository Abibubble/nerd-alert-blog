import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

let id;

export default function SingleCategory({ categoryName, articles }) {
	const router = useRouter();
	id = router.query.id;

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

// Collect a single category and all the articles from the content service, and pass it in as a page prop before the page loads
export async function getServerSideProps(ctx) {
	let { id } = ctx.query;
	let category = await contentSvc(`categories/${id}?populate=*`);
	const categoryName = await category.name;
	const articles = await contentSvc(
		`articles?filters[categories][name]=${categoryName}&populate=*`
	);
	return { props: { categoryName, articles } };
}
