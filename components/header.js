import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.css';
import { BiSearch } from 'react-icons/fa';

export default function Header() {
	const [term, setTerm] = useState('');

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search?term=${term}`);
		setTerm('');
	};

	return (
		<header className={styles.header}>
			<a href="/">
				<div className={styles.logoContainer}>
					<Image
						className={styles.logo}
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						layout="fill"
						objectFit="contain"
						priority={true}
					/>
				</div>
			</a>

			<div className={styles.search}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</form>
			</div>

			<nav className={styles.mainNav}>
				<ul>
					<li>
						<a href="/articles">Articles</a>
					</li>
					<li>
						<a href="/videos">Videos</a>
					</li>
					<li>
						<a href="/authors">Authors</a>
					</li>
					<li>
						<a href="/categories">Categories</a>
					</li>
					<li>
						<a href="/about">About Us</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
