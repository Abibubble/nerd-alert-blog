import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

export default function Admins({ allArticles }) {
	return (
		<>
			<Layout>
				<h1 className={styles.title}>Welcome back, Nerd!</h1>
			</Layout>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
Admins.getInitialProps = async (ctx) => {
	const allArticles = await contentSvc(
		'articles?sort=publishedAt:ASC&pagination[pageSize]=3&pagination[page]=1&populate=*'
	);
	return { allArticles };
};
