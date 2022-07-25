import { FaImage } from 'react-icons/fa';
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
	console.log(article);

	const [values, setValues] = useState({
		title: article.attributes.title,
		tagline: article.attributes.tagline,
		content: article.attributes.content,
	});

	// const [imagePreview, setImagePreview] = useState(
	// 	article.attributes.image.data
	// 		? article.attributes.image.data.attributes.formats.thumbnail.url
	// 		: null
	// );

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

	// const imageUploaded = async (e) => {
	// 	const res = await fetch(`${API_URL}/api/articles/${article.id}`);
	// 	const data = await res.json();
	// 	setImagePreview(data.image.formats.thumbnail.url);
	// 	setShowModal(false);
	// };

	return (
		<>
			<Layout title="NerdAlert | Edit Article">
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

				<h2>Event Image</h2>
				{/* {imagePreview ? (
					<Image
						src={imagePreview}
						alt="TODO: Replace this alt text"
						height={100}
						width={170}
					/>
				) : (
					<p>No image uploaded</p>
				)} */}

				<button onClick={() => setShowModal(true)}>
					<FaImage /> Set Image
				</button>

				<Modal show={showModal} onClose={() => setShowModal(false)}>
					<p>Hi</p>
					{/* <ImageUpload
						itemId={article.id}
						imageUploaded={imageUploaded}
						token={token}
					/> */}
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
