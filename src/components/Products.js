import SingleProduct from "./SingleProduct";

const Products = () => {
	return (
		<div className='my-3 mt-5'>
			<h1 className='text-center my-3 text-4xl font-bold text-gray-500'>
				Our Products
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  container mx-auto'>
				<SingleProduct />
				<SingleProduct />
				<SingleProduct />
				<SingleProduct />
				<SingleProduct />
				<SingleProduct />
			</div>
		</div>
	);
};

export default Products;
