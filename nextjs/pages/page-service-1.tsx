import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import PriceTable4 from "../components/elements/PriceTable4";

function Service1(): JSX.Element {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 box-banner-left">
                                    <h1 className="text-display-3 mt-30">Perfect Fit<br className="d-lg-block d-none" /> Tailoring Services</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40 fs-5">Customize Your Wardrobe with Flawless Fit and Style.<br className="d-lg-block d-none" />Say goodbye to ill-fitting clothes and hello to a wardrobe that<br className="d-lg-block d-none" /> fits you perfectly.</p>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="item-icon none-bd"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/services/1/icon-scissors.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3">+<span className="count">13</span>k</span></h4>
                                                    <p className="text-body-text color-gray-500">Products Fixed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="list-icons">
                                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/services/1/icon-heart.svg" alt="Agon" /></span>
                                                        <h4 className="text-heading-4"><span className="text-heading-3">+<span className="count">12</span>k</span></h4>
                                                        <p className="text-body-text color-gray-500">Customers Satisfaction</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block">
                                    <div className="banner-imgs relative h-full">
                                        <div className="block-services-1"><Image width={850} height={515} src="/assets/imgs/page/services/1/banner.png" alt="Agon" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <div className="text-start mb-25"><span className="tag-1 bg-9 text-primary">What We Do</span></div>
                                <h2 className="text-heading-2 color-gray-900 mb-50">Tailored Perfection,<br className="d-lg-block d-none" />Just For You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={52} height={52} src="/assets/imgs/page/services/1/icon-checking.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Inspection and Evaluation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our expert team conducts a thorough inspection to assess the garments requiring alteration. We identify specific adjustments needed for the desired fit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={52} height={52} src="/assets/imgs/page/services/1/icon-comfirm.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Size Confirmation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Upon receiving customer-provided size information, we verify the measurements and cross-reference them with garment specifications for accurate alterations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={52} height={52} src="/assets/imgs/page/services/1/icon-sewing.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Alteration and Tailoring</h4>
                                        <p className="text-body-text color-gray-500 mt-15">Our experienced tailors meticulously adjust the garments, including hemming, seam adjustments, and more, ensuring a perfect fit based on customer requirements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={52} height={52} src="/assets/imgs/page/services/1/icon-check-all.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Quality Assurance</h4>
                                        <p className="text-body-text color-gray-500 mt-15">After alterations, our quality assurance team rigorously inspects each garment, checking fit, stitching, and craftsmanship to ensure high standards and customer satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={52} height={52} src="/assets/imgs/page/services/1/icon-iron.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Final Touches and Pressing</h4>
                                        <p className="text-body-text color-gray-500 mt-15">Before delivery, we add final touches, such as pressing or steaming, to ensure impeccable appearance, eliminating wrinkles and presenting garments in their best condition.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><Image width={52} height={52} src="/assets/imgs/page/services/1/icon-delivery.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Packaging and Delivery</h4>
                                        <p className="text-body-text color-gray-500 mt-15">After completing alterations and final touches, we securely package the garments for transit. Prompt delivery to the customer's specified address ensures a seamless experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mb-30"><span className="tag-1 bg-9 text-primary">Built Exclusively For You</span>
                                <h3 className="text-heading-1 mt-30">Precision Fixes: <br className="d-lg-block d-none" />Quality Commitment for Your Clothes</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Precision fixes for your clothes with quality craftsmanship. Our skilled tailors ensure impeccable results using premium materials and techniques. Affordable pricing and dedicated customer care. Discover the difference today!</p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-blue">Precise Alterations</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Our skilled tailors provide meticulous alterations, ensuring every adjustment is crafted with precision.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-blue">Quality Materials & Techniques</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We use premium materials and proven techniques for fixing clothes, ensuring durability and impeccable results.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-blue">Affordable Pricing</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We offer competitive pricing for our fixing services without compromising on quality.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-blue">Dedicated Customer Care</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We provide attentive customer care to address any post-repair inquiries or concerns, ensuring your satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <div className="inner-image block-image-main bdrd-16"><Image width={576} height={655} src="/assets/imgs/page/services/1/img-built-1.png" alt="Agon" />
                                    <div className="block-image-top bdrd-16 flex"><Image width={313} height={329} src="/assets/imgs/page/services/1/img-built-2.png" alt="Agon" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container mt-50">
                        <h3 className="text-heading-1 text-center mb-10">Multiple Clothing Repair Options To Suit Your Needs</h3>
                    </div>
                    <PriceTable4 />
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
                                            <Link href="/page-terms"><a className="text-primary">Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send-blue" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1">
                                                <Image width={255} height={193} src="/assets/imgs/template/chart-4.png" alt="Agon" />
                                            </div>
                                            <div className="img-responsive img-newsletter">
                                                <Image width={332} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Agon" />
                                            </div>
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

export default Service1;