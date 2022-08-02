import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

export default function AllCategories({ allCategories }) {
	return (
		<>
			<Layout
				title="NerdAlert Blog | All Categories"
				description="A list of all the categories available on the NerdAlert site."
			>
				<h1 className={styles.title}>NerdAlert Categories</h1>

				<div className={card.grid}>
					{allCategories.map((category) => {
						return (
							<a
								href={`/categories/${category.id}`}
								key={category.id}
								className={card.categoryCard}
							>
								<div className={card.cardImageContainer}>
									<Image
										className={card.cardImage}
										src={category.image.formats.small.url}
										alt={category.image.alternativeText}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<h2 className={card.articleTitle}>{category.name}</h2>
							</a>
						);
					})}
				</div>
			</Layout>
		</>
	);
}

// Collect all Categories from the content service, and pass them in as a page prop before the page loads
AllCategories.getInitialProps = async (ctx) => {
	const allCategories = await contentSvc(
		'categories?sort=publishedAt:ASC&populate=*'
	);
	return { allCategories };
};
