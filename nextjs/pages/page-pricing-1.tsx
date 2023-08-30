import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Pricing1(): JSX.Element {
    return (
        <>
            <Layout>
                <section className="section-box mt-70">
                    <div className="container mt-50">
                        <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
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
                        <div className="text-center mt-30 mb-100">
                            <Link href="/#"><a className="btn btn-black icon-arrow-right-white mb-20 mr-20">Start free trial</a></Link>
                            <Link href="/#"><a className="btn btn-default icon-arrow-right mb-20">View plans comparison</a></Link>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <h2 className="text-heading-1 color-gray-900 mb-30">Customer Lifecycle</h2>
                                <p className="text-body-excerpt color-gray-600">We understand that the relationship with our customers extends beyond a single transaction, which is why we focus on nurturing and supporting them throughout the entire customer lifecycle.</p>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><Image width={80} height={80} src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Moirai" /></div>
                                        <h4 className="text-heading-4">1. Acquisition</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our Acquisition plan focuses on introducing new customers to our fashion offerings.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><Image width={80} height={80} src="/assets/imgs/page/homepage2/icon-active.svg" alt="Moirai" /></div>
                                        <h4 className="text-heading-4">2. Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">With our Activation plan, unlock additional features and benefits to enhance your fashion journey.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><Image width={80} height={80} src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Moirai" /></div>
                                        <h4 className="text-heading-4">3. Retention</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our Retention plan rewards loyalty and ensures an ongoing delightful fashion experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bdrd-58 box-gray-100">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mt-30">
                                        Customers Feedback
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        What are our client talk about us?
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">
                                                So good experience
                                            </h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                &quot;The best purchase I&apos;ve made in recent years. I didn&apos;t think I could pull off that color so well!&quot;
                                            </p>
                                            <div className="box-img-user">
                                                <div className="img-user">
                                                    <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-1.png" alt="Moirai" />
                                                </div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">
                                                    Wade Warren
                                                </h4>
                                                <p className="text-body-text-md">
                                                    Student
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">
                                                Highly Recommend
                                            </h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                &quot;The price is a little higher than I expected, but the quality is god-tier. You get what you pay for at its finest.&quot;
                                            </p>
                                            <div className="box-img-user">
                                                <div className="img-user">
                                                    <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-2.png" alt="Moirai" />
                                                </div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">
                                                    Brooklyn Simmons
                                                </h4>
                                                <p className="text-body-text-md">
                                                    Designer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">
                                                Wonderful
                                            </h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                &quot;The service couldn&apos;t be better. I really couldn&apos;t have expected more. From item suggestions to final delivery.&quot;
                                            </p>
                                            <div className="box-img-user">
                                                <div className="img-user">
                                                    <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-3.png" alt="Moirai" />
                                                </div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">
                                                    John Wilson
                                                </h4>
                                                <p className="text-body-text-md">
                                                    Content Creator
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">
                                                I can&apos;t believe in
                                            </h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                &quot;The sense of style is elegant and classy. The way outfits are put together is fashionable and trendy.&quot;
                                            </p>
                                            <div className="box-img-user">
                                                <div className="img-user">
                                                    <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-4.png" alt="Moirai" />
                                                </div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">
                                                    Albert Flores
                                                </h4>
                                                <p className="text-body-text-md">
                                                    Software Engineer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h2 className="text-heading-1 color-gray-900">Frequently Asked Questions</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">We understand that you may have questions about various aspects of fashion, from shipping and returns to product care and sizing. To make your shopping experience as seamless as possible, we have categorized our frequently asked questions into different types.</p>
                                </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
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
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
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

export default Pricing1;