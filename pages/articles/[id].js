import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import styles from '@/styles/About.module.css';
import contentSvc from '@/services/content-svc';

let id;

export default function SingleArticle(article) {
	const router = useRouter();
	id = router.query.id;

	return (
		<>
			<Layout>
				<div className={styles.container}>
					<h2 className={styles.title}>{article.title}</h2>
					<p>{article.author.data.attributes.name}</p>
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
