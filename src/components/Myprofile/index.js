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
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src={ava}         
                />
                <div className="desc">
                    <p className="nama">Jati H</p>
                    <p className="institusi">Telkom</p>
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
            <Link>Go To Profile</Link>
        </div>
    )
}

export default Myprofile
