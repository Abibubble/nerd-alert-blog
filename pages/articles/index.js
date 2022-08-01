import Image from 'next/image';
import Layout from '@/components/layout';
import Pagination from '@/components/pagination';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';
import paginationSvc from '@/services/pagination-svc';
import { PER_PAGE } from '@/config/index';

export default function AllArticles({ allArticles, currentPage, total }) {
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
								<h2>{article.title}</h2>
								<p>{article.tagline}</p>
								{article.author && (
									<p className={card.authorName}>{article.author.name}</p>
								)}
							</a>
						);
					})}
				</div>

				<Pagination page={currentPage} total={total} perPage={PER_PAGE} />
			</Layout>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
AllArticles.getInitialProps = async (ctx, query) => {
	let { page } = ctx.query;
	if (!page) {
		page = 1;
	}

	// Fetch all articles from the content service
	const allArticles = await contentSvc(
		`articles?sort=publishedAt:ASC&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
	);
	// Fetch number of articles for pagination
	const paginationArticles = await paginationSvc(
		`articles?sort=publishedAt:ASC&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
	);

	const currentPage = +page;

	const total = paginationArticles.meta.pagination.total;

	return { allArticles, currentPage, total };
};
