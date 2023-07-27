import Image from "next/image";
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";

function Index2(): JSX.Element {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 mt-50">
                                        <span className="tag-1 bg-color-3 color-white">Moirai</span>
                                        <h1 className="text-display-3 mt-30">
                                            Unveiling the <span className="color-gray-blue">latest fashion</span> trend in global
                                        </h1>
                                        <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                            The lastest trend is waiting for you
                                        </p>
                                        <div className="mt-40">
                                            <Link href="/page-about-1"><a className="btn btn-black shape-square icon-arrow-right-white">Get Start
                                            </a></Link>
                                            <Link href="/page-about-2"><a className="btn btn-link icon-triangle-2 color-gray-900 ml-40">How it works
                                            </a></Link>
                                        </div>
                                        <div className="mt-50">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">5000</span>+
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Product
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">756</span>+
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Happy Client
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">100</span>%
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Client Satisfaction
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <div className="banner-imgs">
                                            <div className="block-1 shape-2">
                                                <Image width={220} height={261} src="/assets/imgs/page/homepage2/balance.png" alt="Agon" />
                                            </div>
                                            <div className="block-2 shape-3">
                                                <Image width={155} height={170} src="/assets/imgs/page/homepage2/payment.png" alt="Agon" />
                                            </div>
                                            <div className="img-responsive shape-1">
                                                <Image width={516} height={645}  alt="Agon" src="/assets/imgs/page/homepage2/banner.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="section-box overflow-visible mt-80">
                        <div className="container">
                            <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                                Trusted by the world’s fashion companies
                            </h2>
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
                    <section className="section-box">
                        <div className="container mt-120">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 block-img-we-do">
                                    <div className="inner-image">
                                        <Image width={618} height={716} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage2/img-2.png" alt="Agon" />
                                        <div className="block-chart rounded-4 overflow-hidden">
                                            <Image width={270} height={204} src="/assets/imgs/page/homepage2/chart.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do-2">
                                    <span className="tag-1 bg-6 color-green-900">Overview</span>
                                    <h3 className="text-heading-1 mt-30">
                                        About Us
                                    </h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        We facilitate the creation of strategy and design
                                    </p>
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-company.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                About the Company
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Our company is a leading fashion enterprise dedicated to providing exceptional clothing and accessories.
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-history.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                History of Information
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Our company has a rich and inspiring history. It all started [insert specific information about the company's origin, such as the year and circumstances of establishment].
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-mission.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Company Mission
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                At our company, our mission is to empower individuals to express their unique personalities through fashion. We believe that clothing goes beyond mere functionality—it is a powerful form of self-expression.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Application Flatform
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        An application platform is a software framework or infrastructure that provides a foundation for developing and running applications. 
                                        It typically includes tools, libraries, and services that simplify the development process, enable application deployment, and facilitate scalability and performance optimization. 
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-90 mb-lg-100">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-2 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Cross-Platform
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Your site is not complete with only
                                            landings. Get essential inner pages using
                                            our ready demos.
                                        </p>
                                        <div className="box-image-inner bg-color-1">
                                            <Image width={500} height={391} src="/assets/imgs/page/homepage2/temp-web-1.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-6 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Extremely Flexible
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Your site is not complete with only
                                            landings. Get essential inner pages using
                                            our ready demos.
                                        </p>
                                        <div className="box-image-inner bg-color-2">
                                            <Image width={500} height={391} src="/assets/imgs/page/homepage2/temp-web-2.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-lg-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        What Makes Us Outstanding
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        At our clothing shop, we strive to stand out from the crowd by offering a unique 
                                        and exceptional shopping experience. Here are a few factors that set us apart.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon">
                                            <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-quality.svg" alt="Agon" /></span>
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
                                        <div className="item-icon">
                                            <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-trendsetting.svg" alt="Agon" /></span>
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
                                        <div className="item-icon">
                                            <span className="icon-left"><Image width={64} height={64} src="/assets/imgs/page/homepage2/icon-community.svg" alt="Agon" /></span>
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
                    </section>
                    <section className="section-box">
                        <div className="container mt-80">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 mb-30">
                                    <span className="tag-1 bg-9 color-green-900">For You</span>
                                    <h3 className="text-heading-1 mt-30">
                                        Best Seller
                                    </h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        Welcome to our Best Sellers collection, where you can discover our most sought-after fashion pieces that are loved by our customers.
                                    </p>
                                    <div className="line-bd-green mt-50" />
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Stay on-trend
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Explore our Best Sellers collection for the latest fashion trends that are making waves in the industry.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Customer Favorites
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Discover our most-loved fashion pieces, as recommended by our valued customers.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Uncompromising Quality
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Shop from our Best Sellers collection, where fashion meets exceptional craftsmanship and high-quality materials..
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Versatile Style
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Find versatile fashion pieces that effortlessly elevate your wardrobe for any occasion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do">
                                    <div className="inner-image">
                                        <Image width={608} height={702} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage2/img-best-seller.png" alt="Agon" />
                                        <div className="block-image-bottom">
                                            <Image width={313} height={330} className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage2/img-best-seller-2.png" alt="Agon" />
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
                                                    Wow, those jeans look amazing on you! The fit is perfect and they really accentuate your figure
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-1.png" alt="Agon" />
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
                                                    You have a great sense of style. The way you've put together that outfit is so fashionable and trendy.
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-2.png" alt="Agon" />
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
                                                    I love the color of that shirt on you. It brings out your eyes and complements your skin tone beautifully
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-3.png" alt="Agon" />
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
                                                    I can’t believe in
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    You always have such impeccable taste in clothes. I'm constantly impressed by how effortlessly stylish you look
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <Image width={80} height={80} src="/assets/imgs/page/homepage2/user-img-4.png" alt="Agon" />
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
                    <section className="section-box mt-70">
                        <div className="container mt-50">
                            <h3 className="text-heading-1 text-center mb-10">
                                Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                            </h3>
                        </div>
                        <PriceTable/>
                    </section>
                    <section className="section-box overflow-visible mb-100">
                        <div className="container mt-100">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="bg-6 box-newsletter position-relative">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-7">
                                                <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                                <h4 className="text-heading-2 mb-10 mt-10">
                                                    Contact For Selling Overview
                                                </h4>
                                                <p className="text-body-text color-gray-500">
                                                    By clicking the button, you are
                                                    agreeing with our
                                                </p>

                                                <Link href="/page-terms"><a>Term &amp; Conditions
                                                </a></Link>

                                                <div className="box-form-newsletter mt-30">
                                                    <form className="form-newsletter">
                                                        <input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                                <div className="block-chart shape-1">
                                                    <Image width={255} height={193} src="/assets/imgs/template/chart.png" alt="Agon" />
                                                </div>
                                                <div className="img-responsive img-newsletter"><Image width={332} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Agon" /></div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Index2;