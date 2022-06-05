import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setProducts(data);
			});
	}, []);

	return (
		<div className='my-3 mt-5 py-5'>
			<h1 className='text-center mt-3 text-4xl font-bold text-gray-500'>
				Our Products
			</h1>
			<p className='text-center text-lg text-gray-500 mt-0 mb-10'>
				Please choose your desire products
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  container mx-auto'>
				{products.length > 0
					? products.map((product) => (
							<SingleProduct key={product.id} product={product} />
					  ))
					: null}
				{/* <SingleProduct />
				<SingleProduct />
				<SingleProduct />
				<SingleProduct />
				<SingleProduct />
				<SingleProduct /> */}
			</div>
		</div>
	);
};

export default Products;
