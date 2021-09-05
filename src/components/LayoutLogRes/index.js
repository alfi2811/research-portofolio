import React from 'react'
import { Row, Col } from 'antd';
// import person from '../../assets/images/person.png'
import iconMsg from '../../assets/images/icon-msg.png'
import iconChat from '../../assets/images/icon-chat.png'
import iconFile from '../../assets/images/icon-file.png'
import iconPen from '../../assets/images/icon-pen.png'
import './LayoutLogRes.scss'

const LayoutLogRes = ({children, person}) => {
    return (
        <Row className="layout-container">
            <Col xs={0} sm={0} md={0} lg={12} xl={12} className="left">
                <div className="person-img">
                    <img src={person} alt="orang" />
                    <img className="resp resp-1" src={iconMsg} alt="orang" />
                    <img className="resp resp-2" src={iconChat} alt="orang" />
                    <img className="resp resp-3" src={iconFile} alt="orang" />
                    <img className="resp resp-4" src={iconPen} alt="orang" />
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="right">{children}</Col>
        </Row>
    )
}

export default LayoutLogRes
