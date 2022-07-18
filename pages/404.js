import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/layout';
import styles from '@/styles/404.module.css';

export default function NotFound() {
	return (
		<Layout
			title="NerdAlert Blog | Error 404"
			description="404 page for the NerdAlert Blog. This page is not found."
			additionalKeywords="404, error, not, found"
		>
			<div className={styles.error}>
				<h1>
					<FaExclamationTriangle /> 404 Error
				</h1>
				<p>Oh no! This page hasn&apos;t been found.</p>

				<Link href="/">
					<a className={styles.errorLink}>Head back to safety</a>
				</Link>
			</div>
		</Layout>
	);
}
