import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './header';
import Footer from './footer';

export default function Layout({
	additionalTitle,
	additionalKeywords,
	description,
	imageUrl,
	imageAlt,
	canonicalRef,
	pageType,
	children,
}) {
	return (
		<>
			<Head>
				<meta name="description" content={description} />
				<meta
					name="keywords"
					content={`'nerdalert, nerd, nerds, alert, blog, blogs, video, videos, author, authors, developer, developers, '${additionalKeywords}`}
				/>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="canonical" href={canonicalRef} />
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
				/>

				<meta property="og:type" content={pageType} />
				<meta
					property="og:title"
					name="title"
					content={`NerdAlert Blog${additionalTitle}`}
				/>
				<meta property="og:site_name" content="NerdAlert Blog" />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={canonicalRef} />
				<meta property="og:image" name="image" content={imageUrl} />
				<meta property="og:image:alt" content={imageAlt} />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:image" content={imageUrl} />
				<meta name="twitter:image:alt" content={imageAlt} />
				<meta
					name="twitter:title"
					content={`NerdAlert Blog${additionalTitle}`}
				/>
				<meta name="twitter:description" content={description} />

				<link rel="icon" href="/favicon.ico" />
				<title>NerdAlert Blog{additionalTitle}</title>
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.content}>{children}</div>
			</main>

			<Footer />
		</>
	);
}

Layout.defaultProps = {
	additionalTitle: '',
	additionalKeywords: '',
	description:
		'NerdAlert Blog, a blog site for articles and videos created by members of NerdAlert.',
	imageUrl: 'docs/finalpage.png',
	imageAlt: 'An image of the final NerdAlert Blog site on a range of devices',
	canonicalRef: 'https://nerd-alert-blog.vercel.app/',
	pageType: 'website',
};
