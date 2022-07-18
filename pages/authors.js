import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Home.module.css';
import contentSvc from '@/services/content-svc';

export default function AllAuthors({ allAuthors }) {
	return (
		<>
			<Layout
				title="NerdAlert Blog | All Authors"
				description="A list of all the authors that have contributed to the NerdAlert site."
			>
				<h1 className={styles.title}>NerdAlert Authors</h1>

				<div className={styles.grid}>
					{allAuthors.map((author) => {
						return (
							<a
								href="https://nextjs.org/docs"
								key={author.id}
								className={styles.card}
							>
								<span className={styles.cardImageContainer}>
									<Image
										className={styles.cardImage}
										src="/logo.png"
										alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
										layout="fill"
										objectFit="contain"
									/>
								</span>
								<h2>{author.attributes.name}</h2>
								<p>{author.attributes.tagline}</p>
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
	const allAuthors = await contentSvc('authors');
	return { allAuthors };
};
