import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import about from '@/styles/About.module.css';

export default function About() {
	return (
		<Layout
			title="NerdAlert Blog | About Us"
			description="A page to find out information about the members of NerdAlert."
			additionalKeywords="about"
		>
			<h1 className={styles.title}>About NerdAlert</h1>
			<p className={about.aboutUs}>
				NerdAlert was formed thanks to the wonderful{' '}
				<a href="www.codeinstitute.net">Code Institute</a> and their Diploma in
				Full Stack Software Development. We were all students, communicating on
				a Slack workspace with over 5000 other students.
			</p>
			<p className={about.aboutUs}>
				Through Hackathons, code help, impostor syndrome chats, and supporting
				other students, we got chatting one by one. Our private group chat
				increased in size rapidly, slowly inviting other students that had a
				nerdy mindset.
			</p>
			<p className={about.aboutUs}>
				Despite many of us having finished our studies, we still chat on a daily
				basis, helping each other with code issues, chatting about job
				opportunities, posting memes and photos of our pets, and generally
				chatting about life.
			</p>
			<p className={about.aboutUs}>
				What started as a few students helping each other to get through a
				course has become a group of lifelong friends - Known as NerdAlert!
			</p>
		</Layout>
	);
}
