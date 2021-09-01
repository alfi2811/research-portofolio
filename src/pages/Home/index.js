import React, { useEffect } from 'react'
import { Col, Row, BackTop, Button } from 'antd'
import { UpOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { post_data, get_research, toggle_popup } from '../../redux/actions/main'

import CardPost from '../../components/CardPost'
import Filter from '../../components/Filter'
import Jumbtron from '../../components/Jumbtron'
import Myprofile from '../../components/Myprofile'
import Navbar from '../../components/Navbar'

import './Home.scss'

const Home = () => {
    const dispatch = useDispatch()        
    // const arr = [1,2,3,4,5]
    // let history = useHistory()
    let token = window.localStorage.token
    useEffect(() => {
        dispatch(get_research())
        if(token) {
          dispatch(post_data("/user/viewUser", "profile_data"))
        }
        // dispatch(check_login(history))
    }, [dispatch, token])
    const main = useSelector(state => state?.main)
    const posts = main?.list_research
    const profile = main?.profile_data.dataUser
    const handleClick = () => {
      if(!window.localStorage.token) {
        dispatch(toggle_popup("modal_alert", true, false, false))
      }
    }

    return (
        <div style={{position: 'relative'}} onClick={handleClick}>
          <Navbar justLogo="false" />
          <Row className="home-container">
            <Col xs={0} sm={0} md={0} lg={5} xl={5} className="filter">
                <Filter researches={posts} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={13} xl={13} className="content">
              <Jumbtron />              
              {
                posts &&
                <div className="list-post animate__animated animate__fadeInUp">
                  {
                    posts && posts.map((post) => (
                      <CardPost                       
                        key={post._id}
                        post={post}                        
                        isUserRes={window.localStorage.id_user===post.uploaderID?true:false}
                      />
                    ))
                  }
                </div>
              }
            </Col>
            <Col xs={0} sm={0} md={0} lg={6} xl={6} className="profile">
              <Myprofile data={profile} />
            </Col>
          </Row>
          <BackTop>            
            <Button type="primary" shape="circle" icon={<UpOutlined />} size="large" />
          </BackTop>
        </div>
    )
}

export default Home
