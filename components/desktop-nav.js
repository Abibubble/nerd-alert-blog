import Image from 'next/image';
import desktop from '@/styles/Desktop.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function DesktopNav() {
	const [term, setTerm] = useState('');

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search?term=${term}`);
		setTerm('');
	};

	return (
		<div className={desktop.desktopHeader}>
			<a href="/">
				<div className={desktop.logoContainer}>
					<Image
						className={desktop.logo}
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						layout="fill"
						objectFit="contain"
						priority={true}
					/>
				</div>
			</a>

			<div className={desktop.search}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</form>
			</div>

			<nav className={desktop.mainNav}>
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
		</div>
	);
}
