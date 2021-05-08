import React, { Fragment } from 'react';
import PriceOne from "./element/price1";
import Title from '../common/title';
import { Container } from 'reactstrap'
const ElementPriceOne = ({data=[]}) => (
    <Fragment>
        <section className="app1 pricing mb-0">
            <Container>
                <Title heading="Market" />
                <PriceOne data={data} />
            </Container>
        </section>
    </Fragment>
);

export default ElementPriceOne;