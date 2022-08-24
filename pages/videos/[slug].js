import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import videoSvc from '@/services/video-svc';

export default function SingleVideo(video) {
	video = video.video;

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${video.title}`}
				description={`${video.title}, a video on the NerdAlert site.`}
			>
				<div className={styles.container}>
					<h2 className={styles.articleTitle}>{video.title}</h2>
					<p className={styles.authorName}>{video.author.name}</p>
					<video width="500px" controls>
						<source src={video.video[0].url} />
						Your browser does not support the video tag
					</video>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps({ resolvedUrl }) {
	let currentSlug = resolvedUrl.substring(10);

	const query = {
		filters: {
			slug: {
				$containsi: currentSlug,
			},
		},
	};

	let video = await videoSvc(query);
	video = video.data[0];

	return { props: { video } };
}
