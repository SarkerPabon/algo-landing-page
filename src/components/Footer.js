import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-gray-800 py-5'>
			{/* Flex Container */}
			<div className='container flex flex-col justify-center md:justify-around px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
				{/* List Container */}
				<div className='flex justify-center   space-x-32'>
					<div className='flex flex-col space-y-3 text-white'>
						<Link
							to='https://www.facebook.com/sarkerpabon'
							className='link link-hover'
						>
							<div className='flex items-center'>
								<FaFacebook />
								<span className='ml-3'>Facebook</span>
							</div>
						</Link>
						<Link
							to='https://github.com/sarkerpabon'
							className='link link-hover'
						>
							<div className='flex items-center'>
								<FaGithub />
								<span className='ml-3'>Github</span>
							</div>
						</Link>
						<Link
							to='https://twitter.com/sarkerpabon'
							className='link link-hover'
						>
							<div className='flex items-center'>
								<FaTwitter />
								<span className='ml-3'>Twitter</span>
							</div>
						</Link>
					</div>
					<div className='flex flex-col space-y-3 text-white'>
						<Link to='#' className='hover:text-brightRed'>
							Careers
						</Link>
						<Link to='#' className='hover:text-brightRed'>
							Community
						</Link>
						<Link to='#' className='hover:text-brightRed'>
							Privacy Policy
						</Link>
					</div>
				</div>

				{/* Input Container  */}
				<div className='flex flex-col '>
					<form>
						<div className='flex space-x-3'>
							<input
								type='text'
								className='flex-1 px-4 rounded-full focus:outline-none'
								placeholder='Email Address'
							/>
							<button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
								Subcribe
							</button>
						</div>
					</form>
					<div className='self-center md:self-start  text-white md:block mt-5'>
						Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
