import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import ava from '../../assets/images/profile.png'
import anon from '../../assets/images/anon.png'
import './Myprofile.scss'

const Myprofile = ({ data }) => {
    return (
        <div className="myprofile-container">
            <h1 className="title">My Profile</h1>
            <div className="person">
                <Avatar
                    size={{ xs: 14, sm: 22, md: 30, lg: 54, xl: 65, xxl: 90 }}
                    src={data? ava: anon}
                />
                <div className="desc">
                    <p className="nama">{ data? data.fullname: 'Anonymous' }</p>
                    <p className="institusi">{ data? data.workStatus: 'Status' }</p>
                </div>                
            </div>
            <div className="statistik">
                <div>
                    <p className="total">{ data? data.researches: '0' }</p>
                    <p className="nama">Research</p>
                </div>
                <div>
                    <p className="total">{ data? data.fields.length: '0' }</p>
                    <p className="nama">Field</p>
                </div>
                <div>
                    <p className="total">{ data? data.readers: '0' }</p>
                    <p className="nama">Readers</p>
                </div>
            </div>
            <Link to="/profile">Go To Profile</Link>
        </div>
    )
}

export default Myprofile
