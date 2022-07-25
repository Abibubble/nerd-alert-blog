import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';
import contentSvc from '@/services/content-svc';

let id;

export default function SingleVideo(video) {
	const router = useRouter();
	id = router.query.id;
	video = video.video;

	return (
		<>
			<Layout
				title={`NerdAlert Blog | ${video.title}`}
				description={`${video.title}, a video on the NerdAlert site.`}
			>
				<div className={styles.container}>
					<h2 className={styles.title}>{video.title}</h2>
					<video width="500px" controls>
						<source src={video.video.data[0].attributes.url} />
						Your browser does not support the video tag
					</video>
				</div>
			</Layout>
		</>
	);
}

// Collect a single video from the content service, and pass it in as a page prop before the page loads
export async function getServerSideProps(ctx) {
	let { id } = ctx.query;
	let video = await contentSvc(`videos/${id}?populate=*`);
	video = video[0].attributes;
	return { props: { video } };
}
