import { FaImage, FaExclamationTriangle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { parseCookies } from '@/helpers/index';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/layout';
import Modal from '@/components/modal';
import ImageUpload from '@/components/image-upload';
import { API_URL } from '@/config/index';
import form from '@/styles/Form.module.css';
import styles from '@/styles/Common.module.css';
import contentSvc from '@/services/content-svc';

export default function EditArticle(article) {
	article = article.article;

	const [values, setValues] = useState({
		title: article.attributes.title,
		tagline: article.attributes.tagline,
		content: article.attributes.content,
	});

	const [imagePreview, setImagePreview] = useState(
		article.attributes.image.data
			? article.attributes.image.data.attributes.url
			: null
	);

	const [showModal, setShowModal] = useState(false);

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

		const res = await fetch(`${API_URL}/api/articles/${article.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: values }),
		});

		if (!res.ok) {
			toast.error('Something went wrong');
		} else {
			// const article = await res.json();
			router.push(`/articles/${article.id}`);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const imageUploaded = async (e) => {
		const res = await fetch(`${API_URL}/api/articles/${article.id}`);
		const data = await res.json();
		setImagePreview(article.attributes.image.data);
		setShowModal(false);
		router.reload();
	};

	return (
		<>
			<Layout
				title="NerdAlert | Edit Article"
				description="Edit an article on the NerdAlert site."
			>
				<h1 className={styles.title}>Edit Article</h1>
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
							<label htmlFor="content">Content</label>
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

				<h2>Event Image</h2>
				{imagePreview ? (
					<>
						<div className={form.imageContainer}>
							<Image
								src={imagePreview}
								alt={article.attributes.image.data.attributes.alternativeText}
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<p className={form.imageAltText}>Alt text:</p>
						{article.attributes.image.data.attributes.alternativeText !==
						null ? (
							<p className={form.image}>
								&apos;$
								{article.attributes.image.data.attributes.alternativeText}&apos;
							</p>
						) : (
							<p className={form.image}>
								<FaExclamationTriangle /> No alt text set
							</p>
						)}
					</>
				) : (
					<p>No image uploaded</p>
				)}

				{imagePreview ? (
					<button onClick={() => setShowModal(true)}>
						<FaImage /> Change Image
					</button>
				) : (
					<button onClick={() => setShowModal(true)}>
						<FaImage /> Set Image
					</button>
				)}

				<Modal show={showModal} onClose={() => setShowModal(false)}>
					<ImageUpload
						itemId={article.id}
						imageUploaded={imageUploaded}
						model="article"
					/>
				</Modal>
			</Layout>
		</>
	);
}

// Collect a single article from the content service, and pass it in as a page prop before the page loads
export async function getServerSideProps(ctx) {
	// const { token } = parseCookies(req);
	const { id } = ctx.query;

	const article = await contentSvc(`articles/${id}?populate=*`);
	// const article = await res.json();

	return { props: { article } };
}
