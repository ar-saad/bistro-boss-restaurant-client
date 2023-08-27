import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
// React Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
// React Rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// font awesome
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setUserReviews(data));
    }, []);

    return (
        <section className="mt-20 mb-10">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"Testimonials"}
            />
            <Swiper rewind={true} navigation={true} modules={[Navigation]}>
                {userReviews.map((review) => (
                    <SwiperSlide key={review._id} className="px-16">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="my-8">
                            <FaQuoteLeft className="text-[65px] 2xl:text-[100px] scale-x-110 text-black" />
                        </p>
                        <p className="text-[#444444] text-sm 2xl:text-xl">
                            {review.details}
                        </p>
                        <h3 className="text-[#CD9003] font-medium uppercase text-2xl 2xl:text-3xl my-2 pb-10">
                            {review.name}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
