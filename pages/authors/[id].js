import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/About.module.css';
import authorStyles from '@/styles/Author.module.css';
import contentSvc from '@/services/content-svc';
import { API_URL } from '@/config/index';

let id;

export default function SingleAuthor(author) {
	const router = useRouter();
	id = router.query.id;

	return (
		<>
			<Layout>
				<div className={styles.container}>
					<h2 className={styles.title}>{author.name}</h2>
					<p className={authorStyles.tagline}>{author.tagline}</p>
					<hr className={authorStyles.hr} />
					<p className={styles.description}>{author.aboutYou}</p>
					<div className={authorStyles.avatarContainer}>
						<Image
							src={`${API_URL}${author.avatar.data.attributes.formats.small.url}`}
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
