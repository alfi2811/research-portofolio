import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { get_research } from '../../redux/actions/main'

import CardPost from '../../components/CardPost'
import Filter from '../../components/Filter'
import Jumbtron from '../../components/Jumbtron'
import Myprofile from '../../components/Myprofile'
import Navbar from '../../components/Navbar'

import './Home.scss'

const Home = () => {
    const dispatch = useDispatch()
    // const arr = [1,2,3,4,5]
    useEffect(() => {
        dispatch(get_research())
    }, [dispatch])
    const main = useSelector(state => state?.main)
    const posts = main?.list_research
    console.log(posts)
    return (
        <div>            
            <Navbar justLogo="false" />
            <Row className="home-container">
                <Col span={5} className="filter">
                    <Filter />
                </Col>
                <Col span={13} className="content">
                    <Jumbtron />
                    <div className="list-post">
                        {
                            posts && posts.map((post) => (
                                <CardPost 
                                    key={post._id}
                                    author={post.author} 
                                    title={post.articleTitle} 
                                    date={post.publicationDate}
                                    id={post._id}
                                />
                            ))
                        }
                    </div>
                </Col>
                <Col span={6} className="profile">
                    <Myprofile />
                </Col>
            </Row>
        </div>
    )
}

export default Home
