import { Col, Row } from 'antd'
import React from 'react'
import Filter from '../../components/Filter'
import Jumbtron from '../../components/Jumbtron'
import Myprofile from '../../components/Myprofile'
import Navbar from '../../components/Navbar'

import './Home.scss'

const Home = () => {
    return (
        <div>            
            <Navbar />
            <Row className="home-container">
                <Col span={5} className="filter">
                    <Filter />
                </Col>
                <Col span={13} className="content">
                    <Jumbtron />
                </Col>
                <Col span={6} className="profile">
                    <Myprofile />
                </Col>
            </Row>
        </div>
    )
}

export default Home
