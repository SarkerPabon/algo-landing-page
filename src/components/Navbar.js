import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = (e) => {
		console.log(toggle);
		setToggle(!toggle);
	};

	return (
		<>
			{/* Navbar */}
			<nav className='relative container mx-auto p-6'>
				{/* Flex container */}
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<div className='pt-2'>
						<img src='img/logo.svg' alt='' />
					</div>
					{/* Menu Items */}
					<div className='hidden space-x-6 md:flex'>
						<Link to='#' className='hover:text-darkGrayishBlue'>
							Pricing
						</Link>
						<Link to='#' className='hover:text-darkGrayishBlue'>
							Product
						</Link>
						<Link to='#' className='hover:text-darkGrayishBlue'>
							About Us
						</Link>
						<Link to='#' className='hover:text-darkGrayishBlue'>
							Careers
						</Link>
						<Link to='#' className='hover:text-darkGrayishBlue'>
							Community
						</Link>
					</div>
					{/* Button */}
					<Link
						to='#'
						className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
					>
						Get Started
					</Link>

					{/*  Hamburger Icon */}
					<button
						onClick={handleClick}
						id='menu-btn'
						className={`block hamburger md:hidden focus:outline-none ${
							toggle ? " open" : null
						}`}
					>
						<span className='hamburger-top'></span>
						<span className='hamburger-middle'></span>
						<span className='hamburger-bottom'></span>
					</button>
				</div>

				{/* Mobile Menu */}
				<div className='md:hidden'>
					<div
						id='menu'
						className={`absolute flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md  ${
							toggle ? " flex" : " hidden"
						}`}
					>
						<Link to='#'>Pricing</Link>
						<Link to='#'>Product</Link>
						<Link to='#'>About Us</Link>
						<Link to='#'>Careers</Link>
						<Link to='#'>Community</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
