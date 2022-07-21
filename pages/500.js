import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/layout';
import styles from '@/styles/404.module.css';

export default function InternalServer() {
	return (
		<Layout
			title="NerdAlert Blog | Error 500"
			description="500 page for the NerdAlert Blog. Internal server error."
			additionalKeywords="500, error, not, found"
		>
			<div className={styles.error}>
				<h1>
					<FaExclamationTriangle /> 500 Error
				</h1>
				<p>Oh no! There&apos;s been an error with our servers.</p>

				<Link href="/">
					<a className={styles.errorLink}>Head back to safety</a>
				</Link>
			</div>
		</Layout>
	);
}
