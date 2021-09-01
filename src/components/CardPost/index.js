import React from 'react'
import { Avatar, Button, Tooltip, Modal } from 'antd';
import { useHistory } from 'react-router-dom'
import { ShareAltOutlined, DeleteOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import { format, parseISO } from "date-fns"

// import ava from '../../assets/images/profile.png'
import Calendar from '../../assets/images/Calendar.png'
import Chart from '../../assets/images/Chart.png'
import Paper from '../../assets/images/Paper.png'
import Bookmark from '../../assets/images/bookmark.png'
import BookmarkAct from '../../assets/images/Bookmark-Active.svg'

import './CardPost.scss'
import { useDispatch } from 'react-redux';
import { delete_research, post_create_bookmark, delete_bookmark } from '../../redux/actions/main';

const { confirm } = Modal;

const CardPost = ({ post, isUserRes }) => {
  let history = useHistory()    
  const dispatch = useDispatch()
  const changeFormat = (date) => {
    let newDate = format(parseISO(date), "MMM yyyy")
    return newDate
  }
  const detailRes = () => {      
    history.push(`/detail-research/${post._id}`)
  }
  const showConfirm = () => {
    confirm({
      title: 'Do you want to delete this research?',
      icon: <ExclamationCircleOutlined />,
      content: "Make sure you want to delete this. because after deleting, can't be canceled",
      centered: true,
      onOk() {
        dispatch(delete_research(post._id))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const handleBookmark = (id) => {
    if(window.localStorage.token) {
      if(post.status === "true") {
        dispatch(delete_bookmark(id))
      } 
      else {
        dispatch(post_create_bookmark(id))
      }
    }
  }
  const handleShare = () => {      
    const newInput = document.createElement("INPUT")
    newInput.setAttribute("type", "text")
    newInput.setAttribute("value", `${process.env.REACT_APP_BASE_URL}detail-research/${post._id}`)
    document.body.appendChild(newInput)

    // select the field
    newInput.select()
    newInput.setSelectionRange(0, 99999) /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy")
    newInput.remove()      
  }
  console.log(isUserRes)
  return (
      <div className="card">
          <div className="card-header">
            <div className="left">
              <Avatar
                  size={{ xs: 34, sm: 50, md: 50, lg: 54, xl: 60, xxl: 80 }}
                  src={ post.uploaderInfo.photoProfile }         
              />
              <div className="desc">
                  <p className="nama">{ post.uploaderInfo.fullName }</p>
                  <p className="institusi">{ post.uploaderInfo.affiliation }</p>
              </div>
            </div>
            <div className="right">
              <img src={ post.status === "true" ? BookmarkAct : Bookmark } onClick={() => handleBookmark(post._id)} alt="" />              
            </div>
          </div>
          <div className="card-text">
              <p>{ post.articleTitle }</p>
          </div>
          <div className="card-info">
              <div>
                  <img src={Calendar} alt="" />
                  <span>{changeFormat(post.publicationDate)}</span>
              </div>
              <div>
                  <img src={Chart} alt="" />
                  <span>{ post.downloadCount } Reads</span>
              </div>                
          </div>                        
          <div className="card-button">
            <div className="card-button-left">
              <Button type="primary" onClick={detailRes} shape="round" icon={<img src={Paper} alt="" />} size="large">
                  View Full Text
              </Button>      
              <Tooltip title="Link Has Been Copied" placement="right" trigger="click">
                <Button shape="round" onClick={handleShare} icon={<ShareAltOutlined fontSize="1.5vw" />} size="large">
                    Share
                </Button>     
              </Tooltip>
            </div>              
            <div className="card-button-right">
              {
                isUserRes === true && 
                <Button onClick={showConfirm} shape="round" icon={<DeleteOutlined fontSize="16px" />} size="large" danger>
                    Delete
                </Button>
              }      
            </div>
          </div>
          
      </div>
  )
}

export default CardPost
