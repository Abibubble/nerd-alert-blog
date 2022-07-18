import Layout from '@/components/layout';
import styles from '@/styles/Home.module.css';
import contentSvc from '@/services/content-svc';

export default function AllVideos({ allVideos }) {
	return (
		<Layout
			additionalTitle=" | All Videos"
			description="A list of all videos available on the NerdAlert site."
		>
			<h1 className={styles.title}>NerdAlert Videos</h1>

			<div className={styles.grid}>
				{allVideos.map((video) => {
					return (
						<a
							href="https://nextjs.org/docs"
							key={video.id}
							className={styles.card}
						>
							<span className={styles.cardImageContainer}></span>
							<h2>{video.attributes.title}</h2>
							<p className={styles.authorName}>
								{video.attributes.author.data.attributes.name}
							</p>
						</a>
					);
				})}
			</div>
		</Layout>
	);
}

// Collect all videos from the content service, and pass them in as a page prop before the page loads
AllVideos.getInitialProps = async (ctx) => {
	const allVideos = await contentSvc('videos?populate=*');
	return { allVideos };
};
