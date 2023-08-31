import Layout from "../components/layout/Layout";
import Image from "next/image";

function Contact(): JSX.Element {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Contact Us</h1>
                            <p className="text-body-text color-gray-500">Have a question or need assistance? We&apos;re here to provide you with the support you need.</p>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">What can we support for you?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Feel free to ask about clothes</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Moirai</h4>
                                    <p className="text-body-text color-gray-600">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                                    <p className="text-body-text color-gray-600">(239) 555-0108</p>
                                    <p className="text-body-text color-gray-600">uixopen@gmail.com</p>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about your problem"  /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Welcome to our fashion hub located in the heart of Moirai. Situated in a vibrant and trendy neighborhood, our location serves as the physical embodiment of our brand&apos;s vision and values.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={80} height={80} src="/assets/imgs/page/contact/icon-home.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Ofice</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: uixopen@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={80} height={80} src="/assets/imgs/page/contact/icon-flower.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Studio</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: uixopen@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={80} height={80} src="/assets/imgs/page/contact/icon-ambulance.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Factory</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: uixopen@gmail.com</p>
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

export default Contact;