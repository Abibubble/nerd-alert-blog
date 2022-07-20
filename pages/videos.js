import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

export default function AllVideos({ allVideos }) {
	return (
		<Layout
			title="NerdAlert Blog | All Videos"
			description="A list of all videos available on the NerdAlert site."
		>
			<h1 className={styles.title}>NerdAlert Videos</h1>

			<div className={card.grid}>
				{allVideos.map((video) => {
					return (
						<a
							href={`/videos/${video.id}`}
							key={video.id}
							className={card.card}
						>
							<span className={card.cardImageContainer}></span>
							<h2>{video.attributes.title}</h2>
							<p className={card.authorName}>
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
