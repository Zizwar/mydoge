import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import TeamSection from './breadcrumb-comon-sections/team-section';
import CounterSection from './breadcrumb-comon-sections/counter-section';
import FooterSection from '../../containers/common/footer';
import Faq from '../layouts/sections/modern-sass/faq';

const BreadcrumbLeft = () => {
    useEffect(() => {
        document.body.style.setProperty('--primary', '#000')
        document.body.style.setProperty('--secondary', '#000')
        document.body.style.setProperty('--light', '#252525')
        document.body.style.setProperty('--dark', '#000')
    })
    return (
        <Fragment>
            <Header className="dark" />

            <BreadcrumbSection
                className="col-6"
                bgDark="breadcrumb-left"
                classDiv="col-6"
                path="Breadcrumb Style"
                title="Breadcrumb Left"
                style="Breadcrumb Left"
            />

            <TeamSection />

            <CounterSection />

            <Faq />

            <FooterSection />

        </Fragment>
    )
}

export default BreadcrumbLeft;