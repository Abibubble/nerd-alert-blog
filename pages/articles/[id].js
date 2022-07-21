import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import contentSvc from '@/services/content-svc';

let id;

export default function SingleArticle(article) {
	const router = useRouter();
	id = router.query.id;

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${article.title}`}
				description={`${article.title}, an article on the NerdAlert site.`}
			>
				<div className={styles.container}>
					<div className={styles.cardImageContainer}>
						<Image
							className={styles.cardImage}
							src={article.image.data.attributes.formats.small.url}
							alt={article.image.data.attributes.alternativeText}
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<h2 className={styles.title}>{article.title}</h2>
					<p>{article.author.data.attributes.name}</p>
					<p>{new Date(article.publishedAt).toLocaleDateString('en-gb')}</p>
					<p className={styles.description}>{article.content}</p>
				</div>
			</Layout>
		</>
	);
}

// Collect a single article from the content service, and pass it in as a page prop before the page loads
SingleArticle.getInitialProps = async (ctx) => {
	let article = await contentSvc(`articles?id=${id}&populate=*`);
	article = await article[0].attributes;
	return article;
};
