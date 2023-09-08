import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import Layout from "../components/layout/Layout";

const ModalVideo: any = dynamic(import("react-modal-video"), {
    ssr: false,
});

function CareerDetails() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="text-heading-2 color-gray-900 mb-20">Customer Service Representative <br />Full Time</h1>
                                    <div className="breadcrumbs">
                                        <ul className="text-body-text">
                                            <li>
                                                <Link href="/#"><a className="color-gray-900">Home</a></Link>
                                            </li>
                                            <li><span className="color-gray-500">Jobs details</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50 mb-50">
                    <div className="container">
                        <div className="content-detail">
                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <h2 className="text-heading-4">Job Summary</h2>
                                    <p className="text-body-text">We are seeking a dedicated and friendly Customer Service Representative to join our team. As a Customer Service Representative, you will be the primary point of contact for our customers, providing exceptional service and resolving their inquiries or concerns. Your goal will be to ensure customer satisfaction and build positive relationships with our clientele.</p>
                                    <p />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10 container-video">
                                    <div className="box-image mt-30 mb-30">
                                        <a className="popup-youtube btn-play-video btn-play-detail" onClick={() => setOpen(true)}></a>
                                        <Image width={765} height={484} className="img-responsive bdrd-16" src="/assets/imgs/page/career/img_1.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <h2 className="text-heading-4">Responsibilities</h2>
                                    <ul>
                                        <li>Act as the main point of contact for customers, handling incoming inquiries, complaints, and requests in a professional and timely manner</li>
                                        <li>Provide excellent customer service by addressing customer needs and resolving issues effectively</li>
                                        <li>Maintain a thorough understanding of our products, services, and company policies to provide accurate information to customers</li>
                                        <li>Process customer orders, returns, and exchanges, ensuring accuracy and efficiency.</li>
                                        <li>Collaborate with other teams, such as sales and logistics, to resolve customer-related issues and ensure a seamless customer experience</li>
                                        <li>Identify and escalate complex or unresolved customer issues to the appropriate department for further assistance</li>
                                        <li>Document and maintain customer interactions and transactions in the company's CRM system</li>
                                        <li>Continuously strive to enhance customer satisfaction by proactively identifying areas for improvement and suggesting solutions</li>
                                        <li>Stay up-to-date with industry trends and customer service best practices to provide the highest level of service</li>
                                    </ul>
                                    <p />
                                    <h2 className="text-heading-4">Requirements</h2>
                                    <ul>
                                        <li>High school diploma or equivalent; bachelor's degree is a plus.</li>
                                        <li>Excellent communication skills, both verbal and written, with the ability to effectively communicate with customers and team members</li>
                                        <li>Strong problem-solving skills and the ability to think quickly on your feet</li>
                                        <li>Ability to remain calm and professional in high-pressure situations</li>
                                        <li>Proficiency in using customer service software, CRM systems, and Microsoft Office Suite</li>
                                        <li>Strong organizational and multitasking abilities</li>
                                        <li>Availability to work flexible schedules, including weekends and holidays, if required</li>
                                        <li>A customer-focused mindset with a genuine desire to assist and satisfy customers</li>
                                    </ul>
                                    <p />
                                    <p> Note: This is a general job description and can be customized to fit the specific requirements and needs of your organization.</p>
                                    <div className="border-bottom mt-50 mb-50" />
                                    <div className="media-block">
                                        <Link href="/page-signup"><a className="btn btn-green-900 color-white text-heading-6 icon-arrow-right-white mr-20" >Apply Now</a></Link>
                                        <Link href="/page-contact"><a className="btn btn-default icon-arrow-right">Contact Us</a></Link>
                                        <div className="float-start float-lg-end mt-30">
                                            <Link href="/#"><a className="btn btn-media mr-10"><Image width={18} height={18} src="/assets/imgs/template/icons/facebook-share.svg" alt="Agon" /> Share</a></Link>
                                            <Link href="/#"><a className="btn btn-media mr-10"><Image width={18} height={18} src="/assets/imgs/template/icons/twitter-share.svg" alt="Agon" /> Tweet</a></Link>
                                            <Link href="/#"><a className="btn btn-media"><Image width={18} height={18} src="/assets/imgs/template/icons/pinterest-share.svg" alt="Agon" /> Pin</a></Link>
                                        </div>
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
                                <div className="box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a className="a-detail">Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send-blue" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><Image width={255} height={193} src="/assets/imgs/template/chart.png" alt="Agon" /></div>
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

export default CareerDetails;