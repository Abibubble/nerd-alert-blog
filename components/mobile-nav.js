import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import mobile from '@/styles/Mobile.module.css';
import { FaSearch, FaBars } from 'react-icons/fa';

export default function Header() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const [term, setTerm] = useState('');

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search?term=${term}`);
		setTerm('');
	};

	return (
		<div className={mobile.mobileHeader}>
			<a href="/">
				<div className={mobile.logoContainer}>
					<Image
						className={mobile.logo}
						src="/logo.png"
						alt="NerdAlert Logo, constisting of an icon of a laptop on a purple background with the text 'NerdAlert'"
						layout="fill"
						objectFit="contain"
						priority={true}
					/>
				</div>
			</a>

			<button
				className={mobile.burgerIconContainer}
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				<FaBars className={mobile.burgerIcon} />
			</button>

			<nav
				className={
					isNavExpanded ? `${mobile.visibleMainNav}` : `${mobile.hiddenMainNav}`
				}
			>
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
					<li>
						<div className={mobile.search}>
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									placeholder="Search"
									value={term}
									onChange={(e) => setTerm(e.target.value)}
								/>
							</form>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
}
