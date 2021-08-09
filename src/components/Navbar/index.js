import React from 'react'
import { Button, Col, Row } from 'antd'
import { Input } from 'antd';
import { RiSearch2Line } from "react-icons/ri";
import { MdBookmark } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/Logo.svg'
import './Navbar.scss'

const Navbar = ({justLogo}) => {
    return (        
        <Row className="navbar-container">
            <Col span={5} className="title">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </Col>
            {
                justLogo === true?
                ''
                :
                <>
                <Col span={14} className="search">
                    <Input placeholder="Find your favorite journal research" prefix={<RiSearch2Line color="#48CAE4" size="1.5vw" />} />
                    <Button type="primary" icon={<MdBookmark color="#48CAE4" size="2vw" />} size="large" />
                </Col>
                <Col span={5} className="add-research">
                    <Link to="/upload">
                        <Button type="primary" shape="round" icon={<VscDiffAdded fontSize="1.5vw" />} size="large">
                            Add New Research
                        </Button>
                    </Link>
                </Col>
                </>
            }
        </Row>
    )
}

export default Navbar
