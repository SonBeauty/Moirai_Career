import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import Layout from "../components/layout/Layout";

const ModalVideo: any = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Career(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center"><span className="tag-1 bg-blue-200 text-blue-700">Success Together</span>
                                <h1 className="text-display-2 color-gray-900 mt-30">Working with us,<br className="d-lg-block d-none" />the awesome team</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">Our commitment lies in seeking out exceptional individuals to join<br className="d-lg-block d-none" />our team. We set high standards, and you exhibit the readiness to <br className="d-lg-block d-none" />embrace the challenge. </div>
                                <div className="mt-50">
                                    <Link href="/page-about-3"><a className="btn btn-black icon-arrow-right-white mb-15 mr-20">Join our team</a></Link>
                                    <Link href="/page-faqs-1"><a className="btn btn-default icon-arrow-right color-gray-900 btn-mb mb-15">Learn more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <Image width={1076} height={520} className="img-responsive bdrd-16" src="/assets/imgs/page/career/img.png" alt="Agon" />
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">Join a Workplace That<br className="d-lg-block d-none" />Gives You More</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Unlock your potential with abundant learning opportunities, flexible <br /> work hours, and comprehensive benefits that prioritize the well-<br /> being and satisfaction of our valued employees.</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 hover-up">
                                    <div className="grid-1-img"><Image width={80} height={80} src="/assets/imgs/page/homepage1/icon_book.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Learning opportunities</h3>
                                    <p className="text-body-excerpt mt-20">Fuel your growth with diverse programs, workshops, and mentorship to reach new career heights.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 hover-up">
                                    <div className="grid-1-img"><Image width={80} height={80} src="/assets/imgs/page/homepage1/icons-clock.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Flexible Work Hours</h3>
                                    <p className="text-body-excerpt mt-20">Achieve work-life balance through our adaptable schedules, accommodating personal commitments for optimal effectiveness.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 hover-up">
                                    <div className="grid-1-img"><Image width={80} height={80} src="/assets/imgs/page/homepage1/icons-health.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Comprehensive Benefits</h3>
                                    <p className="text-body-excerpt mt-20">Prioritize your well-being with an all-encompassing package, including medical insurance, wellness programs, retirement plans, and employee assistance, ensuring your health, happiness, and satisfaction.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Choose the category<br className="d-lg-block d-none" />where you expert</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or corporate<br className="d-lg-block d-none" />clients order a publication to publish news.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-sale.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Sales Associate</h4>
                                        <h4 className="text-heading-4 text-transparent">Specialist</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Delivers exceptional customer service, driving sales and ensuring a positive shopping experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-staff.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Alteration Clothing Staff</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Skilled in clothing alterations, providing tailored solutions for the perfect fit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-ecommerce.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">E-commerce Specialist</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Manages online operations and marketing to enhance the digital shopping experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-buyer.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Fashion Buyer</h4>
                                        <h4 className="text-heading-4 text-transparent">Fashion Buyer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Sources and selects products to curate an appealing product assortment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-marketing.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Marketing Manager</h4>
                                        <h4 className="text-heading-4 text-transparent">Marketing Manager</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Implements strategic marketing plans to increase brand visibility and engagement.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-customer.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Customer Service Representative</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Provides excellent support and resolves customer inquiries for a positive experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 bg-orange-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30"><span className="tag-1 bg-6">Employee feedbacks</span>
                                <h3 className="text-heading-1 mt-30">Why Our Team Is One Of The Best!</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Experience excellence at our workplace, where collaboration, innovation, and personal growth flourish. Our inclusive culture, supportive team, and competitive benefits make it one of the best. Discover a fulfilling and exceptional environment for professional success.</p>
                                <div className="mt-40">
                                    <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right text-body-text">Learn More</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;The dynamic and collaborative environment at Moirai Fashion makes each day enjoyable. The team spirit and support among colleagues create a positive atmosphere for interacting with customers and showcasing our stylish collections. &quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/person-1.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">John Cooper</h4>
                                                <p className="text-body-text-md">Sales Associate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;At Moirai Fashion, the customer-centric and empowering environment values exceptional service. The supportive atmosphere and focus on professional growth make it a rewarding place to work. &quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/person-2.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Olivia Parker</h4>
                                                <p className="text-body-text-md">Customer Service Staff</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;Moirai Fashion's marketing department provides a vibrant and dynamic environment. Open communication, growth opportunities, and a recognition of contributions foster creativity and make it a place where ideas thrive.&quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/person-3.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Ethan Reynolds</h4>
                                                <p className="text-body-text-md">Marketing Staff</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">&quot;I'm proud to be part of Moirai Fashion's innovative and fast-paced e-commerce team. The autonomy to implement creative ideas and strategies, along with a collaborative and passionate atmosphere, make it an exciting workplace. &quot;</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/person-4.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Sophia Mitchell</h4>
                                                <p className="text-body-text-md">E-commerce Staff</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-2"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot">LATEST TREND</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Unveiling the Latest Trends</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot">HOW TO DRESS NICE & LOOK STYLISH</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Mastering the Art of Looking Cool</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot">HOW TO DRESS NICE EVERY DAY</span>
                                    <Link href="/blog-single"><a className="text-heading-4"> Dressing Nice Every Day</a></Link>
                                    <p className="text-heading-4 text-transparent">the</p>
                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
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
                                <div className="bg-[#faede3] box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Contact for selling overview</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send-blue" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><Image width={255} height={193} src="/assets/imgs/template/chart.png" alt="Agon" /></div>
                                            <div className="img-responsive img-newsletter"><Image width={322} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Agon" /></div>
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

export default Career;