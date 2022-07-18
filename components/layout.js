import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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

			<header className={styles.header}>
				<span className={styles.logoContainer}>
					<Image
						className={styles.logo}
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						layout="fill"
						objectFit="contain"
						priority={true}
					/>
				</span>
				<nav className={styles.mainNav}>
					<ul>
						<li>
							<Link href="/articles">Articles</Link>
						</li>
						<li>
							<Link href="/videos">Videos</Link>
						</li>
						<li>
							<Link href="/authors">Authors</Link>
						</li>
						<li>
							<Link href="/about">About Us</Link>
						</li>
					</ul>
				</nav>
			</header>

			{children}

			<footer className={styles.footer}>
				<p>Built, owned and run by NerdAlert</p>
			</footer>
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
