import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

export default function AllArticles({ allArticles }) {
	return (
		<>
			<Layout
				title="NerdAlert Blog | All Articles"
				description="A list of all the articles available on the NerdAlert site."
			>
				<h1 className={styles.title}>NerdAlert Articles</h1>

				<div className={card.grid}>
					{allArticles.map((article) => {
						return (
							<a
								href={`/articles/${article.id}`}
								key={article.id}
								className={card.card}
							>
								<div className={card.cardImageContainer}>
									{article.attributes.image && (
										<Image
											className={card.cardImage}
											src={
												article.attributes.image.data.attributes.formats.small
													.url
											}
											alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
											layout="fill"
											objectFit="contain"
										/>
									)}
								</div>
								<h2>{article.attributes.title}</h2>
								<p>{article.attributes.tagline}</p>
								{article.attributes.author && (
									<p className={card.authorName}>
										{article.attributes.author.data.attributes.name}
									</p>
								)}
							</a>
						);
					})}
				</div>
			</Layout>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
AllArticles.getInitialProps = async (ctx) => {
	const allArticles = await contentSvc(
		'articles?sort=publishedAt:ASC&populate=*'
	);
	return { allArticles };
};
