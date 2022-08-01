import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/layout';
import styles from '@/styles/Common.module.css';
import form from '@/styles/Form.module.css';
import contentSvc from '@/services/content-svc';
import { API_URL } from '@/config/index';

export default function AddCategory() {
	const [values, setValues] = useState({
		name: '',
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

		const res = await fetch(`${API_URL}/api/categories`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: values }),
		});

		if (!res.ok) {
			toast.error('Something went wrong');
		} else {
			const category = await res.json();
			router.push(`/categories/${category.id}`);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<>
			<Layout
				title="NerdAlert | Add Category"
				description="Add a new category to the NerdAlert blog site."
			>
				<h1 className={styles.title}>Add Category</h1>
				<ToastContainer />
				<form className={form.form} onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							defaultValue={values.name}
							onChange={handleInputChange}
						/>
					</div>

					<button type="submit" value="Submit category">
						Submit category
					</button>
				</form>
			</Layout>
		</>
	);
}

// Collect all categories from the content service, and pass them in as a page prop before the page loads
AddCategory.getInitialProps = async (ctx) => {
	const allCategories = await contentSvc('categories?populate=*');
	return { allCategories };
};
