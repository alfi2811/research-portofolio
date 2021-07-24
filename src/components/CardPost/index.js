import { Avatar, Button } from 'antd';
import React from 'react'
import { ShareAltOutlined } from '@ant-design/icons';
import ava from '../../assets/images/profile.png'
import Calendar from '../../assets/images/Calendar.png'
import Chart from '../../assets/images/Chart.png'
import Paper from '../../assets/images/Paper.png'
import './CardPost.scss'

const CardPost = () => {
    return (
        <div className="card">
            <div className="card-header">
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70, xxl: 100 }}
                    src={ava}         
                />
                <div className="desc">
                    <p className="nama">Jati H</p>
                    <p className="institusi">Telkom</p>
                </div>  
            </div>
            <div className="card-text">
                <p>Improving GQM+Strategies with Balanced Scorecard's Perspectives: A Feasibility Studies</p>
            </div>
            <div className="card-info">
                <div>
                    <img src={Calendar} alt="" />
                    <span>Jan 2018</span>
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
