import Image from 'next/image';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

SwiperCore.use([Autoplay, Navigation]);

const TestimonialSlider: React.FC = () => {
    const data = [
        {
            avatar: "1.png",
            name: "Taylor",
            job: "Designer",
            quote: "Wow, those jeans look amazing on you! The fit is perfect and they really accentuate your figure.",
            bg: "bd-bg-4"
        },
        {
            avatar: "2.png",
            name: "Maddies",
            job: "Cheft",
            quote: "I love the color of that shirt on you. It brings out your eyes and complements your skin tone beautifully.",
            bg: "bd-bg-6"
        },
        {
            avatar: "3.png",
            name: "Adele",
            job: "Stylist",
            quote: "You have a great sense of style. The way you've put together that outfit is so fashionable and trendy.",
            bg: "bd-bg-10"
        },
        {
            avatar: "4.png",
            name: "An",
            job: "PR Specialist",
            quote: "You always have such impeccable taste in clothes. I'm constantly impressed by how effortlessly stylish you look.",
            bg: "bd-bg-9"
        }
    ];
    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-4",
                            nextEl: ".swiper-button-next-4"
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide active">
                                    <div className={`card-grid-style-3 hover-up ${item.bg}`}>
                                        <div className="grid-3-img">
                                            <Image width={55} height={55} src={`/assets/imgs/page/homepage1/user-img-${item.avatar}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-6 mb-5 mt-20">{item.name}</h3>
                                        <span className="text-body-small d-block">{item.job}</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">{item.quote}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-4" />
                <div className="swiper-button-prev swiper-button-prev-4" />
            </div>
        </>
    );
};

export default TestimonialSlider;

