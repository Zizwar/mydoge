import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { Container, Row, Col } from 'reactstrap'
import price from '../../../api/price';
const Banner = ({ abcdar, data=[] }) => {
    const  { price = 0, color, currentTextPrice } = data;
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
            <h1 style={{ color,marginTop: "10px" }}>{currentTextPrice || 2021}</h1>
            <div className="music-content">
                <div className=" bg bg-shadow-top">
                    <Tilt perspective="20000" transitionSpeed="3000">
                        <div className="text-center w-100">
                            <div className="img-height">
                                {abcdar ?
                                    <a href="https://www.abcdarab.com/">
                                        <img alt="" className="img-fluid" src="/abcdarab.png" />
                                    </a>
                                    : <img alt="" className="img-fluid" src="/favicon.ico" />
                                }
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
            {!abcdar && <>
                <div className="right-side">
                    <div className="circle" style={{
                        background: "aliceblue",
                        height: "70px",
                        width: "70px"
                    }}>
                        <img style={{ left: 0 }} alt="" className="img-fluid" src="/assets/images/404/rocket.svg" />
                    </div>
                    <h1>{`${price}📉`}</h1>
                </div>

                <div className="left-side">
                </div>
                {/*
                    <Row>
                        <iframe width="99%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/981250600&color=%23322e1e&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </Row>
                */}</>
            }
        </section>
    )
}



export default Banner;
