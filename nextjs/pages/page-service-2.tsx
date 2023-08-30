import Image from "next/image";
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import WeDoSlider from "../components/slider/WeDo";
import Accordion3 from "../components/elements/Accordion3";

function Service2(): JSX.Element {
    return (
        <>
            <Layout>
                <section className="section-box fit">
                    <div className="bg-services-2">
                        <div className="bg-services"/>
                    </div>
                    <div className="banner-hero bg-service-2">
                        <div className="container">
                            <div className="row relative">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2">Perfect Fit <br className="d-lg-block d-none" /><span className="color-pink-primary">Tailoring Services</span></h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Customize Your Wardrobe with Flawless Fit and Style.<br className="d-lg-block d-none" /> Say goodbye to ill-fitting clothes and hello to a<br className="d-lg-block d-none" /> wardrobe that fits you perfectly. </p>
                                </div>
                                <div className="col-lg-12 d-none d-lg-block banner-group-imgs">
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-8">
                                            <div className="banner-imgs">
                                                <div className="block-1 banner-block-1"><Image width={150} height={156} src="/assets/imgs/page/services/2/card.png" alt="Moirai" /></div>
                                                <div className="block-2 banner-block-2"><Image width={126} height={126} src="/assets/imgs/page/services/2/bg-dot.svg" alt="Moirai" /></div>
                                                <div className="block-3 banner-block-3"><Image width={216} height={110} src="/assets/imgs/page/services/2/chart-card.png" alt="Moirai" /></div>
                                                <div className="banner-main-img"><Image width={850} height={405} src="/assets/imgs/page/services/2/banner.png" alt="Moirai" /></div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-90">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-12">
                            <h2 className="text-heading-1 color-gray-900">Multiple Clothing Repair Options<br className="d-lg-block d-none" /> To Suit Your Needs</h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                        <div className="row mt-90 pb-60 border-bottom">
                            <div className="col-lg-3 col-sm-6 col-12 mb-20">
                                <div className="service-box pt-20 pl-20 pr-20 pb-20 bg-9">
                                    <h4 className="text-heading-4 color-gray-900 mb-15 text-center">Hemming Trousers</h4>
                                    <p className="text-body-text-md fw-bold color-gray-600 text-center">Make your perfect trousers, dress, or skirt the ideal length with our hemming service.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12 mb-20">
                                <div className="service-box pt-20 pl-20 pr-20 pb-20 bg-11">
                                    <h4 className="text-heading-4 color-gray-900 mb-15 text-center">Replacing Buttons</h4>
                                    <p className="text-body-text-md fw-bold color-gray-600 text-center">Refresh and rejuvenate your clothing with our button replacement service.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12 mb-20">
                                <div className="service-box pt-20 pl-20 pr-20 pb-20 bg-9">
                                    <h4 className="text-heading-4 color-gray-900 mb-15 text-center">Replacing Zipper</h4>
                                    <p className="text-body-text-md fw-bold color-gray-600 text-center">Enhance the longevity of your clothing with precision zipper replacement service.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12 mb-20">
                                <div className="service-box pt-20 pl-20 pr-20 pb-20 bg-11">
                                    <h4 className="text-heading-4 color-gray-900 mb-15 text-center">Waist cinching</h4>
                                    <p className="text-body-text-md fw-bold color-gray-600 text-center">Transform your clothing with our waist cinching service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Precision Fixes:<br className="d-lg-block d-none" />Quality Commitment for Your Clothes</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Precision fixes for your clothes with quality craftsmanship. <br className="d-lg-block d-none" />Our skilled tailors ensure impeccable results using premium materials and techniques.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-100">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-5 col-sm-12">
                                <div className="bg-9 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Precise Alterations</h4>
                                    <p className="text-body-text-md color-gray-600">Our skilled tailors provide meticulous alterations, ensuring every adjustment is crafted with precision.</p>
                                    <div className="box-image-inner d-inline-flex bg-color-1"><Image width={369} height={362} src="/assets/imgs/page/services/2/product-1.png" alt="Moirai" /></div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <div className="bg-11 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Quality Materials & Techniques</h4>
                                    <p className="text-body-text-md color-gray-600">We use premium materials and proven techniques for fixing clothes, ensuring durability and impeccable results.</p>
                                    <div className="box-image-inner d-inline-flex bg-color-1"><Image width={369} height={362} src="/assets/imgs/page/services/2/product-2.png" alt="Moirai" /></div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-90">
                    <div className="container mt-120">
                        <div className="bg-we-do bdrd-58 pattern-white none-pattern pl-95 pr-95 pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">What We Do</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Experience the joy of a flawless fit and unmatched style with our Perfect Fit Tailoring Services.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <WeDoSlider />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-140 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-40">
                                <h3 className="text-heading-1">Frequently asked questions</h3>
                                <p className="text-body-text color-gray-600 mt-30">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                <div className="mt-60">
                                    <Link href="/page-contact"><a className="btn btn-black icon-arrow-right-white">Contact Us</a></Link>
                                    <Link href="/page-about-1"><a className="btn btn-link text-heading-6">Support Center</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                            <Accordion3 />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-8 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Contact for selling overview</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><Image width={255} height={193} src="/assets/imgs/template/chart.png" alt="Moirai" /></div>
                                            <div className="img-responsive img-newsletter"><Image width={332} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Moirai" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Service2;