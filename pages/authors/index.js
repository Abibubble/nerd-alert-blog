import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

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
								href={`/authors/${author.id}`}
								key={author.id}
								className={card.card}
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
								<p className={card.tagline}>{author.tagline}</p>
							</a>
						);
					})}
				</div>
			</Layout>
		</>
	);
}

// Collect all authors from the content service, and pass them in as a page prop before the page loads
AllAuthors.getInitialProps = async (ctx) => {
	const allAuthors = await contentSvc('authors?sort=name:ASC&populate=*');
	return { allAuthors };
};
