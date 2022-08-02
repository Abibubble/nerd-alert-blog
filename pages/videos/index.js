import Image from 'next/image';
import Layout from '@/components/layout';
import Pagination from '@/components/pagination';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';
import paginationSvc from '@/services/pagination-svc';
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

// Collect all videos from the content service, and pass them in as a page prop before the page loads
AllVideos.getInitialProps = async (ctx) => {
	let { page } = ctx.query;
	if (!page) {
		page = 1;
	}

	const allVideos = await contentSvc(
		`videos?sort=publishedAt:ASC&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
	);

	// Fetch number of articles for pagination
	const paginationVideos = await paginationSvc(
		`videos?sort=publishedAt:ASC&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
	);

	const currentPage = +page;

	const total = paginationVideos.meta.pagination.total;

	return { allVideos, currentPage, total };
};
