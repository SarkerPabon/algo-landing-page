import CountUp from "react-countup";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaDollarSign, FaTools } from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";

const Summary = () => {
	return (
		<>
			<div className='mt-5 py-10 '>
				<div className='grid grid-cols-1 md:grid-cols-3  gap-10  container mx-auto shadow-xl'>
					<div className='card-body flex flex-col pb-10 shadow-2xl md:shadow-none'>
						<h2 className='card-title text-3xl font-bold text-center'>
							<FaDollarSign className='inline' />
							Revenue
						</h2>
						<VisibilitySensor>
							{({ isVisible }) => (
								<div
									className='flex justify-center items-center text-3xl'
									style={{ height: 50 }}
								>
									{isVisible ? (
										<CountUp
											start={1}
											duration={5}
											suffix=' lacs'
											end={330000}
										/>
									) : null}
								</div>
							)}
						</VisibilitySensor>
					</div>
					<div className='card-body flex flex-col pb-10 shadow-2xl md:shadow-none'>
						<h2 className='card-title text-3xl font-bold text-center'>
							<FaTools className='inline' />
							Tools
						</h2>
						<VisibilitySensor>
							{({ isVisible }) => (
								<div
									className='flex justify-center items-center text-3xl'
									style={{ height: 50 }}
								>
									{isVisible ? (
										<CountUp start={1} duration={5} suffix=' +' end={1500} />
									) : null}
								</div>
							)}
						</VisibilitySensor>
					</div>
					<div className='card-body flex flex-col pb-10 shadow-2xl md:shadow-none'>
						<h2 className='card-title text-3xl font-bold text-center'>
							<BsFillPersonCheckFill className='inline' />
							Customers
						</h2>
						<VisibilitySensor>
							{({ isVisible }) => (
								<div
									className='flex justify-center items-center text-3xl'
									style={{ height: 50 }}
								>
									{isVisible ? (
										<CountUp
											start={1}
											duration={5}
											suffix=' customers'
											end={20000}
										/>
									) : null}
								</div>
							)}
						</VisibilitySensor>
					</div>
				</div>
			</div>
		</>
	);
};

export default Summary;
