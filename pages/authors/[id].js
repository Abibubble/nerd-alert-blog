import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import contentSvc from '@/services/content-svc';
import { marked } from 'marked';

const xss = require('xss');

let id;

export default function SingleAuthor(author) {
	const router = useRouter();
	id = router.query.id;
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
					<h2 className={styles.title}>{author.name}</h2>
					<p className={styles.tagline}>{author.tagline}</p>
					<hr className={styles.hr} />
					<div dangerouslySetInnerHTML={{ __html: aboutYou }} />
					<a href={author.github} target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					<a href={author.linkedin} target="_blank" rel="noopener noreferrer">
						LinkedIn
					</a>
					<div className={styles.avatarContainer}>
						<Image
							src={author.image.formats.small.url}
							alt={author.image.alternativeText}
							layout="fill"
							priority={true}
						/>
					</div>
				</div>
			</Layout>
		</>
	);
}

// Collect a single author from the content service, and pass it in as a page prop before the page loads
export async function getServerSideProps(ctx) {
	let { id } = ctx.query;
	let author = await contentSvc(`authors/${id}?populate=*`);
	return { props: { author } };
}
