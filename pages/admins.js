import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

export default function Admins({ allArticles }) {
	return (
		<>
			<Layout
				title="NerdAlert Blog | Admin"
				description="The admin page on the NerdAlert site."
			>
				<h1 className={styles.title}>Welcome back, Nerd!</h1>
				<a href="/add-category">Add a new category</a>
				<a href="/add-article">Add a new article</a>
				<a href="/articles/edit/1">Edit article 1</a>
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
