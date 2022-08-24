import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import articleSvc from '@/services/article-svc';
import { marked } from 'marked';

const xss = require('xss');

export default function SingleArticle(article) {
	article = article.article;
	const articleContent = xss(marked.parse(article.content));

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${article.title}`}
				description={`${article.title}, an article on the NerdAlert site.`}
			>
				<div className={styles.container}>
					{article.image !== null && (
						<div className={styles.cardImageContainer}>
							<Image
								className={styles.cardImage}
								src={article.image.formats.small.url}
								alt={article.image.alternativeText}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					)}
					<h1 className={styles.articleTitle}>{article.title}</h1>
					{article.author !== null && (
						<p className={styles.authorName}>{article.author.name}</p>
					)}
					<p className={styles.articleDate}>
						{new Date(article.publishedAt).toLocaleDateString('en-gb')}
					</p>
					<div
						dangerouslySetInnerHTML={{ __html: articleContent }}
						className={styles.content}
					/>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps({ resolvedUrl }) {
	let currentSlug = resolvedUrl.substring(10);

	const query = {
		filters: {
			slug: {
				$containsi: currentSlug,
			},
		},
	};

	let article = await articleSvc(query);
	article = article.data[0];

	return { props: { article } };
}
