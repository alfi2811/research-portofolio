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
            <Col span={5} className="filter">
                <Filter researches={posts} />
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
                              downloader={post.downloadCount}
                              id={post._id}                                                                        
                          />
                      ))
                  }
              </div>
            </Col>
            <Col span={6} className="profile">
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
