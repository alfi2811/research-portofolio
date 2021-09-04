import React, {useState} from 'react'
import { Button, Col, Row, Form, Menu, Dropdown, Input, Avatar, Divider } from 'antd'
import { RiSearch2Line } from "react-icons/ri";
import { PlusCircleOutlined, LogoutOutlined  } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom'

import Logo from '../../assets/images/Logo.svg'
import Down from '../../assets/images/down.svg'
import MenuMobile from '../../assets/images/menu.svg'
import Title from '../../assets/images/title.svg'
import Plus from '../../assets/images/Plus.svg'
import Close from '../../assets/images/Close.svg'
import bookmark from '../../assets/images/navbar-bookmark.svg'
import anon from '../../assets/images/anon.png'
import './Navbar.scss'
import { useDispatch } from 'react-redux';
import { search_research, logout } from '../../redux/actions/main';

const Navbar = ({justLogo}) => {
  let history = useHistory()
  const [isClose, setIsClose] = useState(true)
  const dispatch = useDispatch()
  const handleKeyPress = (value) => {            
    dispatch(search_research(value.key))
  }
  const handleClick = (link) => {    
    if(window.localStorage.token) {
      history.push(link)
    }
  }
  const menu = (
    <Menu>      
      <Menu.Item danger onClick={() => dispatch(logout())}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="navbar-container">
        <Row>
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
              <Col xs={11} sm={16} md={12} lg={13} xl={13} className="search">
                <Row className="navbar-container-middle">
                  <Col xs={14} sm={20} md={20} lg={20} xl={20}>
                    <Form
                      name="basic"
                      onFinish={handleKeyPress}                  
                    >
                      <Form.Item name="key">
                        <Input placeholder="Find your favorite journal research" name="search" prefix={<RiSearch2Line color="#48CAE4" size="16px" />} />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col xs={10} sm={4} md={4} lg={4} xl={4}>
                    <Button 
                      type="primary" 
                      icon={<img src={bookmark} alt="btn bookmark" />} 
                      size="large" 
                      onClick={() => handleClick('/bookmark')} 
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={2} sm={2} md={7} lg={6} xl={6} className="add-research">
                <Button 
                  type="primary" 
                  shape="round" 
                  icon={<PlusCircleOutlined />} 
                  size="large" 
                  onClick={() => handleClick('/upload')}
                  style={window.localStorage.token? {flexBasis: '85%'} : {flexBasis: '100%'}}
                >
                  Add New Research
                </Button>
                {
                  window.localStorage.token && 
                  <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                    <span className="ant-dropdown-link">
                      {/* <DownOutlined style={{fontSize: '20px', color: '#0096C7'}} /> */}
                      <img src={Down} alt="" />
                    </span>
                  </Dropdown>
                }
              </Col>
            </>
          }
        </Row>      
      </div>
      <div className="navbar-container-mobile">
        <div className="row">
          <img src={MenuMobile} onClick={() => setIsClose(false)} alt="" />
          <img src={Title} className="title" alt="" />
          <Avatar
            size={{ xs: 30, sm: 30, md: 32, lg: 32, xl: 32, xxl: 30 }}
            src={anon}
          />
        </div>
        <div className="row">
          <Form
            name="basic"
            onFinish={handleKeyPress}                  
          >
            <Form.Item name="key">
              <Input placeholder="Find your favorite journal research" name="search" prefix={<RiSearch2Line color="#48CAE4" size="16px" />} />
            </Form.Item>
          </Form>
        </div>
        <div className={isClose? "sidebar" : "sidebar showing"}>
          <img src={Close} onClick={() => setIsClose(true)} alt="" />

          <div className="menu">
            <div className="menu-item" onClick={() => handleClick('/upload')}>
              <img src={Plus} alt="" />
              <p>Add New Research</p>
            </div>
            <Divider />
            <div className="menu-item" onClick={() => handleClick('/bookmark')} >
              <img src={bookmark} alt="" />
              <p>Bookmark</p>
            </div>
            <Divider />
            {
              window.localStorage.token && 
              <div className="menu-item" style={{color: 'red'}} onClick={() => dispatch(logout())}>
                <LogoutOutlined />
                <p>Logout</p>
              </div>
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
