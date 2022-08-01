import { useState } from 'react';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';

export default function ImageUpload({ itemId, imageUploaded, model }) {
	const [image, setImage] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		// Save image from file input into the specific field
		formData.append('files', image);
		formData.append('ref', `api::${model}.${model}`);
		formData.append('refId', itemId);
		formData.append('field', 'image');

		const res = await fetch(`${API_URL}/api/upload`, {
			method: 'POST',
			// headers: {
			// 	Authorization: `Bearer ${token}`,
			// },
			body: formData,
		});

		if (res.ok) {
			imageUploaded();
		}
	};

	const handleFileChange = (e) => {
		// Set image to the first file in the files array
		setImage(e.target.files[0]);
	};

	return (
		<div className={styles.form}>
			<h1>Upload Image</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.file}>
					<input type="file" onChange={handleFileChange} />
				</div>
				<input type="submit" value="Upload" className="btn" />
			</form>
		</div>
	);
}
