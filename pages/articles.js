import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Home.module.css';
import contentSvc from '@/services/content-svc';

export default function AllArticles({ allArticles }) {
	return (
		<>
			<Layout
				title="NerdAlert Blog | All Articles"
				description="A list of all the articles available on the NerdAlert site."
			>
				<h1 className={styles.title}>NerdAlert Articles</h1>

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
										src="/logo.png"
										alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
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
AllArticles.getInitialProps = async (ctx) => {
	const allArticles = await contentSvc('articles?populate=*');
	return { allArticles };
};
