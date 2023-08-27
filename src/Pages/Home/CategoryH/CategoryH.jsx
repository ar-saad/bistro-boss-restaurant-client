import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./CategoryH.css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CategoryH = () => {
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            />
            <Swiper
                rewind={true}
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
                initialSlide={2}
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3
                        className="text-2xl 2xl:text-3xl uppercase text-center -mt-16 title-font text-white"
                        style={{ textShadow: "0.5px 1px 1px black" }}
                    >
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3
                        className="text-2xl 2xl:text-3xl uppercase text-center -mt-16 title-font text-white"
                        style={{ textShadow: "0.5px 1px 1px black" }}
                    >
                        Pizza
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3
                        className="text-2xl 2xl:text-3xl uppercase text-center -mt-16 title-font text-white"
                        style={{ textShadow: "0.5px 1px 1px black" }}
                    >
                        Soups
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3
                        className="text-2xl 2xl:text-3xl uppercase text-center -mt-16 title-font text-white"
                        style={{ textShadow: "0.5px 1px 1px black" }}
                    >
                        Desserts
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3
                        className="text-2xl 2xl:text-3xl uppercase text-center -mt-16 title-font text-white"
                        style={{ textShadow: "0.5px 1px 1px black" }}
                    >
                        Salads
                    </h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default CategoryH;
