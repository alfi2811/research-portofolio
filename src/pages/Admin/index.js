import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_waiting_research, post_admin_research } from '../../redux/actions/main'
import { Row, Col, Button } from 'antd';
import Navbar from '../../components/Navbar'

import './Admin.scss'
import { useHistory } from 'react-router-dom';

const Admin = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  // const arr = [1,2,3,4,5]    
  useEffect(() => {
      dispatch(get_waiting_research())
  }, [dispatch])
  const main = useSelector(state => state?.main)
  const posts = main?.list_waiting_research
  console.log(posts)
  const detailRes = (id) => {      
    history.push(`/detail-research/${id}`)
  }
  const handleBtn = (url, id) => {      
    dispatch(post_admin_research(url, id))
  }
  return (
    <div style={{background: "#FFFFFF"}}>
      <Navbar justLogo={false} />
      <div className="admin-container">
        <div className="table">
          <div className="table-header">            
            <Row className="table-header-content">
              <Col span={16}>Research Title</Col>
              <Col span={8}>Action</Col>
            </Row>
          </div>
          <div className="table-rows">
            {
              posts && posts.map((post, key) => (
                <Row className="table-rows-item" key={key}>
                  <Col span={16}>
                    <p>{ post.articleTitle }</p>
                    <span className="detail" onClick={() => detailRes(post._id)}>Lihat Detail Research</span>
                  </Col>
                  <Col span={8}>
                    <Button type="primary" shape="round" onClick={() => handleBtn('admin/accResearch', post._id)}>
                        Approve
                    </Button>
                    <Button shape="round" onClick={() => handleBtn('admin/rejResearch', post._id)}>
                        Decline
                    </Button>                
                  </Col>
                </Row>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
