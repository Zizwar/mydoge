import React, { Fragment } from 'react';
import Slider from "react-slick";
import { market } from '../../../../database/elements/price/database';
import { Row, Col } from 'reactstrap'
var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 991,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
        }
    ]
};


const PriceOne = () => {
    return (
        <Fragment>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme pricing-slider price-margin"  {...settings}>
                        {market && market.length > 0 ?
                            market.map((item, index) =>
                                <div className="item" key={`price-${index}`}>
                                    <div className="price-container  shadows text-center">
                                        <div className="price-feature-container set-relative">
                                            <div className="feature-text">
                                                <h3 className="feature-text-heading font-primary">{item.exchange}</h3>
                                                <hr />
                                            </div>
                                            <div className="price-value">
                                                <h4 className="price">${item.price?.toFixed(5)}</h4>
                                            </div>
                                            <div className="price-features">

                                                <h5 className="price-feature"> {item.pair}= {item.pairPrice}</h5>

                                              <a className=" btn btn-default btn-gradient text-white btn-app1-theme"
                                      target="_parent"  href={item.link ? item.link?.includes("binance.com") ? "https://www.binance.com/?ref=120434795" : item.link : `https://www.google.com/search?q=market+${item.exchange}`}>{item.exchange} {item.link?.includes("binance.com") && "🚀"}</a>
                                                <div className="set-abs bottom-0">
                                                    <img alt="" className="img-fluid pricing-img"
                                                        src='/assets/images/app_landing1/pricing/11.png' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ) :
                            'Pricing Data Not Found'}
                    </Slider>
                </Col>
            </Row>
        </Fragment>
    );
}

export default PriceOne;