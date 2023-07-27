import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import PriceTable3 from "../components/elements/PriceTable3";
import Layout from "../components/layout/Layout";

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Index4(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-4 bg-gray-1000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2 color-white">Unveiling <br/>The Latest <br/>Fashion Trends!</h1>
                                    <p className="text-body-lead-large color-white mt-30 pr-40">The latest trend is waiting for you</p>
                                    <div className="mt-40">
                                        <Link href="/page-about-1"><a className="btn btn-orange icon-arrow-right text-heading-6">Get Started
                                        </a></Link>
                                        <Link href="/page-contact"><a className="btn btn-link color-white text-heading-6 btn-link-inter">Learn More
                                        </a></Link>
                                    </div>
                                    <div className="mt-60">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">5000+</h3>
                                                <p className="text-body-normal color-gray-300">Happy Customers</p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">200+</h3>
                                                <p className="text-body-normal color-gray-300">Quality Products</p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">100%</h3>
                                                <p className="text-body-normal color-gray-300">Customers Satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <a className="popup-youtube btn-play-video-4" onClick={() => setOpen(true)}></a>
                                        <div className="img-responsive shape-2">
                                            <Image width={526} height={584} alt="Agon" src="/assets/imgs/page/homepage4/banner.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <h2 className="text-heading-2 font-3-5xl line-height-58 color-gray-900 mb-30">
                                    <span className="text-heading-1 font-4xl">What</span>
                                    <br/>
                                    Makes Us
                                    <br/>
                                    Outstanding
                                </h2>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><Image width={80} height={80} src="/assets/imgs/page/homepage4/icon-quality.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">Unparalleled Quality</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><Image width={80} height={80} src="/assets/imgs/page/homepage4/icon-trendsetting.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">Trendsetting Style</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our team of experienced fashion experts keeps a pulse on the latest trends and emerging styles.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><Image width={80} height={80} src="/assets/imgs/page/homepage4/icon-community.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">Community Engagement</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We actively engage with our community through various initiatives.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-90">
                        <div className="row relative">
                            <div className="col-lg-9 col-sm-12 block-img-we-do">
                                <div className="inner-image"><Image width={948} height={655} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage4/img.png" alt="Agon" /></div>
                            </div>
                            <div className="col-lg-5 col-sm-12 block-content-we-do shape-2">
                                <p className="color-gray-900 font-2xl text-uppercase"><span className="text-w-600">New</span> collections</p>
                                <h3 className="text-heading-1 mt-30">Stay Warm <br/>And Stay Trendy</h3>
                                <div className="mt-40">
                                    <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Shop Now
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 mb-80 bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30">
                                <h3 className="text-heading-1 mt-30">Don&apos;t Take Our Word For It. See What Our Customers Say.</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.</p>
                                <div className="mt-40">
                                    <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Learn More
                                    </a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;The best purchase I&apos;ve made in recent years. I didn&apos;t think I could pull off that color so well!&quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-1.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                                                <p className="text-body-text-md">Student</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;The price is a little higher than I expected, but the quality is god-tier. You get what you pay for at its finest.&quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-2.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Brooklyn Simmons</h4>
                                                <p className="text-body-text-md">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;The service couldn&apos;t be better. I really couldn&apos;t have expected more. From item suggestions to final delivery.&quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-3.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">John Wilson</h4>
                                                <p className="text-body-text-md">Content Creator</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;The sense of style is elegant and classy. The way outfits are put together is fashionable and trendy.&quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-4.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Albert Flores</h4>
                                                <p className="text-body-text-md">Software Engineer</p>
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
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Leverage The Power Of AI<br className="d-lg-block d-none" />To Find Your Style</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Instead of the traditional manual process of deciding what to wear, 
                                    we leverage the power of AI to curate the perfect items for you. 
                                    Our AI system analyzes your inputted information and references to select the best-suited options that match your style!
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-lg-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-grey box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Traditional Items Picking</h4>
                                    <p className="text-body-text-md color-gray-600">Select what you believe suits you best through manual choice.</p>
                                    <div className="box-image-inner bg-color-1"><Image width={498} height={389} src="/assets/imgs/page/homepage4/temp-1.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-2 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Curating Items by AI</h4>
                                    <p className="text-body-text-md color-gray-600">Using AI to push beyond your imagination, curate items what you won't think you can pull off.</p>
                                    <div className="box-image-inner bg-color-2"><Image width={498} height={389} src="/assets/imgs/page/homepage4/temp-2.png" alt="Agon" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container mt-50">
                        <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
                    </div>
                    <PriceTable3/>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More
                                </a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">dressing tips</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Dressing Nice: A Guide to Effortless Style
                                    </a></Link>

                                    <div className="grid-4-img mt-2 color-bg-15">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">Casual</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900"> Dressing Nice Every Day: A Guide to Effortless Style
                                    </a></Link>

                                    <div className="grid-4-img mt-2 color-bg-2">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">hot trends</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Unleashing Your Style: A Journey into the World of Fashion
                                    </a></Link>

                                    <div className="grid-4-img mt-2 color-bg-15">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-gray-1000 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-white text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10 color-white">Contact For Selling Overview</h4>
                                            <p className="text-body-text color-white">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a className="color-white">Term &amp; Conditions
                                            </a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter your mail .." /><button className="btn btn-send-pink" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><Image width={255} height={193} src="/assets/imgs/template/chart-3.png" alt="Agon" /></div>
                                            <div className="img-responsive img-newsletter"><Image width={332} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Agon" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="A450hyqGkmk"
                    onClose={() => setOpen(false)}
                />
            </Layout>
        </>
    )
}

export default Index4;

