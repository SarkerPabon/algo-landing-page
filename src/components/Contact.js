const Contact = () => (
	<div className='container mx-auto p-6 '>
		<h1 className='text-center my-3 text-4xl font-bold text-gray-500'>
			Contact Us
		</h1>
		<form>
			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col'>
					<label htmlFor='first-name'>First name</label>
					<input
						type='text'
						id='first-name'
						name='first-name'
						className='form-input px-3 py-2 rounded-md !outline-none'
						required
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='last-name'>Last name</label>
					<input
						type='text'
						id='last-name'
						name='last-name'
						className='form-input px-3 py-2 rounded-md'
						required
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						className='form-input px-3 py-2 rounded-md'
						required
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='phone'>
						<div className='flex align-items'>
							Phone
							<span className='ml-auto opacity-75'>Optional</span>
						</div>
					</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						className='form-input px-3 py-2 rounded-md'
					/>
				</div>
				<div className='flex flex-col col-span-2'>
					<label htmlFor='subject'>Subject</label>
					<input
						type='text'
						id='subject'
						name='subject'
						className='form-input px-3 py-2 rounded-md'
						required
					/>
				</div>
				<div className='flex flex-col col-span-2'>
					<label htmlFor='subject'>
						<div className='flex align-items'>
							Message
							<span className='ml-auto opacity-75'>Max. 500 characters</span>
						</div>
					</label>
					<textarea
						maxLength='500'
						rows='4'
						type='text'
						id='subject'
						name='subject'
						className='form-input px-3 py-2 rounded-md'
						required
					/>
				</div>
			</div>
			<div className='flex justify-end py-4'>
				<button
					type='submit'
					className='bg-gray-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-gray-300 hover:bg-gray-500'
				>
					Submit
				</button>
			</div>
		</form>
	</div>
);

export default Contact;
