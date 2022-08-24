import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import card from '@/styles/Card.module.css';
import videoSvc from '@/services/video-svc';
import articleSvc from '@/services/article-svc';
import categorySvc from '@/services/category-svc';

let term;

export default function Search({ articles, videos, categories }) {
	const router = useRouter();
	term = router.query.term;

	let noResultsFound = false;

	if (categories.length === 0 && videos.length === 0 && articles.length === 0) {
		noResultsFound = true;
	}

	console.log('categories', categories);

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
								console.log(category);
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

				{noResultsFound && (
					<p>
						Oh no! No results were found for &quot;{term}&quot;. Try searching
						for something else.
					</p>
				)}
			</Layout>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { term } = ctx.query;

	let articles = [];
	let categories = [];
	let videos = [];

	const queryFunc = (field) => {
		return {
			filters: {
				[field]: {
					$containsi: term,
				},
			},
		};
	};

	const articleTitle = await articleSvc(queryFunc('title'));
	const articleContent = await articleSvc(queryFunc('content'));
	const articleTagline = await articleSvc(queryFunc('tagline'));

	const videoTitle = await videoSvc(queryFunc('title'));
	const videoTagline = await videoSvc(queryFunc('tagline'));

	const categoryName = await categorySvc(queryFunc('name'));

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
	function makeUnique(array) {
		array = array.flat();
		array = [...new Map(array.map((v) => [v.id, v])).values()];
		return array;
	}

	articles = makeUnique(articles);
	categories = makeUnique(categories);
	videos = makeUnique(videos);

	articles = articles[0].data;
	categories = categories[0].data;
	videos = videos[0].data;

	return { props: { articles, videos, categories } };
}
