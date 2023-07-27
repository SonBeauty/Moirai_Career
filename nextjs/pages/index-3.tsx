import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import Layout from "../components/layout/Layout";
import Accordion2 from "../components/elements/Accordion2";

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

function Index3(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center"><span className="tag-1 bg-red color-white">Fashion as unique as you are</span>
                                <h1 className="text-display-2 color-red mt-40">Unveiling the <span className="color-gray-900">latest fashion</span> trend in global</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">The latest trend is waiting for you</div>
                                <div className="mt-50">
                                    <Link href="/page-about-1"><a className="btn btn-black icon-arrow-right-white mb-15">Start free trial
                                    </a></Link>
                                    <Link href="/page-about-2"><a className="btn btn-default icon-arrow-right color-gray-900 ml-20 btn-mb mb-15">Learn more
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <Image width={1076} height={520} className="img-responsive bdrd-16" src="/assets/imgs/page/homepage3/img-banner-video.png" alt="Agon" />
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-red mb-10">What Makes Us Outstanding</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    At our clothing shop, we strive to stand out from the crowd by offering a unique and exceptional shopping experience. 
                                    Here are a few factors that set us apart.
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon-hp-3">
                                        <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage3/icon-quality.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">
                                            1. Unparalleled Quality
                                        </h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon-hp-3">
                                        <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage3/icon-trendsetting.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">
                                            2. Trendsetting Style
                                        </h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            Our team of experienced fashion experts keeps a pulse on the latest trends and emerging styles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon-hp-3">
                                        <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage3/icon-community.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">
                                            3. Community Engagement
                                        </h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            We actively engage with our community through various initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do"><Image width={618} height={716} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage3/img-product-2.png" alt="Agon" /></div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1 bg-red color-white">Fashion as unique as you are</span>
                                <h3 className="text-heading-1 text-center color-red mt-30">
                                    Best Seller
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                Welcome to our Best Sellers collection, where you can 
                                discover our most sought-after fashion pieces that are loved 
                                by our customers.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Stay on-trend
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Explore our Best Sellers collection for the latest fashion trends that are making waves in the industry.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Customer Favorites
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Discover our most-loved fashion pieces, as recommended by our valued customers.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Uncompromising Quality
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Shop from our Best Sellers collection, where fashion meets exceptional craftsmanship and high-quality materials.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Versatile Style
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Find versatile fashion pieces that effortlessly elevate your wardrobe for any occasion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 bg-red">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30"><span className="tag-1 bg-white color-gray-900">What Our Clients Say</span>
                                <h3 className="text-heading-1 mt-30">Customers Feedback</h3>
                                <p className="text-body-lead-large color-white mt-30">What are our client talk about us?</p>
                                <div className="mt-40">
                                    <Link href="/page-contact"><a className="btn btn-default btn-white icon-arrow-right">Learn More
                                    </a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">Wow, those jeans look amazing on you! The fit is perfect and they really accentuate your figure.</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-1.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">I love the color of that shirt on you. It brings out your eyes and complements your skin tone beautifully.</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-2.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jacob Jones</h4>
                                                <p className="text-body-text-md">Cheft</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">You have a great sense of style. The way you've put together that outfit is so fashionable and trendy.</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-3.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                                                <p className="text-body-text-md">Teacher</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">You always have such impeccable taste in clothes. I'm constantly impressed by how effortlessly stylish you look.</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-4.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Robert Fox</h4>
                                                <p className="text-body-text-md">Creator</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-140 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-40">
                                <h3 className="text-heading-1 color-red">Frequently asked questions</h3>
                                <p className="text-body-text color-gray-600 mt-30">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                <div className="row">
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">Need any help</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Are you in trouble with purchasing product?</p>
                                    </div>
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">Support your problem</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Just contact us and we will support you at any time.</p>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    <Link href="/page-contact"><a className="btn btn-black icon-arrow-right-white">Contact Us
                                    </a></Link>
                                    <Link href="/page-login"><a className="btn btn-link text-heading-6">Support Center
                                    </a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <Accordion2/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 color-red mb-10">Latest News</h3>
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
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">Lastest trend</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Unveiling the Latest Fashion Trends: Elevate Your Style Game
                                    </a></Link>
                                    <div className="grid-4-img mt-2 color-bg-12">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage3/img-news-1.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice & Look Stylish</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Mastering the Art of Looking Cool: Your Style Guide
                                    </a></Link>
                                    <div className="grid-4-img mt-2 color-bg-12">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage3/img-news-2.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice Every Day</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900"> Dressing Nice Every Day: A Guide to Effortless Style
                                    </a></Link>
                                    <div className="grid-4-img mt-2 color-bg-12">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage3/img-news-3.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">Lastest trend</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Unveiling the Hottest Fashion Trends of the Season
                                    </a></Link>
                                    <div className="grid-4-img mt-2 color-bg-12">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage3/img-news-4.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice & Look Stylish</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Dressing Nice: A Guide to Effortless Style
                                    </a></Link>
                                    <div className="grid-4-img mt-2 color-bg-12">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage3/img-news-5.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot mb-2">How to Dress Nice Every Day</span>
                                    <Link href="/blog-single"><a className="text-heading-5 color-gray-900">Unleashing Your Style: A Journey into the World of Fashion
                                    </a></Link>
                                    <div className="grid-4-img mt-2 color-bg-12">
                                        <Link href="/blog-single"><a><Image width={398} height={255} src="/assets/imgs/page/homepage3/img-news-6.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-50 mt-70">
                        <div className="bdrd-58 box-gray-100 icon-wave-red border-red-3">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-red mt-10">What can we support for you?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">fell free to ask about clothes.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-red icon-home-red mb-10 mt-10">Moirai</h4>
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
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about your problem" /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-red icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
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
                                <div className="bg-red box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-white text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Contact For Selling Overview</h4>
                                            <p className="text-body-text color-white">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a className="color-white">Term &amp; Conditions
                                            </a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter your mail .." /><button className="btn btn-send-red" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><Image width={255} height={193} src="/assets/imgs/template/chart-2.png" alt="Agon" /></div>
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

export default Index3;