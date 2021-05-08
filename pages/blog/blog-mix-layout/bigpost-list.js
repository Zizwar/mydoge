import React from 'react'
import { BlogsList } from "../../../database/blog/database"
import {Container,Row,Col} from 'reactstrap'
// import Custom Components
import CommonLayout from "../../../containers/common/common-layout"
import CardWrapper from "../../../containers/blog/card/list-wrapper"
import GridWrapper from "../../../containers/blog/card/grid-wrapper"
import Categories from "../../../containers/blog/categories"
import PopularPosts from "../../../containers/blog/posts"
import NewsLetter from "../../../containers/blog/newsletter"
import Instagram from "../../../containers/blog/instagram"

const BigPostLeftSidebar = ({ }) => (
    <>
        <CommonLayout pathList={['blog', 'blog mix layout', 'list mix with left sidebar']} pathTitle="BLOG WITH LEFT-SIDEBAR">
            <section className="agency blog blog-sec blog-sidebar sider">
                <Container>
                    <Row>
                        <Col lg="9"  className="order-lg-2">
                            <div>
                            <GridWrapper
                                    className="col-12 px-0"
                                    image="/assets/images/agency/blog/12-main.jpg"
                                    blogDate="June 19, 2019"
                                    place="Phonics ,Newyork"
                                    title="Twice profit than before you"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of
                                    type and scrambled it to make a type specimen book..............."
                                    readUrl="#javascrpt"
                                />
                                {BlogsList.length > 0 ?
                                    BlogsList.map((item, index) =>
                                        <CardWrapper
                                            key={`grid-no-sidebar-${index}`}
                                            className="col-12 blog-sec blog-list"
                                            image={item.image}
                                            blogDate={item.createdAt}
                                            place={item.place}
                                            title={item.title}
                                            description={item.description}
                                            readUrl={item.readUrl}
                                        />
                                    ) :
                                    '!! No Blogs Found'}
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="blog-side">
                                <Categories />
                                <PopularPosts />
                                <NewsLetter />
                                <Instagram />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    </>
)


export default BigPostLeftSidebar;