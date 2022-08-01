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
										className={card.card}
									>
										<h2>{category.attributes.name}</h2>
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
										<h2>{article.attributes.title}</h2>
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
										<h2>{video.attributes.title}</h2>
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
		`videos?filters[title][$containsi]=${term}`
	);
	const videoTagline = await contentSvc(
		`videos?filters[tagline][$containsi]=${term}`
	);

	const categoryName = await contentSvc(
		`categories?filters[name][$containsi]=${term}`
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
