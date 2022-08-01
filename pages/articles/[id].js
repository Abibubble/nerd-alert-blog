import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import contentSvc from '@/services/content-svc';

let id;

export default function SingleArticle(article) {
	const router = useRouter();
	id = router.query.id;
	article = article.article;

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${article.title}`}
				description={`${article.title}, an article on the NerdAlert site.`}
			>
				<div className={styles.container}>
					{article.image.data !== null && (
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
					<h2 className={styles.title}>{article.title}</h2>
					{article.author.data !== null && <p>{article.author.name}</p>}
					<p>{new Date(article.publishedAt).toLocaleDateString('en-gb')}</p>
					<p className={styles.description}>{article.content}</p>
				</div>
			</Layout>
		</>
	);
}

// Collect a single article from the content service, and pass it in as a page prop before the page loads
export async function getServerSideProps(ctx) {
	let { id } = ctx.query;
	let article = await contentSvc(`articles/${id}?populate=*`);
	return { props: { article } };
}
