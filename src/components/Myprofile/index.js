import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import ava from '../../assets/images/profile.png'
import './Myprofile.scss'

const Myprofile = () => {
    return (
        <div className="myprofile-container">
            <h1 className="title">My Profile</h1>
            <div className="person">
                <Avatar
                    size={{ xs: 14, sm: 22, md: 30, lg: 54, xl: 65, xxl: 90 }}
                    src={ava}         
                />
                <div className="desc">
                    <p className="nama">Jati H. Husein</p>
                    <p className="institusi">Telkom University</p>
                </div>                
            </div>
            <div className="statistik">
                <div>
                    <p className="total">21</p>
                    <p className="nama">Research</p>
                </div>
                <div>
                    <p className="total">21</p>
                    <p className="nama">Research</p>
                </div>
                <div>
                    <p className="total">21</p>
                    <p className="nama">Research</p>
                </div>
            </div>
            <Link to="/profile">Go To Profile</Link>
        </div>
    )
}

export default Myprofile
