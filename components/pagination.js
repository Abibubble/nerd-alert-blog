import styles from '@/styles/Pagination.module.css';
import { PER_PAGE } from '@/config/index';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination(page) {
	const lastPage = Math.ceil(page.total / PER_PAGE);

	return (
		<div className={styles.paginationWrapper}>
			{page.page > 1 && (
				<a href={`/articles?page=${page.page - 1}`} className={styles.prev}>
					<FaChevronLeft className={styles.icon} /> Prev
				</a>
			)}

			{page.page < lastPage && (
				<a href={`/articles?page=${page.page + 1}`} className={styles.next}>
					Next <FaChevronRight className={styles.icon} />
				</a>
			)}
		</div>
	);
}
