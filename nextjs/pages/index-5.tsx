import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import FeaturedSlider from "../components/slider/Featured";

function Index5(): JSX.Element {
    return (
        <>
            <Layout>
                <div className="section-box">
                <div className="banner-hero banner-homepage5">
                    <div className="container mt-50">
                    <div className="row">
                        <div className="col-lg-8"><span className="text-heading-4 color-gray-400">Fashion as unique as you are</span>
                        <h1 className="text-display-2 mt-30">Unveiling The Latest Fashion Trends!</h1>
                        <p className="text-body-lead-large color-gray-500 mt-40 pr-40">The latest trend is waiting for you</p>
                        <div className="mt-40">
                            <ul className="list-icon-3">
                            <li className="text-body-text-md">Style</li>
                            <li className="text-body-text-md">Innovation</li>
                            <li className="text-body-text-md">Influenced by culture and society</li>
                            <li className="text-body-text-md">Self-expression</li>
                            <li className="text-body-text-md">Function and utility</li>
                            <li className="text-body-text-md">Individual and collective identity</li>
                            </ul>
                        </div>
                        <div className="mt-40 box-mw-610">
                            <div className="form-newsletter-2">
                            <form><input className="input-newsletter" value="" placeholder="Enter your email ..." /><button className="btn btn-newsletter bg-green-900 icon-arrow-right-white" type="submit">Joint Pre-Order</button></form>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 mt-50 d-none d-lg-block">
                        <div className="banner-imgs">
                            <div className="block-3 shape-3"><Image width={230} height={174} src="/assets/imgs/page/homepage5/card.png" alt="Agon" /></div>
                            <div className="img-responsive shape-1">
                                <Image className="rounded-4" width={416} height={416} alt="Agon" src="/assets/imgs/page/homepage5/banner.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box">
                <div className="container mt-120 mb-60">
                    <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <div className="product-item-1 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                        <Link href="#"><a>
                        <div className="product-image"><Image width={150} height={150} src="/assets/imgs/page/homepage5/sp9.png" alt="image"/></div>
                        <div className="product-info">
                            <h3 className="title-product">LV Classic Monogram Hat</h3><span className="price-regular mr-15">$29.8</span><span className="price-regular price-line">$29.8</span>
                        </div>
                        </a></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <div className="product-item-1 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                        <Link href="#"><a>
                        <div className="product-image"><Image width={150} height={150} src="/assets/imgs/page/homepage5/sp9.png" alt="image"/></div>
                        <div className="product-info">
                            <h3 className="title-product">Eclipse Carryall</h3><span className="price-regular mr-15">$29.8</span><span className="price-regular price-line">$29.8</span>
                        </div>
                        </a></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <div className="product-item-1 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                        <Link href="#"><a>
                        <div className="product-image"><Image width={150} height={150} src="/assets/imgs/page/homepage5/sp9.png" alt="image"/></div>
                        <div className="product-info">
                            <h3 className="title-product">Venture Voyager</h3><span className="price-regular mr-15">$29.8</span><span className="price-regular price-line">$29.8</span>
                        </div>
                        </a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box">
                <div className="container mt-50">
                    <div className="row">
                    <div className="col-lg-9 col-sm-8">
                        <h3 className="text-heading-1 mb-10">Fashion Product<br className="d-lg-block d-none" />For Pre-Order</h3>
                    </div>
                    </div>
                </div>
                <div className="container mt-80">
                    <FeaturedSlider/>
                </div>
                </div>
                <div className="section-box mt-40">
                <div className="container text-center">
                    <h2 className="text-heading-1 color-gray-900">Fashion Product List</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">
                        The Fashion Product List is a comprehensive collection of<br className="d-lg-block d-none" />
                        trendy and stylish items that cater to diverse fashion<br className="d-lg-block d-none" />
                        preferences. It offers a wide range of fashion products,<br className="d-lg-block d-none" />
                        ensuring there's something for everyone.
                    </p>
                </div>
                <div className="container mt-70">
                    <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="list-categories-number box-bdr-2 mb-30">
                        <div className="header-list-category">
                            <h3 className="text-body-lead-large font-bold">Popular Categories</h3>
                        </div>
                        <ul className="list-category">
                            <li>
                            <Link href="#"><a>Beauty and Grooming</a></Link>
                            <span className="number">6</span></li>
                            <li>
                            <Link href="#"><a>Clothing</a></Link>
                            <span className="number">12</span></li>
                            <li>
                            <Link href="#"><a>Footwear</a></Link>
                            <span className="number">14</span></li>
                            <li>
                            <Link href="#"><a>Accessories</a></Link>
                            <span className="number">8</span></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                        <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="grid-category hover-up">
                            <Link href="#"><a>
                            <div className="grid-image-left-category">
                                <div className="category-image cate-img"><span className="for-beauty"></span></div>
                                <div className="category-info">
                                <h3 className="text-heading-6">Beauty and Grooming</h3>
                                </div>
                            </div>
                            </a></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="grid-category hover-up">
                            <Link href="#"><a>
                            <div className="grid-image-left-category">
                                <div className="category-image cate-img"><span className="for-footwear"></span></div>
                                <div className="category-info">
                                <h3 className="text-heading-6">Footwear</h3>
                                </div>
                            </div>
                            </a></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="grid-category hover-up">
                            <Link href="#"><a>
                            <div className="grid-image-left-category">
                                <div className="category-image cate-img"><span className="for-fashion"></span></div>
                                <div className="category-info">
                                <h3 className="text-heading-6">Clothing</h3>
                                </div>
                            </div>
                            </a></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="grid-category hover-up">
                            <Link href="#"><a>
                            <div className="grid-image-left-category">
                                <div className="category-image cate-img"><span className="for-accessories"></span></div>
                                <div className="category-info">
                                <h3 className="text-heading-6">Accessories</h3>
                                </div>
                            </div>
                            </a></Link>
                            </div>
                        </div>
                        </div>
                        <div className="row mt-20">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12"></div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="grid-category grid-category-small hover-up">
                            <Link href="#"><a>
                            <div className="grid-image-left-category">
                                <div className="category-image cate-img"><span className="for-category"></span></div>
                                <div className="category-info">
                                <h3 className="text-heading-6">See All Categories</h3>
                                </div>
                                <div className="arrow-down-green"></div>
                            </div>
                            </a></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box mt-70">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-1 col-sm-1 col-12"></div>
                    <div className="col-lg-10 col-sm-10 col-12 text-center">
                        <div className="text-center mb-20"><span className="tag-1">About process</span></div>
                        <h2 className="text-display-3 color-gray-900 mb-60">Cross-border ordering has<br className="d-lg-block d-none" />never been easier</h2>
                    </div>
                    <div className="col-lg-1 col-sm-1 col-12"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-1 col-sm-12 col-12"></div>
                    <div className="col-lg-10 col-sm-12 col-12">
                        <ul className="list-steps">
                        <li className="icon-asset1">
                            <div className="text-center block-step bg-2 hover-up">
                            <div className="mb-30"><Image width={80} height={80} src="/assets/imgs/page/about/2/icon-start-plan.svg" alt="image"/></div>
                            <h3 className="text-heading-5 mb-10">Start Plan</h3>
                            <p className="text-body-text color-gray-500">Choose any of our packages</p>
                            </div>
                        </li>
                        <li className="icon-asset2">
                            <div className="text-center block-step bg-3 hover-up">
                            <div className="mb-30"><Image width={80} height={80} src="/assets/imgs/page/about/2/icon-connect.svg" alt="image"/></div>
                            <h3 className="text-heading-5 mb-10">Connect</h3>
                            <p className="text-body-text color-gray-500">Receive concepts In 24 hours</p>
                            </div>
                        </li>
                        <li className="icon-asset3">
                            <div className="text-center block-step bg-5 hover-up">
                            <div className="mb-30"><Image width={80} height={80} src="/assets/imgs/page/about/2/icon-match.svg" alt="image"/></div>
                            <h3 className="text-heading-5 mb-10">Match</h3>
                            <p className="text-body-text color-gray-500">Development Stage</p>
                            </div>
                        </li>
                        <li className="icon-asset4">
                            <div className="text-center block-step bg-5 hover-up">
                            <div className="mb-30"><Image width={80} height={80} src="/assets/imgs/page/about/2/icon-complete.svg" alt="image"/></div>
                            <h3 className="text-heading-5 mb-10">Complete</h3>
                            <p className="text-body-text color-gray-500">After-release Support</p>
                            </div>
                        </li>
                        <li>
                            <div className="text-center block-step bg-9 hover-up">
                            <div className="mb-30"><Image width={80} height={80} src="/assets/imgs/page/about/2/icon-review.svg" alt="image"/></div>
                            <h3 className="text-heading-5 mb-10">Review</h3>
                            <p className="text-body-text color-gray-500">Project launch and checkout</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-1 col-sm-12 col-12"></div>
                    </div>
                </div>
                </div>
                <div className="section-box mt-70">
                <div className="container">
                    <div className="box-green relative br-16">
                    <h3 className="text-heading-1 color-white">You can order on<br className="d-lg-block d-none" />App and Play store</h3>
                    <p className="text-desc-white mt-20">Bring the world of shopping to your phone</p>
                    <div className="mt-60">
                        <Link href="#"><a className="mr-20"><Image width={150} height={45} src="/assets/imgs/page/homepage5/apple-button.svg" alt="image"/></a></Link>
                        <Link href="#"><a><Image width={150} height={45} src="/assets/imgs/page/homepage5/google-play.svg" alt="image"/></a></Link>
                    </div>
                    <div className="mt-30"><span className="cb-layout mr-30">Order direct from the app</span><span className="cb-layout">Save and searches</span></div>
                    <div className="banner-b-hp5-contain">
                        <div className="banner-b-hp5">
                            <div className="banner-b-hp5-chart"><Image width={260} height={97} src="/assets/imgs/page/homepage5/spent-chart.png"/></div>
                            <div className="banner-b-hp5-card"><Image width={220} height={254} src="/assets/imgs/page/homepage5/card-2.png"/></div>
                            <div className="banner-b-hp5-img"><Image width={434} height={343} src="/assets/imgs/page/homepage5/img.png"/></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="section-box overflow-visible mt-120">
                <div className="container">
                    <h2 className="text-heading-3 text-center color-gray-900 mb-60">Trusted by the world&rsquo;s fashion</h2>
                    <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Agon" className="w-100" src="/assets/imgs/slider/logo/dg.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Agon" className="w-100" src="/assets/imgs/slider/logo/givenchy.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Agon" className="w-100" src="/assets/imgs/slider/logo/prada.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Agon" className="w-100" src="/assets/imgs/slider/logo/ysl.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Agon" className="w-100" src="/assets/imgs/slider/logo/versace.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><Image width={166} height={166} alt="Agon" className="w-100" src="/assets/imgs/slider/logo/burberry.svg" /></a></Link>
                            </div>
                        </div>
                </div>
                </div>
            </Layout>
        </>
    )
}

export default Index5;