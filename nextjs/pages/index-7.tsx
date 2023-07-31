import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Index7(): JSX.Element {
return (
    <>
        <Layout>
            <div className="page-homepage7-bg"></div>
            <div className="section-box">
            <div className="banner-hero banner-homepage6">
                <div className="container mt-40">
                <div className="row">
                    <div className="col-lg-6 mt-30">
                    <h1 className="text-display-2">Unveiling the <br/><span className="color-purple">latest fashion</span><br/> trend in global</h1>
                    </div>
                    <div className="col-lg-5 offset-xl-1 mt-30">
                    <p className="text-body-lead-large font-xl color-gray-500">
                        Embrace sustainable fashion with our new line of clothing made from ethically sourced organic cotton and recycled materials, 
                        ensuring both style and environmental consciousness go hand in hand.
                    </p>
                    <div className="mt-40">
                        <Link href="#"><a className="btn btn-deep-red shape-square icon-arrow-right-white">Get Started</a></Link>
                        <Link href="#"><a className="btn btn-link icon-triangle icon-triangle-green-600 color-gray-900 ml-40">How it works</a></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="section-box mt-100">
            <div className="container">
                <div className="row">
                <div className="col-lg-7"><Image width={746} height={564} src="/assets/imgs/page/homepage7/banner-1.png" alt="image"/></div>
                <div className="col-lg-5"><Image width={526} height={567} src="/assets/imgs/page/homepage7/banner-2.png" alt="image"/></div>
                </div>
            </div>
            </div>
            <div className="section-box mt-100">
            <div className="container">
                <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="pb-20 text-mb-center">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-deep-red"><span className="count">20</span>k+</span>
                        <div className="text-body-quote">Items sold</div>
                        <p className="text-body-text color-gray-500 mt-10">Over 20k items sold so far! We are blessed to be a leading fashion supplier in the world.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-600"><span className="count">4.6</span></span>
                        <div className="text-body-quote">Overall Rating</div>
                        <p className="text-body-text color-gray-500 mt-10">We strive to provide the best possible shopping experience.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-deep-red"><span className="count">35</span>+</span>
                        <div className="text-body-quote">Stores</div>
                        <p className="text-body-text color-gray-500 mt-10">Over 35 official stores opened worldwide, and the number continues to grow!</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-600"><span className="count">100</span>+</span>
                        <div className="text-body-quote">Partners</div>
                        <p className="text-body-text color-gray-500 mt-10">We have established long-term partnerships with the most prestigious brands in the world.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                </div>
            </div>
            </div>
            <div className="section-box pt-100 pb-100 mt-100 bg-light-green">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 mb-30"><span className="tag-1 bg-3 color-white bg-deep-red">Customers Feedback</span>
                    <h3 className="text-heading-1 mt-30">Don&rsquo;t Take Our Word For It. See What Our Clients Say.</h3>
                    <p className="text-body-lead-large color-gray-600 mt-30">Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.</p>
                    <div className="mt-40">
                    <Link href="#"><a className="btn btn-default btn-white icon-arrow-right">Learn More</a></Link>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">&quot;The best purchase I&apos;ve made in recent years. I didn&apos;t think I could pull off that colour so well. &quot;</p>
                        <div className="box-img-user">
                            <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage1/user-img-1.png" alt="Agon" /></div>
                            <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                            <p className="text-body-text-md">Student</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card-grid-style-2 card-square hover-up mb-20 bg-light-purple">
                        <p className="text-body-text color-gray-600 text-comment">&quot;The price is a little higher than I expected, but the quality is god-tier. You get what you pay for at its finest&quot;</p>
                        <div className="box-img-user">
                            <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage1/user-img-2.png" alt="Agon" /></div>
                            <h4 className="text-body-lead color-gray-900 mb-5">Brooklyn Simmons</h4>
                            <p className="text-body-text-md">Designer</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card-grid-style-2 card-square hover-up mb-20 bg-light-purple">
                        <p className="text-body-text color-gray-600 text-comment">&quot;The service couldn&apos;t be better. I really couldn&apos;t have expected more. From item suggestions to final delivery.&quot;</p>
                        <div className="box-img-user">
                            <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage1/user-img-3.png" alt="Agon" /></div>
                            <h4 className="text-body-lead color-gray-900 mb-5">John Wilson</h4>
                            <p className="text-body-text-md">Content Creator</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card-grid-style-2 card-square hover-up mb-20">
                        <p className="text-body-text color-gray-600 text-comment">&quot;The sense of style is elegant and classy. The way the outfits are put together is fashionable and trendy.&quot;</p>
                        <div className="box-img-user">
                            <div className="img-user img-user-round"><Image width={80} height={80} src="/assets/imgs/page/homepage1/user-img-4.png" alt="Agon" /></div>
                            <h4 className="text-body-lead color-gray-900 mb-5">Albert Flores</h4>
                            <p className="text-body-text-md">Software Engineer</p>
                        </div>
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
                <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center"><Image width={494} height={605} className="img-small img-responsive" src="/assets/imgs/page/homepage7/img-1.png" alt="Agon" />
                    <div className="block-card"><Image width={250} height={190} src="/assets/imgs/page/homepage7/chart-2.png" alt="Agon" /></div>
                    <div className="block-control"><Image width={190} height={218} src="/assets/imgs/page/homepage7/img-safety.png" alt="Agon" /></div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                    <h3 className="text-heading-1 mt-30">Shopping Process</h3>
                    <p className="text-body-lead-large color-gray-400">How it works</p>
                    <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                        <p className="text-heading-1 color-deep-red mb-10">01</p>
                        <h4 className="text-heading-6 icon-leaf-purple">Input</h4>
                        <p className="text-body-excerpt color-gray-600 mt-15">Enter your references and personal information.</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                        <p className="text-heading-1 color-green-600 mb-10">02</p>
                        <h4 className="text-heading-6 icon-leaf-purple">Item suggestion</h4>
                        <p className="text-body-excerpt color-gray-600 mt-15">Exclusive item recommendations generated by AI based on your input.</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                        <p className="text-heading-1 color-green-600 mb-10">03</p>
                        <h4 className="text-heading-6 icon-leaf-purple">Try out</h4>
                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                        <p className="text-heading-1 color-deep-red mb-10">04</p>
                        <h4 className="text-heading-6 icon-leaf-purple">Payment</h4>
                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="section-box mt-140">
            <div className="container text-center">
                <h2 className="text-heading-1 color-gray-900">Our Flagship Stores</h2>
                <p className="text-body-lead-large color-gray-600 mt-20">Our main stores are strategically located in some of the <br className="d-lg-block d-none" />busiest and most high-traffic areas in the world.</p>
            </div>
            <div className="container list-category-homepage7 mt-70">
                <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="grid-category-2">
                    <div className="grid-category-image">
                        <Link href="#"><a><Image width={618} height={376} src="/assets/imgs/page/homepage7/img-cat-1.png" alt="image"/></a></Link>
                    </div>
                    <Link href="#"><a className="text-heading-5 color-gray-900">The New York Store</a></Link>
                    <div className="category-info-bottom">
                        <div className="shop-info">
                        <span className="mr-15 color-green-600">Established</span>
                        <span className="text-date mr-15">January 16, 1991</span>
                        <span className="mr-15 color-green-600">Address</span>
                        <span className="mr-15">725 Fifth Avenue, New York, United States</span>
                        </div>
                        <div className="link-read-more">
                        <Link href="#"><a className="color-purple">READ MORE</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="grid-category-2">
                    <div className="grid-category-image">
                        <Link href="#"><a><Image width={618} height={376} src="/assets/imgs/page/homepage7/img-cat-2.png" alt="image"/></a></Link>
                    </div>
                    <Link href="#"><a className="text-heading-5 color-gray-900">The Italy Store</a></Link>
                    <div className="category-info-bottom">
                        <div className="shop-info">
                        <span className="mr-15 color-green-600">Established</span>
                        <span className="text-date mr-15">January 16, 1991</span>
                        <span className="mr-15 color-green-600">Address</span>
                        <span className="mr-15">Via Condotti 6-8, Roma, 00187, Italia</span>
                        </div>
                        <div className="link-read-more">
                        <Link href="#"><a className="color-purple">READ MORE</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="grid-category-2">
                    <div className="grid-category-image">
                        <Link href="#"><a><Image width={618} height={376} src="/assets/imgs/page/homepage7/img-cat-3.png" alt="image"/></a></Link>
                    </div>
                    <Link href="#"><a className="text-heading-5 color-gray-900">The Seoul Store</a></Link>
                    <div className="category-info-bottom">
                        <div className="shop-info">
                        <span className="mr-15 color-green-600">Established</span>
                        <span className="text-date mr-15">January 16, 1991</span>
                        <span className="mr-15 color-green-600">Address</span>
                        <span className="mr-15"> Cheongdam, Seoul, 06015, Korea</span>
                        </div>
                        <div className="link-read-more">
                        <Link href="#"><a className="color-purple">READ MORE</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="grid-category-2">
                    <div className="grid-category-image">
                        <Link href="#"><a><Image width={618} height={376} src="/assets/imgs/page/homepage7/img-cat-4.png" alt="image"/></a></Link>
                    </div>
                    <Link href="#"><a className="text-heading-5 color-gray-900">The Tokyo Store</a></Link>
                    <div className="category-info-bottom">
                        <div className="shop-info">
                        <span className="mr-15 color-green-600">Established</span>
                        <span className="text-date mr-15">January 16, 1991</span>
                        <span className="mr-15 color-green-600">Address</span>
                        <span className="mr-15">Shinjuku, M-SQUARE 1F NEWNO , Tokyo</span>
                        </div>
                        <div className="link-read-more">
                        <Link href="#"><a className="color-purple">READ MORE</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="text-center mt-30">
                <Link href="#"><a className="btn btn-deep-red icon-arrow-right-white">Discover other stores</a></Link>
                </div>
            </div>
            </div>
            <div className="section-box">
            <div className="container mt-130">
                <div className="row">
                <div className="col-lg-1 col-sm-1 col-12"></div>
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                    <h2 className="text-heading-1 color-gray-900 mb-10">From Our Blog</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">Our fashion articles</p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12"></div>
                </div>
            </div>
            <div className="container mt-90">
                <div className="row">
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                    <div className="card-grid-style-4">
                    <div className="grid-4-img bg-light-green mb-20">
                        <Link href="#"><a><Image width={396} height={465} src="/assets/imgs/page/homepage7/img-blog-1.png" alt="Agon" /></a></Link>
                    </div>
                    <Link href="#"><a className="text-heading-5 color-gray-900">Unveiling the Latest Fashion Trends: Elevate Your Style Game</a></Link>
                    <p className="text-body-text color-gray-500 mt-10">Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.</p>
                    <div className="blog-img-user">
                        <div className="img-user img-user-round"><Image width={56} height={56} src="/assets/imgs/page/blog/2/user-1.png" alt="Agon" /></div>
                        <h4 className="text-heading-6 color-gray-900">Jenny Wilson</h4>
                        <p className="text-body-small color-gray-500">August 25, 2022</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                    <div className="card-grid-style-4">
                    <div className="grid-4-img bg-light-purple mb-20">
                        <Link href="#"><a><Image width={396} height={465} src="/assets/imgs/page/homepage7/img-blog-2.png" alt="Agon" /></a></Link>
                    </div>
                    <Link href="#"><a className="text-heading-5 color-gray-900">Mastering the Art of Looking Cool: Your Style Guide</a></Link>
                    <p className="text-body-text color-gray-500 mt-10">There&apos;s nothing quite like the effortless, laid-back vibes of fashion that are both comfortable and stylish. Effortless fashion is all about comfort, and letting go of trends that don&apos;t fit your personal style.</p>
                    <div className="blog-img-user">
                        <div className="img-user img-user-round"><Image width={56} height={56} src="/assets/imgs/page/blog/2/user-2.png" alt="Agon" /></div>
                        <h4 className="text-heading-6 color-gray-900">Jenny Wilson</h4>
                        <p className="text-body-small color-gray-500">August 25, 2022</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                    <div className="card-list-style-1">
                    <Link href="#"><a className="text-heading-6">Dressing Nice Every Day: A Guide to Effortless Style</a></Link>
                    <div className="blog-img-user">
                        <div className="img-user img-user-round"><Image width={41} height={41} src="/assets/imgs/page/blog/2/user-3.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-500">Jane Cooper</h4>
                        <p className="text-body-small color-gray-500">August 25, 2022</p>
                    </div>
                    <div className="style-1-img bg-light-green">
                        <Link href="#"><a><Image width={110} height={110} src="/assets/imgs/page/homepage7/img-blog-3.png" alt="Agon" /></a></Link>
                    </div>
                    </div>
                    <div className="card-list-style-1">
                        <Link href="#"><a className="text-heading-6">Unveiling the Hottest Fashion Trends of the Season</a></Link>
                    <div className="blog-img-user">
                        <div className="img-user img-user-round"><Image width={41} height={41} src="/assets/imgs/page/blog/2/user-4.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-500">Wade Warren</h4>
                        <p className="text-body-small color-gray-500">August 25, 2022</p>
                    </div>
                    <div className="style-1-img bg-light-purple">
                        <Link href="#"><a><Image width={110} height={110} src="/assets/imgs/page/homepage7/img-blog-4.png" alt="Agon" /></a></Link>
                    </div>
                    </div>
                    <div className="card-list-style-1">
                        <Link href="#"><a className="text-heading-6">Dressing Nice: A Guide to Effortless Style</a></Link>
                    <div className="blog-img-user">
                        <div className="img-user img-user-round"><Image width={41} height={41} src="/assets/imgs/page/blog/2/user-5.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-500">Jenny Wilson</h4>
                        <p className="text-body-small color-gray-500">August 25, 2022</p>
                    </div>
                    <div className="style-1-img bg-light-green">
                        <Link href="#"><a><Image width={110} height={110} src="/assets/imgs/page/homepage7/img-blog-5.png" alt="Agon" /></a></Link>
                    </div>
                    </div>
                    <div className="card-list-style-1">
                        <Link href="#"><a className="text-heading-6">Unleashing Your Style: A Journey into the World of Fashion</a></Link>
                    <div className="blog-img-user">
                        <div className="img-user img-user-round"><Image width={41} height={41} src="/assets/imgs/page/blog/2/user-6.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-500">Robert Fox</h4>
                        <p className="text-body-small color-gray-500">August 25, 2022</p>
                    </div>
                    <div className="style-1-img bg-light-purple">
                        <Link href="#"><a><Image width={110} height={110} src="/assets/imgs/page/homepage7/img-blog-6.png" alt="Agon" /></a></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="section-box overflow-visible mb-50">
            <div className="container mt-100">
                <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="bg-light-green box-newsletter position-relative">
                    <div className="row">
                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                        <h4 className="text-heading-2 mb-10 mt-10">Subscribe Our Newsletter</h4>
                        <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                        <Link href="#"><a className="color-purple">Term &amp; Conditions</a></Link>
                        <div className="box-form-newsletter mt-30">
                            <form className="form-newsletter"><input className="input-newsletter" value="" placeholder="Enter you mail .." /><button className="btn btn-send-deep-red"></button></form>
                        </div>
                        </div>
                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                        <div className="block-chart"><Image width={255} height={193} src="/assets/imgs/page/homepage7/chart-2.png" alt="Agon" /></div>
                        <div className="img-responsive img-newsletter"><Image width={332} height={404}  src="/assets/imgs/template/img-newsletter-1.png" alt="Agon" /></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                </div>
            </div>
            </div>
        </Layout>
    </>
)
}

export default Index7;
