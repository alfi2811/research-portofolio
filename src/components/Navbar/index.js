import React from 'react'
import { Button, Col, Row, Form } from 'antd'
import { Input } from 'antd';
import { RiSearch2Line } from "react-icons/ri";
import { MdBookmark } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/Logo.svg'
import './Navbar.scss'
import { useDispatch } from 'react-redux';
import { search_research } from '../../redux/actions/main';

const Navbar = ({justLogo}) => {
    const dispatch = useDispatch()
    const handleKeyPress = (value) => {            
      dispatch(search_research(value.key))
    }
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
              <Form
                name="basic"
                onFinish={handleKeyPress}                  
              >
                <Form.Item name="key">
                  <Input placeholder="Find your favorite journal research" name="search" prefix={<RiSearch2Line color="#48CAE4" size="1.5vw" />} />
                </Form.Item>
              </Form>
              <Link to="/bookmark">
                <Button type="primary" icon={<MdBookmark color="#48CAE4" size="2vw" />} size="large" />
              </Link>
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
