// Import Swiper React components
// Import Swiper styles
import { A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
	return (
		<div className='mb-4'>
			<Swiper
				modules={[Pagination, Autoplay, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				autoplay={true}
			>
				<SwiperSlide>
					{" "}
					<img
						src='https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2'
						className='w-full'
						alt=''
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src='https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB'
						className='w-full'
						alt=''
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src='https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6'
						className='w-full'
						alt=''
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src='https://api.lorem.space/image/car?w=800&h=200&hash=225E6693'
						className='w-full'
						alt=''
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
