import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";

function Faq2(): JSX.Element {
    return (
        <>
            <Layout>
                <div>
                    <div className="section-box" />
                    <div className="banner-hero banner-breadcrums">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1 className="text-heading-4 color-gray-900 mb-20">Join the community with more than 12,368 topics already created</h1>
                                    <p className="text-body-text color-gray-400">Professional support team will solve your problem.</p>
                                </div>
                                <div className="col-lg-7">
                                    <div className="form-square">
                                        <form className="form-inline" action="#"><input className="form-control input-with-button"  placeholder="Your question..." /><button className="text-heading-6 btn btn-square-green faqs-find-btn" type="submit">Find now</button></form>
                                        <div className="block-tags">
                                            <Link href="/page-pricing-1"><a className="text-body-text color-gray-900">Pricing plan <span className="icon-close" /></a></Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section-box mt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center"> 
                                    <h2 className="text-heading-1 color-gray-900">Frequently Asked Questions</h2>
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
                    <div className="section-box mt-100" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <ul className="list-icons-2 row d-flex">
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">How do I determine my correct size?</h3>
                                        <p className="text-body-text color-gray-500">Please refer to our size guide, which provides detailed measurements and instructions on how to measure yourself accurately for the best fit.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">What if I receive a damaged or defective item?</h3>
                                        <p className="text-body-text color-gray-500">If you receive a damaged or defective item, please contact our customer support immediately. We will gladly assist you in resolving the issue by providing a replacement.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">What is your return policy?</h3>
                                        <p className="text-body-text color-gray-500">Yes, once your order is shipped, you will receive a confirmation email with a tracking number.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">Do you offer international shipping?</h3>
                                        <p className="text-body-text color-gray-500">Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on the destination.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">How long does shipping take?</h3>
                                        <p className="text-body-text color-gray-500">Shipping times may vary depending on your location and the shipping method chosen.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">Can I modify or cancel my order after it has been placed?</h3>
                                        <p className="text-body-text color-gray-500">We aim to process orders quickly. If you need to modify or cancel your order, please reach out to our customer support as soon as possible.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">Can I track my order?</h3>
                                        <p className="text-body-text color-gray-500">We accept major credit cards, including Visa, Mastercard, and American Express. Additionally, we offer payment options through popular digital wallets like Apple Pay and Google Pay for convenient and secure transactions.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">Are the colors of the products accurate in the photos?</h3>
                                        <p className="text-body-text color-gray-500">We strive to provide accurate representations of our products. However, please note that colors may appear slightly different due to variations in lighting, monitor settings, and individual perception.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">What payment methods do you accept?</h3>
                                        <p className="text-body-text color-gray-500">We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a full refund or exchange. Please ensure the item is unused and in its original packaging with all tags attached.</p>
                                    </li>
                                    <li className="col-lg-6 col-sm-6 col-12">
                                        <h3 className="text-heading-5 mb-10">How can I contact your customer support?</h3>
                                        <p className="text-body-text color-gray-500">We are here to assist you with any inquiries, concerns, or assistance you may need.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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

export default Faq2;