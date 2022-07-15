import React from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function Article() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="About NerdAlert, for information about the members of NerdAlert on the NerdAlert blog site."
				/>
				<meta
					name="keywords"
					content="nerdalert, nerd, nerds, alert, blog, blogs, video, videos, author, authors, developer, developers"
				/>
				<link rel="canonical" href="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" name="title" content="NerdAlert Articles" />
				<meta
					property="og:description"
					content="About NerdAlert, for information about the members of NerdAlert on the NerdAlert blog site."
				/>
				<meta property="og:url" content="https://nerd-alert-blog.vercel.app/" />
				<meta property="og:site_name" content="NerdAlert Blog" />
				<meta property="og:image" name="image" content="docs/finalpage.png" />
				<meta
					property="og:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<meta name="twitter:title" content="NerdAlert Articles" />
				<meta
					name="twitter:description"
					content="About NerdAlert, for information about the members of NerdAlert on the NerdAlert blog site."
				/>
				<meta
					name="twitter:image:alt"
					content="An image of the final NerdAlert Blog site on a range of devices"
				/>
				<title>NerdAlert - article.title</title>
			</Head>
			<div className={styles.container}>
				<h2 className={styles.title}>Article Page</h2>
				<p className={styles.description}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			</div>
		</>
	);
}
