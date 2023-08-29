import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import Accordion3 from "../components/elements/Accordion3";

function Faq1(): JSX.Element {
    return (
        <>
            <Layout headerStyle={"header-style-5"}>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-faqs-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="text-display-3 color-white mb-30">Frequently Asked Questions</h1>
                                        <div className="form-round">
                                            <form className="form-inline" action="#"><input className="form-control input-round"  placeholder="Ark a questions..." /><a className="btn btn-round-icon" type="submit"  /></form>
                                        </div>
                                        <p className="text-body-lead color-white mt-40">We are collect your searching keywords to improve our services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900">Type of FAQ</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">We understand that you may have questions about various aspects of fashion, from shipping and returns to product care and sizing. To make your shopping experience as seamless as possible, we have categorized our frequently asked questions into different types.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-20">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-6-img"><Image width={50} height={50} src="/assets/imgs/page/faqs/1/icon-delivery.svg" alt="Moirai" /></div>
                                        <h3 className="text-heading-5 mt-20">Shipping and Delivery</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Learn about our shipping policies, estimated delivery times, and tracking your order.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-20">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-6-img"><Image width={50} height={50} src="/assets/imgs/page/faqs/1/icon-exchanges.svg" alt="Moirai" /></div>
                                        <h3 className="text-heading-5 mt-20">Returns and Exchanges</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Find information on our return policy, procedures for exchanging items, and refund processing.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-20">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><Image width={50} height={50} src="/assets/imgs/page/faqs/1/icon-size.svg" alt="Moirai" /></div>
                                        <h3 className="text-heading-5 mt-20">Sizing and Fit</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Discover how to choose the right size for your garments, including measurements and size charts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box pt-140 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mb-40">
                                    <h3 className="text-heading-1">Frequently Asked Question</h3>
                                    <div className="row">
                                        <div className="col-lg-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Shipping</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Find answers to common questions about our fashion products.</p>
                                        </div>
                                        <div className="col-lg-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Product & Payment</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Explore FAQs related to purchasing and payment processes.</p>
                                        </div>
                                    </div>
                                    <div className="mt-60">
                                        <Link href="/page-contact"><a className="btn btn-black icon-arrow-right-white">Contact Us</a></Link>

                                        <Link href="/page-login"><a className="btn btn-link text-heading-6">Support Center</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                   <Accordion3/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container mt-50">
                            <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan<br className="d-lg-block d-none" />That&apos;s For You</h3>
                        </div>
                        <div className="container mt-20">
                            <div className="text-center block-bill-2 mt-10"><span className="text-lg text-billed">Billed Monthly</span><label className="switch ml-20 mr-20"><input id="cb_billed_type" type="checkbox" name="billed_type" /><span className="slider round" /></label><span className="text-lg text-billed">Bill Annually</span></div>
                            <div className="block-pricing block-pricing-2 mt-70">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                <div className="box-pricing-item hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$35</span><span className="text-heading-3 for-year">$420</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Standard</h4>
                                                        <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom designs &amp; features</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                                <div className="box-pricing-item active hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$89</span><span className="text-heading-3 for-year">$1068</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Essentials</h4>
                                                        <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                                <div className="box-pricing-item hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$125</span><span className="text-heading-3 for-year">$1500</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Premium</h4>
                                                        <p className="text-body-small color-gray-400">Avvanced features for pros who need more customization.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates</li>
                                                        <li>Custom designs &amp; features</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                                <div className="box-pricing-item hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$199</span><span className="text-heading-3 for-year">$2388</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Unlimited</h4>
                                                        <p className="text-body-small color-gray-400">Avvanced features for pros who need more customization.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates &amp; Support</li>
                                                        <li>Custom designs &amp; features</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-100">
                        <div className="container text-center">
                            <h3 className="text-heading-1 mb-10">Customers Feedback</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">What are customers talk about us?</p>
                        </div>
                        <div className="container mt-70">
                            <TestimonialSlider />
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Faq1;