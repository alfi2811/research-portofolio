import React, { useEffect } from 'react'
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { check_login, post_data } from '../../redux/actions/main'
import { Link, useHistory } from 'react-router-dom'

import CardPost from '../../components/CardPost';
import Navbar from '../../components/Navbar'
import ava from '../../assets/images/profile.svg'
import './Profile.scss'

const Profile = () => {
    const dispatch = useDispatch()
    // const arr = [1,2,3,4,5]
    let history = useHistory()
    useEffect(() => {
      dispatch(check_login(history))      
      dispatch(post_data("/user/viewUser", "profile_data"))
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
                    <img src={ava} alt="" />
                    <Link to="/edit-user">
                      <Button type="primary" shape="round" size="large" block>
                        Edit Your Profile
                      </Button>
                    </Link>
                </div>
                <div className="right">
                    <div className="detail">
                        <h2>{ data?.fullname }</h2>
                        <h3>{ data?.workStatus }</h3>
                        <div className="fields">
                            <p>requirements engineering</p>
                            <p>game development</p>
                            <p>software engineering</p>
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
            <div className="card-post">
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
          </div>
        </div>
    )
}

export default Profile
