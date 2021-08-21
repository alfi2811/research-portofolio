import React from 'react'
import { Avatar, Button, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom'
import { ShareAltOutlined } from '@ant-design/icons';
import { format, parseISO } from "date-fns"

import ava from '../../assets/images/profile.png'
import Calendar from '../../assets/images/Calendar.png'
import Chart from '../../assets/images/Chart.png'
import Paper from '../../assets/images/Paper.png'
import Bookmark from '../../assets/images/bookmark.png'

import './CardPost.scss'

const CardPost = ({author, title, date, id, downloader}) => {    
    let history = useHistory()    
    const changeFormat = (date) => {
      let newDate = format(parseISO(date), "MMM yyyy")
      return newDate
    }
    const detailRes = () => {      
      history.push(`/detail-research/${id}`)
    }
    const handleShare = () => {      
      const newInput = document.createElement("INPUT")
      newInput.setAttribute("type", "text")
      newInput.setAttribute("value", `${process.env.REACT_APP_BASE_URL}detail-research/${id}`)
      document.body.appendChild(newInput)

      // select the field
      newInput.select()
      newInput.setSelectionRange(0, 99999) /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy")
      newInput.remove()      
    }
    return (
        <div className="card">
            <div className="card-header">
              <div className="left">
                <Avatar
                    size={{ xs: 14, sm: 22, md: 30, lg: 54, xl: 60, xxl: 80 }}
                    src={ava}         
                />
                <div className="desc">
                    <p className="nama">{ author }</p>
                    <p className="institusi">Telkom University</p>
                </div>
              </div>
              <div className="right">
                <img src={ Bookmark } alt="" />
              </div>
            </div>
            <div className="card-text">
                <p>{title}</p>
            </div>
            <div className="card-info">
                <div>
                    <img src={Calendar} alt="" />
                    <span>{changeFormat(date)}</span>
                </div>
                <div>
                    <img src={Chart} alt="" />
                    <span>{ downloader } Reads</span>
                </div>                
            </div>                        
            <div className="card-button">
                <Button type="primary" onClick={detailRes} shape="round" icon={<img src={Paper} alt="" />} size="large">
                    View Full Text
                </Button>      
                <Tooltip title="Link Has Been Copied" placement="right" trigger="click">
                  <Button shape="round" onClick={handleShare} icon={<ShareAltOutlined fontSize="1.5vw" />} size="large">
                      Share
                  </Button>     
                </Tooltip>
            </div>
            
        </div>
    )
}

export default CardPost
