import Image from 'next/image';
import Layout from '@/components/layout';
import Pagination from '@/components/pagination';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import videoSvc from '@/services/video-svc';
import { PER_PAGE } from '@/config/index';

export default function AllVideos({ allVideos, currentPage, total }) {
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
							<span className={card.cardImageContainer}>
								<Image
									className={card.cardImage}
									src={video.image.formats.small.url}
									alt={video.image.alternativeText}
									layout="fill"
									objectFit="contain"
								/>
							</span>
							<h2 className={card.articleTitle}>{video.title}</h2>
							<p className={card.articleTagline}>{video.tagline}</p>
							{video.author && (
								<p className={card.articleAuthor}>{video.author.name}</p>
							)}
						</a>
					);
				})}
			</div>

			<Pagination page={currentPage} total={total} perPage={PER_PAGE} />
		</Layout>
	);
}

export async function getServerSideProps(ctx) {
	let { page } = ctx.query;
	if (!page) {
		page = 1;
	}

	const query = {
		sort: 'publishedAt:asc',
		pagination: {
			page: page,
			pageSize: PER_PAGE,
		},
	};

	let allVideos = await videoSvc(query);

	const currentPage = +page;
	const total = allVideos.meta.pagination.total;

	allVideos = allVideos.data;

	return { props: { allVideos, currentPage, total } };
}
