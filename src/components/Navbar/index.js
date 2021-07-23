import React from 'react'
import { Button, Col, Row } from 'antd'
import { Input } from 'antd';
import { RiSearch2Line } from "react-icons/ri";
import { MdBookmark } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import './Navbar.scss'

const Navbar = () => {
    return (        
        <Row className="navbar-container">
            <Col span={5} className="title">
                <h1>ReZearch</h1>
            </Col>
            <Col span={14} className="search">
                <Input placeholder="Find your favorite journal research" prefix={<RiSearch2Line color="#48CAE4" size="1.5vw" />} />
                <Button type="primary" icon={<MdBookmark color="#48CAE4" size="2vw" />} size="large" />
            </Col>
            <Col span={5} className="add-research">
                <Button type="primary" shape="round" icon={<VscDiffAdded fontSize="1.5vw" />} size="large">
                    Add New Research
                </Button>
            </Col>
        </Row>
    )
}

export default Navbar
