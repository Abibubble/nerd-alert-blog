import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import styles from '@/styles/SinglePages.module.css';

let id;

export default function SingleVideo(video) {
	const router = useRouter();
	id = router.query.id;

	return (
		<>
			<Layout>
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
SingleVideo.getInitialProps = async (ctx) => {
	let video = await contentSvc(`videos?id=${id}&populate=*`);
	video = await video[0].attributes;
	return video;
};
