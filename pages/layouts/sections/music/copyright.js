import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Copyright = () => (
    <div className="music copyright copyright-bg">
        <Container>
            <Row>
                <Col md="5" sm="12">
                    <div className="link-horizontal">
                        <ul>
                            <li>
                                <a className="copyright-text op-text" href="#">home</a>
                            </li>
                       
                       
                            <li>
                                <a className="copyright-text op-text" href="https://www.dynadot.com/market/listing/mydoge.us">Buy this website  </a>
                            </li>
                            <li>
                                <a className="copyright-text op-text" href="mailto:2600.ma@gmail.com">contact</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md="2" sm="12">
                    <div className="text-center">
                        <div className="link-horizontal">
                            <ul className="justify-content-center">
                                <li>
                                    <a className="copyright-text op-text" href="#">
                                        <i aria-hidden="true" className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text op-text" href="#">
                                        <i aria-hidden="true" className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text op-text" href="#">
                                        <i aria-hidden="true" className="fa fa-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text op-text" href="#">
                                        <i aria-hidden="true" className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="5" sm="12">
                    <div className="m-l-auto center-para">
                        <p className="copyright-text text-white text-right op-text">?? 2021 MyDoge</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Copyright;
