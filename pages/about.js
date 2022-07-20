import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';

export default function About() {
	return (
		<Layout
			title="NerdAlert Blog | About Us"
			description="A page to find out information about the members of NerdAlert."
			additionalKeywords="about"
		>
			<h1 className={styles.title}>About NerdAlert</h1>
			<p>Info about us and how we met, etc.</p>
		</Layout>
	);
}
