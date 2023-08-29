import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import dynamic from "next/dynamic";
import Intro2 from "../components/slider/Intro2";

const ModalVideo:any = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Index6(): JSX.Element {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Layout>
                <div className="section-box">
                    <div className="banner-hero banner-homepage6 fit">
                        <div className="container">
                            <div className="row relative">
                                <div className="col-lg-7 mt-50 pb-400"><span className="tag-1 bg-green-900">Fashion as unique as you are</span>
                                    <h1 className="text-display-2 mt-20">Unveiling the latest fashion trend in global</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-30 pr-40">The latest trend is waiting for your</p>
                                    <div className="mt-40">
                                        <Link href="#"><a className="btn btn-black shape-square icon-arrow-right-white">Get Started</a></Link>
                                        <Link href="#"><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 absolute right-0 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"><Image width={141} height={57} src="/assets/imgs/page/homepage6/line-chart.svg" alt="Moirai" /></div>
                                        <div className="block-2 shape-3"><Image width={180} height={203} src="/assets/imgs/page/homepage6/card.png" alt="Moirai" /></div>
                                        <div className="img-banner img-responsive shape-2">
                                            <Image width={640} height={939} alt="Moirai" src="/assets/imgs/page/homepage6/banner.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-box box-slider-3 d-none d-lg-flex absolute bottom-0">
                            <div className="container">
                                <div className="block-slider-bottom-banner">
                                    <Intro2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">17</span>+</h3><span className="text-body-quote">Our Office</span>
                                        <p className="text-body-text">Step into our stylish office, where fashion meets creativity</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">12</span>k+</h3><span className="text-body-quote">Completed Cases</span>
                                        <p className="text-body-text">From runway to reality, our team has a proven track record</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">28</span>+</h3><span className="text-body-quote">Happy Clients</span>
                                        <p className="text-body-text">Satisfied smiles and glowing testimonials are the hallmark of our fashion services</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70">
                                        <h3 className="text-display-3"><span className="count">86</span></h3><span className="text-body-quote">Skilled People</span>
                                        <p className="text-body-text">Behind every successful fashion endeavor is a team of skilled professionals</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pdl-md">
                                <h3 className="text-heading-1">Subscribe our newsletter</h3>
                                <div className="mt-100 box-mw-610">
                                    <div className="form-newsletter-2">
                                        <form><input className="input-newsletter" value="" placeholder="Enter your email ..." /><button className="btn btn-newsletter icon-arrow-right-white" type="submit">Get A Quote</button></form>
                                    </div>
                                </div>
                                <div className="mt-40">
                                    <ul className="list-icon-3">
                                        <li className="text-body-text-md">Subscribe Newsletter</li>
                                        <li className="text-body-text-md">Get The Latest News</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-70">
                    <div className="container">
                        <div className="box-bg-bottom">
                            <div className="box-video-homepage6">
                                <div className="box-image mt-30 mb-30">
                                    <a className="popup-youtube btn-play-video btn-play-middle index-10" onClick={() => setOpen(true)}></a>
                                    <Image width={1126} height={543} className="img-responsive bdrd-16" src="/assets/imgs/page/homepage6/img.png" alt="image"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage6/icon-company.svg" alt="image"/></span>
                                            <h4 className="text-heading-5">1. About the Company</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Our company is a leading fashion enterprise dedicated to providing exceptional clothing and accessories.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage6/icon-history.svg" alt="image"/></span>
                                            <h4 className="text-heading-5">2. History of Information</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Our company has a rich and inspiring history. It all started insert specific information about the company&apos;s origin.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage6/icon-mission.svg" alt="image"/></span>
                                            <h4 className="text-heading-5">3. Company Mission</h4>
                                            <p className="text-body-text color-gray-600 mt-15">At our company, our mission is to empower individuals to express their unique personalities through fashion. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-sm-12 mb-30"><Image width={526} height={429} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage6/img-1.png" alt="Moirai" /></div>
                            <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900">For You</span>
                                <h3 className="text-heading-1 mt-20">Best Seller</h3>
                                <p className="text-body-lead-large color-gray-600 mt-80">Welcome to our Best Sellers collection, where you can discover our most sought-after fashion pieces that are loved by our customers.</p>
                                <div className="row mt-20">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Stay on-trend</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Customer Favorites</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Uncompromising Quality</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Versatile Style</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row">
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
                </div>
                <div className="section-box box-gray-100 mt-120 mb-20">
                    <div className="container">
                        <div className="contact icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">What can we support for you?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">fell free to ask about clothes</p>
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
                                            <div className="form-group"><input className="form-control" value="" placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value="" placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value="" placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value="" placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about yourself"></textarea></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="#"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">Lastest trend</span>
                                    <Link href="#"><a className="text-heading-5 color-gray-900">Unveiling the Latest Fashion Trends: Elevate Your Style Game</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-9">
                                        <Link href="#"><a><Image width={398} height={255} src="/assets/imgs/page/homepage6/img-news-1.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice & Look Stylish</span>
                                    <Link href="#"><a className="text-heading-5 color-gray-900">Mastering the Art of Looking Cool: Your Style Guide</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-6">
                                        <Link href="#"><a><Image width={398} height={255} src="/assets/imgs/page/homepage6/img-news-2.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice Every Day</span>
                                    <Link href="#"><a className="text-heading-5 color-gray-900">Dressing Nice Every Day: A Guide to Effortless Style</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-4">
                                        <Link href="#"><a><Image width={398} height={255} src="/assets/imgs/page/homepage6/img-news-3.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">Lastest trend</span>
                                    <Link href="#"><a className="text-heading-5 color-gray-900">Unveiling the Hottest Fashion Trends of the Season</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-2">
                                        <Link href="#"><a><Image width={398} height={255} src="/assets/imgs/page/homepage6/img-news-4.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice & Look Stylish</span>
                                    <Link href="#"><a className="text-heading-5 color-gray-900">Dressing Nice: A Guide to Effortless Style</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-8">
                                        <Link href="#"><a><Image width={398} height={255} src="/assets/imgs/page/homepage6/img-news-5.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice Every Day</span>
                                    <Link href="#"><a className="text-heading-5 color-gray-900">Unleashing Your Style: A Journey into the World of Fashion</a></Link>
                                    <div className="grid-4-img mt-2 color-bg-1">
                                        <Link href="#"><a><Image width={398} height={255} src="/assets/imgs/page/homepage6/img-news-6.png" alt="Moirai" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Index6;