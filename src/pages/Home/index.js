import { Col, Row } from 'antd'
import React from 'react'
import CardPost from '../../components/CardPost'
import Filter from '../../components/Filter'
import Jumbtron from '../../components/Jumbtron'
import Myprofile from '../../components/Myprofile'
import Navbar from '../../components/Navbar'

import './Home.scss'

const Home = () => {
    const arr = [1,2,3,4,5]
    return (
        <div>            
            <Navbar />
            <Row className="home-container">
                <Col span={5} className="filter">
                    <Filter />
                </Col>
                <Col span={13} className="content">
                    <Jumbtron />
                    <div className="list-post">
                        {
                            arr.map((dt) => (
                                <CardPost />
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
