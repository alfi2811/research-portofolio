import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post_data, check_login } from '../../redux/actions/main'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'

import './Bookmark.scss'
import CardPost from '../../components/CardPost'

const Bookmark = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    dispatch(check_login(history))
    if(window.localStorage.token) {      
      dispatch(post_data("/user/getAllBookmark", "bookmarks_data"))
    }
  }, [dispatch, history])
  const main = useSelector(state => state?.main)  
  const bookmarks = main?.bookmarks_data?.bookmarked  

  return (
    <div>
      <Navbar justLogo={false} />
      <div className="bookmark-container">
        <h1 className="title">Saved Research</h1>
        <div className="card-post">
            {
              bookmarks && bookmarks?.map((post) => (
                <CardPost 
                  key={post._id}
                  post={post}
                  isUserRes={window.localStorage.id_user===post.uploaderID?true:false}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Bookmark
