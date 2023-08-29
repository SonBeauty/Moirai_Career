import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";

const ModalVideo:any = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Home(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index: number) => {
        setActiveIndex(index); // remove the curly braces
    };

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2">
                                        Unveiling the
                                        <br/>
                                        <span className="color-pink-primary">lastest fashion</span>
                                        <br/>
                                        trend in global

                                    </h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    The lastest trend is waiting for you
                                    </p>
                                    <div className="mt-40">
                                        <Link href="/page-service-1"><a className="btn btn-black icon-arrow-right-white">Get Start</a></Link>
                                        <Link href="/page-about-1"><a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Learn More</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="video-block shape-1">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a>
                                            <span className="text-heading-4">Watch intro video</span>

                                        </div>
                                        <div className="shape-2">
                                            <Image width={526} height={596} alt="Moirai" src="/assets/imgs/page/homepage1/banner-img.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/dg.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/givenchy.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/prada.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/ysl.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/versace.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/burberry.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-1 color-gray-900">
                                    NEW PRODUCT
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    We’re unique no matter how you put it.<br/>Feel trendy. Feel authentic.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center mt-90">
                            <ul className="nav" role="tablist">
                                <li onClick={() => handleOnClick(1)}>
                                    <Link href="/#tab-1">
                                        <a className={activeIndex === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>New product</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(2)}>
                                    <Link href="/#tab-2">
                                        <a className={activeIndex === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Special</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(3)}>
                                    <Link href="/#tab-3">
                                        <a className={activeIndex === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Women</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(4)}>
                                    <Link href="/#tab-4">
                                        <a className={activeIndex === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Men</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(5)}>
                                    <Link href="/#tab-5">
                                        <a className={activeIndex === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Kids</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(6)}>
                                    <Link href="/#tab-6">
                                        <a className={activeIndex === 6 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Accessories</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-2 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    New product
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                Embrace sustainable fashion with our new line of clothing made from ethically sourced organic cotton and recycled materials, ensuring both style and environmental consciousness go hand in hand.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a>
                                                <Image width={630} height={500} src="/assets/imgs/page/homepage1/img-product-1.png" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-1 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Design Studios That Everyone
                                                    Should Know
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><Image width={635} height={500} src="/assets/imgs/page/homepage1/img-1-2.jpg" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-3 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    We can blend colors multiple
                                                    ways
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><Image width={635} height={500} src="/assets/imgs/page/homepage1/img-1-3.jpg" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-4 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Choose The Best Plan That&apos;s For
                                                    You
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><Image width={635} height={500} src="/assets/imgs/page/homepage1/img-1-4.jpg" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Subscribe our newsletter to get
                                                    gift
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><Image width={635} height={500} src="/assets/imgs/page/homepage1/img-1-5.jpg" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 6 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-6 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Ready to get started? Create and
                                                    Account
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><Image width={635} height={500} src="/assets/imgs/page/homepage1/img-1-6.jpg" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">
                                    About Us
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                We facilitate the creation of strategy and design
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-company hover-up">
                                    <div className="card-about">
                                        <div className="h-full">
                                            <div className="grid-1-img">
                                                <Image width={80} height={80} src="/assets/imgs/page/homepage1/company.svg" alt="Moirai" />
                                            </div>
                                            <h3 className="text-heading-3 mt-20">
                                                About the Company
                                            </h3>
                                            <p className="text-body-excerpt mt-20">
                                                Our company is a leading fashion enterprise dedicated to providing exceptional clothing and accessories. We specialize in curating a wide range of stylish and timeless designs that cater to various styles and occasions.
                                            </p>
                                        </div>
                                        <div className="mt-30">
                                            <Link href="/page-about-2"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-history hover-up">
                                    <div className="card-about">
                                        <div className="h-full">
                                            <div className="grid-1-img">
                                                <Image width={80} height={80} src="/assets/imgs/page/homepage1/history.svg" alt="Moirai" />
                                            </div>
                                            <h3 className="text-heading-3 mt-20">
                                                History of Formation
                                            </h3>
                                            <p className="text-body-excerpt mt-20">
                                            Our company has a rich and inspiring history. It all started [insert specific information about the company&apos;s origin, such as the year and circumstances of establishment].
                                            </p>
                                        </div>
                                        <div className="mt-30">
                                            <Link href="/page-about-2"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="card-about">
                                        <div className="h-full">
                                            <div className="grid-1-img">
                                                <Image width={80} height={80} src="/assets/imgs/page/homepage1/social.svg" alt="Moirai" />
                                            </div>
                                            <h3 className="text-heading-3 mt-20">
                                                Company Mission
                                            </h3>
                                            <p className="text-body-excerpt mt-20">
                                                At our company, our mission is to empower individuals to express their unique personalities through fashion. We believe that clothing goes beyond mere functionality—it is a powerful form of self-expression.
                                            </p>
                                        </div>
                                        <div className="mt-30">
                                            <Link href="/page-about-2"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <Image width={618} height={716} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-product-2.png" alt="Moirai" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1">Fashion as unique as you are.</span>
                                <h3 className="text-heading-1 text-center mt-30">
                                    Best Seller
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                Welcome to our Best Sellers collection, where you can 
                                discover our most sought-after fashion pieces that are loved 
                                by our customers.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Stay on-trend
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Explore our Best Sellers collection for the latest fashion trends that are making waves in the industry.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Customer Favorites
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Discover our most-loved fashion pieces, as recommended by our valued customers.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Uncompromising Quality
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Shop from our Best Sellers collection, where fashion meets exceptional craftsmanship and high-quality materials.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Versatile Style
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Find versatile fashion pieces that effortlessly elevate your wardrobe for any occasion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                        What makes us outstanding
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                    At our clothing shop, we strive to stand out from the crowd by offering a unique and exceptional shopping experience. Here are a few factors that set us apart.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <OfferSlider/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">
                                    Customers Feedback
                                </h3>
                                <p className="text-body-lead-large color-gray-600">
                                    What are our client talk about us?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">
                                    From Our blog and Event fanpage
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot mb-2">Lastest trend</span>
                                    <Link href="/blog-single"><a className="text-heading-5">Unveiling the Latest Fashion Trends: Elevate Your Style Game</a></Link>
                                    <div className="grid-4-img mt-2">
                                        <Link href="/blog-single">
                                            <a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-1.png" alt="Moirai" /></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot mb-2">How to Dress Nice & Look Stylisht</span>
                                    <Link href="/blog-single"><a className="text-heading-5">Mastering the Art of Looking Cool: Your Style Guide</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-4">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-2.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot mb-2">How to Dress Nice Every Day</span>
                                    <Link href="/blog-single"><a className="text-heading-5"> Dressing Nice Every Day: A Guide to Effortless Style</a></Link>
                                    <div className="grid-4-img mt-2">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-3.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box section-blue mt-100">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 text-center mb-10 text-shadow-25">
                            Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                        </h3>
                    </div>
                    <PriceTable2/>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7">
                                            <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                                Contact for selling overview
                                            </h4>
                                            <p className="text-body-text color-gray-500">
                                                By clicking the button, you are
                                                agreeing with our
                                            </p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1">
                                                <Image width={255} height={193} src="/assets/imgs/template/chart.png" alt="Moirai" />
                                            </div>
                                            <div className="img-responsive img-newsletter">
                                                <Image width={332} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Moirai" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo
                    channel="youtube"
                    youtube={{
                        autoplay: 1,
                        mute: 1
                    }}
                    isOpen={isOpen}
                    videoId="A450hyqGkmk"
                    onClose={() => setOpen(false)}
                />
            </Layout>
        </>
    )
}

export default Home;