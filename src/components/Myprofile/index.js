import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar } from 'antd'
// import ava from '../../assets/images/profile.png'
import anon from '../../assets/images/anon.png'
import './Myprofile.scss'

const Myprofile = ({ data }) => {
  let history = useHistory()
  const handleClick = () => {    
    if(window.localStorage.token) {
      history.push(`/profile/${window.localStorage.id_user}`)
    }
  }
  return (
    <div className="myprofile-container">
      <h1 className="title">My Profile</h1>
      <div className="person">
        <Avatar
            size={{ xs: 14, sm: 22, md: 30, lg: 54, xl: 65, xxl: 90 }}
            src={data?.photoProfile? data?.photoProfile: anon}
        />
        <div className="desc">
            <p className="nama">{ data? data.fullname: 'Anonymous' }</p>
            <p className="institusi" >
              { data?.role && data?.role+' at '} {data? data?.affiliation: 'Status' }
            </p>
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
      <p className="link" onClick={handleClick}>Go To Profile</p>
    </div>
  )
}

export default Myprofile
