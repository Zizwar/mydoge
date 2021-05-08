import React from 'react';
//import { market } from '../../../../database/elements/price/database';
import { Container, Row, Col } from 'reactstrap'
const Album = ({ data: market = [] }) => (
    <section className="music album bg-black pb-0">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title4">
                        <div className="main-title">
                            <h2>All Market</h2>
                        </div>
                        <div className="sub-title">
                            <p></p>
                        </div>
                    </div>
                </Col>

                {market && market.map((item = [], index) => {
                    const { link, price = "",
                        exchange = "",
                        pair = "",
                        pairPrice = "",
                        volume = 0 } = item;
                    if (exchange)
                        return <Col lg="3" md="4" sm="6" key={index}>
                            <div style={{ border: "2px dotted #369" }} className="album-list overlay-box text-center">
                                <h5 className="text-uppercase list-head">
                                    <a className=" btn btn-default btn-gradient text-white btn-app1-theme"
                                        target="_parent" href={link ? link?.includes("binance.com") ? "https://www.binance.com/?ref=120434795" : link : `https://www.google.com/search?q=market+${exchange}`}>{exchange} {link?.includes("binance.com") && "💰"}</a></h5>
                                <div>
                                    <h6 className="item-sublist">${price?.toFixed(5)}</h6>
                                    <h6 className="item-sublist">{pair} = {pairPrice.toFixed(5)}</h6>
                                    <h6 className="item-sublist">Volume: {parseInt(volume) || volume && volume?.toFixed(5)}</h6>

                                </div>
                            </div>
                        </Col>
                }
                )
                }
            </Row>
        </Container>
    </section>
)

export default Album;