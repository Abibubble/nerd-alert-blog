import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import form from '@/styles/Form.module.css';
import contentSvc from '@/services/content-svc';
import { API_URL } from '@/config/index';

export default function AddArticle() {
	const [values, setValues] = useState({
		title: '',
		tagline: '',
		content: '',
	});

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validation
		const hasEmptyFields = Object.values(values).some(
			(element) => element === ''
		);

		if (hasEmptyFields) {
			toast.error('Please fill in all fields');
		}

		const res = await fetch(`${API_URL}/api/articles`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: values }),
		});

		if (!res.ok) {
			toast.error('Something went wrong');
		} else {
			const article = await res.json();
			console.log(article.data.id);
			router.push(`/articles/${article.data.id}`);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<>
			<Layout title="NerdAlert | Add Article">
				<h1 className={styles.title}>Add Article</h1>
				<ToastContainer />
				<form className={form.form} onSubmit={handleSubmit}>
					<div className={form.grid}>
						<div>
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								name="title"
								defaultValue={values.title}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="tagline">Tagline</label>
							<input
								type="text"
								id="tagline"
								name="tagline"
								defaultValue={values.tagline}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<label htmlFor="title">Content</label>
							<textarea
								type="text"
								id="content"
								name="content"
								defaultValue={values.content}
								onChange={handleInputChange}
							/>
						</div>
						<button type="submit" value="Submit article">
							Submit article
						</button>
					</div>
				</form>
			</Layout>
		</>
	);
}

// Collect all articles from the content service, and pass them in as a page prop before the page loads
AddArticle.getInitialProps = async (ctx) => {
	const allArticles = await contentSvc(
		'articles?sort=publishedAt:ASC&pagination[pageSize]=3&pagination[page]=1&populate=*'
	);
	return { allArticles };
};
