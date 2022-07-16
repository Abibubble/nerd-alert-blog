import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import contentSvc from '../services/content-svc';

export default function Videos({ allVideos }) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="NerdAlert Videos, the videos page on the NerdAlert blog site for videos created by members of NerdAlert."
				/>
				<meta
					name="keywords"
					content="nerdalert, nerd, nerds, alert, blog, blogs, video, videos, author, authors, developer, developers"
				/>
				<link rel="canonical" href="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" name="title" content="NerdAlert Blog" />
				<meta
					property="og:description"
					content="NerdAlert Videos, the videos page on the NerdAlert blog site for videos created by members of NerdAlert."
				/>
				<meta property="og:url" content="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:site_name" content="NerdAlert Blog" />
				<meta property="og:image" name="image" content="docs/finalpage.png" />
				<meta
					property="og:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<meta name="twitter:title" content="NerdAlert Blog" />
				<meta
					name="twitter:description"
					content="NerdAlert Videos, the videos page on the NerdAlert blog site for videos created by members of NerdAlert."
				/>
				<meta
					name="twitter:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<title>NerdAlert Videos</title>
			</Head>

			<main className={styles.main}>
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
			</main>
		</>
	);
}

// Collect all videos from the content service, and pass them in as a page prop before the page loads
Videos.getInitialProps = async (ctx) => {
	const allVideos = await contentSvc('videos?populate=*');
	return { allVideos };
};
