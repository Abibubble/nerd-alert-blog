import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import authorSvc from '@/services/author-svc';
import { marked } from 'marked';

const xss = require('xss');

export default function SingleAuthor(author) {
	author = author.author;
	const aboutYou = xss(marked.parse(author.aboutYou));

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${author.name}`}
				description={`Information about ${author.name}, an author on the NerdAlert site.`}
				imageUrl={author.imageUrl}
				imageAlt={author.image.alternativeText}
				additionalKeywords={author.name}
			>
				<div className={styles.container}>
					<div className={styles.authorGrid}>
						<div>
							<h2 className={styles.title}>{author.name}</h2>
							<p className={styles.tagline}>{author.tagline}</p>
						</div>
						<div className={styles.avatarContainer}>
							<Image
								src={author.image.formats.small.url}
								alt={author.image.alternativeText}
								layout="fill"
								priority={true}
							/>
						</div>
					</div>
					<hr className={styles.hr} />
					<div
						dangerouslySetInnerHTML={{ __html: aboutYou }}
						className={styles.aboutYou}
					/>
					<div className={styles.socialGrid}>
						<a
							href={author.github}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLinks}
						>
							<FaGithub className={styles.icon} /> GitHub
						</a>
						<a
							href={author.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLinks}
						>
							<FaLinkedin className={styles.icon} /> LinkedIn
						</a>
					</div>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps({ resolvedUrl }) {
	let currentSlug = resolvedUrl.substring(9);

	const query = {
		filters: {
			slug: {
				$containsi: currentSlug,
			},
		},
	};

	let author = await authorSvc(query);
	author = author.data[0];

	return { props: { author } };
}
