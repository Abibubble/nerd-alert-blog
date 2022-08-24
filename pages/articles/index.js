import Image from 'next/image';
import Layout from '@/components/layout';
import Pagination from '@/components/pagination';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import articleSvc from '@/services/article-svc';
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
								<h2 className={card.articleTitle}>{article.title}</h2>
								<p className={card.articleTagline}>{article.tagline}</p>
								{article.author && (
									<p className={card.articleAuthor}>{article.author.name}</p>
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

export async function getServerSideProps(ctx) {
	let { page } = ctx.query;
	if (!page) {
		page = 1;
	}

	const query = {
		sort: 'publishedAt:asc',
		pagination: {
			page: page,
			pageSize: PER_PAGE,
		},
	};

	let allArticles = await articleSvc(query);

	const currentPage = +page;
	const total = allArticles.meta.pagination.total;

	allArticles = allArticles.data;

	return { props: { allArticles, currentPage, total } };
}
