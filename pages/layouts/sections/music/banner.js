import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => {
    const [sideSection, setSideSection] = useState(false);

    const sidesection = () => {
        if (!sideSection) {
            setSideSection(true)
            document.querySelector('.side-section').classList.add('d-block')
        } else {
            setSideSection(false)
            document.querySelector('.side-section').classList.remove('d-block')
        }
    }

    return (
        <section className="music header" id="header">
            <div className="music-content">
                <div className=" bg bg-shadow-top">
                    <Tilt perspective="20000" transitionSpeed="3000">
                        <div className="text-center w-100">
                            <div className="img-height">
                                <img alt="" className="img-fluid" src="/dogecoin.png" />
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
            <div className="right-side">
                <div className="circle">
                    <img alt="" className="img-fluid"  src="/dogecoin.png" />
                </div>
                <h1>2021</h1>
            </div>
            <div className="left-side">
      
            </div>
            <Container className="music-container">
                <Row>
                     </Row>
            </Container>
        </section>
    )
}



export default Banner;