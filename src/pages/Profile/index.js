import React, { useEffect } from 'react'
import { Button, BackTop, Avatar } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { check_login, post_data } from '../../redux/actions/main'
import { Link, useHistory } from 'react-router-dom'

import CardPost from '../../components/CardPost';
import Navbar from '../../components/Navbar'
import './Profile.scss'

const Profile = () => {
    const dispatch = useDispatch()
    // const arr = [1,2,3,4,5]
    let history = useHistory()
    useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(check_login(history))
      if(window.localStorage.token) {
        dispatch(post_data("/user/viewUser", "profile_data"))
      }
    }, [dispatch, history])

    const main = useSelector(state => state?.main)
    const posts = main?.profile_data.userResearch
    const data = main?.profile_data.dataUser

    return (
      <div>
        <Navbar justLogo={false} />
        <div className="profile-container">
          <div className="info">                    
            <div className="left">
                {/* <img src={data?.photoProfile} alt="" /> */}
                <Avatar shape="square" src={data?.photoProfile} />
                <Link to="/edit-user">
                  <Button type="primary" shape="round" size="large" block>
                    Edit Your Profile
                  </Button>
                </Link>
            </div>
            <div className="right">
              <div className="detail">
                <h2>{ data?.fullname }</h2>
                <h3>{ data?.role } at { data?.affiliation }</h3>
                <div className="fields">
                  {
                    data && data?.fields.map((dt, key) => (
                      <p key={key}>{ dt }</p>
                    ))
                  }
                </div>
              </div>
              <div className="numbers">
                <div className="numbers-info">
                    <p>{data?.researches}</p>
                    <p>Researches</p>
                </div>
                <div className="numbers-info">
                    <p>{data?.readers}</p>
                    <p>Readers</p>
                </div>
                <div className="numbers-info">
                    <p>{data?.fields?.length}</p>
                    <p>Fields</p>
                </div>
                <div className="numbers-info">
                    <p>{ data?.bookmarksLength }</p>
                    <p>Bookmarks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-post animate__animated animate__fadeInUp animate__delay-2s">
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
        </div>
        <BackTop>
          <Button type="primary" shape="circle" icon={<UpOutlined />} size="large" />
        </BackTop>
      </div>
    )
}

export default Profile
