import React, { useState } from 'react';
import Link from "next/link";

const PriceTable4: React.FC = () => {
    return (
        <>
            <div className="container mt-20">
                <div className="block-pricing block-pricing-2 block-pricing-4 mt-70">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="box-pricing-item hover-up">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">$10</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Hemming Trousers
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                Make your perfect trousers the ideal length with our hemming service.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Precise Hemming</li>
                                            <li>Customizable Fit</li>
                                            <li>Length Adjustment</li>
                                            <li>Professional Finishing</li>
                                        </ul>
                                        <div>
                                            <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Selected
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <div className="box-pricing-item active hover-up">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">$5</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Replacing Buttons
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                Refresh and rejuvenate your clothing with our button replacement service.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Use Suitable Button Styles</li>
                                            <li>Improved Functionality</li>
                                            <li>Quality Selection</li>
                                            <li>Attention to Detail</li>
                                        </ul>
                                        <div>
                                            <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Selected
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="box-pricing-item hover-up">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">$5</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Replacing Zipper
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                Enhance the your clothing with zipper replacement service.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Renewed Functionality</li>
                                            <li>Extended Garment Lifespan</li>
                                            <li>Customizable Options</li>
                                            <li>Attention to Detail</li>
                                        </ul>
                                        <div>
                                            <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Selected
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <div className="box-pricing-item hover-up">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">$10</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Waist cinching
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                Transform your clothing with our waist cinching service.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Flattering Silhouette</li>
                                            <li>Tailored Adjustments</li>
                                            <li>Personalized Style</li>
                                            <li>Versatile Options</li>
                                        </ul>
                                        <div>
                                            <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Selected
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceTable4;