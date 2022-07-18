import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function About() {
	return (
		<Layout
			additionalTitle=" | About Us"
			description="A page to find out information about the members of NerdAlert."
			additionalKeywords="about"
		>
			<h1 className={styles.title}>About NerdAlert</h1>
			<p>Info about us and how we met, etc.</p>

			<div className={styles.grid}>
				<a href="https://nextjs.org/docs" className={styles.card}>
					<span className={styles.cardImageContainer}>
						<Image
							className={styles.cardImage}
							src="/logo.png"
							alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
							layout="fill"
							objectFit="contain"
						/>
					</span>
					<h2>Author name</h2>
				</a>
			</div>
		</Layout>
	);
}
