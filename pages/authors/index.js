import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import authorSvc from '@/services/author-svc';

export default function AllAuthors({ allAuthors }) {
	return (
		<>
			<Layout
				title="NerdAlert Blog | All Authors"
				description="A list of all the authors that have contributed to the NerdAlert site."
			>
				<h1 className={styles.title}>NerdAlert Authors</h1>

				<div className={card.grid}>
					{allAuthors.map((author) => {
						return (
							<a
								href={`/authors/${author.slug}`}
								key={author.id}
								className={card.authorCard}
							>
								<div className={card.cardImageContainer}>
									<Image
										className={card.cardImage}
										src={author.image.formats.small.url}
										alt={author.image.alternativeText}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<h2 className={card.authorName}>{author.name}</h2>
								<p className={card.articleTagline}>{author.tagline}</p>
							</a>
						);
					})}
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const query = {
		sort: 'name:asc',
	};

	let allAuthors = await authorSvc(query);
	allAuthors = allAuthors.data;

	return { props: { allAuthors } };
}
