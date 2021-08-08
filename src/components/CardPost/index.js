import { Avatar, Button } from 'antd';
import React from 'react'
import { ShareAltOutlined } from '@ant-design/icons';
import ava from '../../assets/images/profile.png'
import Calendar from '../../assets/images/Calendar.png'
import Chart from '../../assets/images/Chart.png'
import Paper from '../../assets/images/Paper.png'
import { format, parseISO } from "date-fns"
import './CardPost.scss'

const CardPost = ({author, title, date, id}) => {
    const changeFormat = (date) => {
		let newDate = format(parseISO(date), "MMM yyyy")
		return newDate
	}
    return (
        <div className="card">
            <div className="card-header">
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70, xxl: 100 }}
                    src={ava}         
                />
                <div className="desc">
                    <p className="nama">{author}</p>
                    <p className="institusi">Telkom</p>
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
                    <span>45 Reads</span>
                </div>                
            </div>                        
            <div className="card-button">
                <Button type="primary" shape="round" icon={<img src={Paper} alt="" />} size="large">
                    View Full Text
                </Button>      
                <Button shape="round" icon={<ShareAltOutlined fontSize="1.5vw" />} size="large">
                    Share
                </Button>      
            </div>
            
        </div>
    )
}

export default CardPost
