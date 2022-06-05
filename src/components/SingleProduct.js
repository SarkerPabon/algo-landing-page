const SingleProduct = ({ product }) => {
	const { id, title, description, img } = product;
	return (
		<div className='w-100  overflow-hidden shadow-lg rounded-lg'>
			<img
				className='w-full rounded-md'
				src={img}
				alt='Sunset in the mountains'
			/>
			<div className='px-6 py-4'>
				<div className='font-bold mb-2 text-center text-2xl'>{title}</div>
				<p className='text-gray-700 text-base text-justify'>
					{description.slice(0, 200)} ...
				</p>
			</div>
			<div className='pb-2'>
				<button className=' p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
					Details
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;
