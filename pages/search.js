import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import contentSvc from '@/services/content-svc';

let term;

export default function Search({ articles, videos, categories }) {
	const router = useRouter();
	term = router.query.term;

	return (
		<>
			<Layout
				title={`NerdAlert Blog | Search - ${term}`}
				description={`Search results for ${term} on the NerdAlert site.`}
			>
				<h1 className={styles.title}>Search results</h1>
				<p>Search results for &quot;{term}&quot;</p>
				<hr className={styles.hr} />

				{categories.length !== 0 && (
					<>
						<h2>Categories</h2>
						<div className={card.grid}>
							{categories.map((category) => {
								return (
									<a
										href={`/categories/${category.id}`}
										key={category.id}
										className={card.categoryCard}
									>
										<div className={card.cardImageContainer}>
											<Image
												className={card.cardImage}
												src={category.image.formats.small.url}
												alt={category.image.alternativeText}
												layout="fill"
												objectFit="contain"
											/>
										</div>
										<h2 className={card.articleTitle}>{category.name}</h2>
									</a>
								);
							})}
						</div>
					</>
				)}

				{articles.length !== 0 && (
					<>
						<h2>Articles</h2>
						<div className={card.grid}>
							{articles.map((article) => {
								return (
									<a
										href={`/articles/${article.id}`}
										key={article.id}
										className={card.card}
									>
										<div className={card.cardImageContainer}>
											{article.image && (
												<Image
													className={card.cardImage}
													src={article.image.formats.small.url}
													alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
													layout="fill"
													objectFit="contain"
												/>
											)}
										</div>
										<h2 className={card.articleTitle}>{article.title}</h2>
										<p className={card.articleTagline}>{article.tagline}</p>
										{article.author && (
											<p className={card.articleAuthor}>
												{article.author.name}
											</p>
										)}
									</a>
								);
							})}
						</div>
					</>
				)}

				{videos.length !== 0 && (
					<>
						<h2>Videos</h2>
						<div className={card.grid}>
							{videos.map((video) => {
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
					</>
				)}
			</Layout>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
export async function getServerSideProps(ctx) {
	const { term } = ctx.query;

	let articles = [];
	let categories = [];
	let videos = [];

	// Get the data for each filter from the CMS
	const articleTitle = await contentSvc(
		`articles?filters[title][$containsi]=${term}&populate=*`
	);
	const articleContent = await contentSvc(
		`articles?filters[content][$containsi]=${term}&populate=*`
	);
	const articleTagline = await contentSvc(
		`articles?filters[tagline][$containsi]=${term}&populate=*`
	);

	const videoTitle = await contentSvc(
		`videos?filters[title][$containsi]=${term}&populate=*`
	);
	const videoTagline = await contentSvc(
		`videos?filters[tagline][$containsi]=${term}&populate=*`
	);

	const categoryName = await contentSvc(
		`categories?filters[name][$containsi]=${term}&populate=*`
	);

	// Add all data from the CMS into arrays
	function addResultsfromSearch(data) {
		if (data) {
			for (let i = 0; i < data.length; i++) {
				for (let j = 0; j < articles.length; j++) {
					if (data.length !== 0) {
						if (data[i].id !== articles[j].id) {
							articles.push(data[i]);
						}
					}
				}
			}
		}
	}

	if (articleTitle) {
		articles.push(articleTitle);
	}

	addResultsfromSearch(articleContent);

	addResultsfromSearch(articleTagline);

	if (videoTitle) {
		videos.push(videoTitle);
	}

	addResultsfromSearch(videoTagline);

	if (categoryName) {
		categories.push(categoryName);
	}

	// Ensure there are no duplicate objects being passed to the page
	function makeUnique(arr) {
		arr = arr.flat();
		arr = [...new Map(arr.map((v) => [v.id, v])).values()];
		return arr;
	}

	articles = makeUnique(articles);
	categories = makeUnique(categories);
	videos = makeUnique(videos);

	return { props: { articles, videos, categories } };
}
