import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import contentSvc from '@/services/content-svc';

let id;

export default function SingleAuthor(author) {
	const router = useRouter();
	id = router.query.id;

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${author.name}`}
				description={`Information about ${author.name}, an author on the NerdAlert site.`}
			>
				<div className={styles.container}>
					<h2 className={styles.title}>{author.name}</h2>
					<p className={styles.tagline}>{author.tagline}</p>
					<hr className={styles.hr} />
					<p className={styles.description}>{author.aboutYou}</p>
					<div className={styles.avatarContainer}>
						<Image
							src={author.avatar.data.attributes.formats.small.url}
							alt={author.avatar.data.attributes.alternativeText}
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
SingleAuthor.getInitialProps = async (ctx) => {
	let author = await contentSvc(`authors?id=${id}&populate=*`);
	author = await author[0].attributes;
	return author;
};
