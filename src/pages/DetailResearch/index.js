import React, { useState } from 'react'
import { Avatar, Tabs, Row, Col } from 'antd'


import Navbar from '../../components/Navbar'

import ava from '../../assets/images/profile.png'
import Bookmark from '../../assets/images/bookmark.png'
import Calendar from '../../assets/images/Calendar.png'
import Chart from '../../assets/images/Chart.png'
import pdf from '../../assets/images/pdf.png'

import './DetailResearch.scss'

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
// import testPdf from 'https://arxiv.org/pdf/quant-ph/0410100.pdf'

const { TabPane } = Tabs;

const DetailResearch = () => {    

    const [defaultPdfFile] = useState("https://arxiv.org/pdf/quant-ph/0410100.pdf")
    
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <Navbar justLogo={false} />
            <div className="detailres-container">
                <div className="research-header">
                    <div className="title">
                        <h1>Safety Requirements Analysis using Misuse Cases Method</h1>
                        <img src={Bookmark} alt="" />
                    </div>
                    <div className="statistic">        
                        <div>
                            <img src={Calendar} alt="" />
                            <span>Jan 2018</span>
                        </div>
                        <div>
                            <img src={Chart} alt="" />
                            <span>45 Reads</span>
                        </div>     
                    </div>
                    <h2>Authors</h2>                        
                    <div className="authors">        
                        <div className="author">        
                            <Avatar
                                size={{ xs: 5, sm: 15, md: 20, lg: 44, xl: 50, xxl: 90 }}
                                src={ava}         
                            />
                            <div className="desc">
                                <p className="nama">Jati H</p>
                                <p className="institusi">Telkom</p>
                            </div>
                        </div>
                        <div className="author">        
                            <Avatar
                                size={{ xs: 5, sm: 15, md: 20, lg: 44, xl: 50, xxl: 90 }}
                                src={ava}         
                            />
                            <div className="desc">
                                <p className="nama">Jati H</p>
                                <p className="institusi">Telkom</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="research-tab">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Full Text" key="1">
                            <div className="research-pdf">
                                <h2>File Attachment</h2>
                                <Row style={{alignItems:"center"}}>
                                    <Col span={2}> <img src={pdf} alt="" /> </Col>
                                    <Col span={22}>                                        
                                        <Row className="title">
                                            <Col span={18}>Safety Requirements Analysis using Misuse Cases Method</Col>
                                            <Col span={3}>7.4 MB</Col>
                                            <Col span={3}>
                                                <a href="https://github.com/">Download</a>
                                            </Col>
                                        </Row>                                        
                                        <p>Jati Husein</p>
                                    </Col>                                    
                                </Row>
                            </div>                            
                                <div className="research-fulltext">    
                                {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                                    <div style={{
                                            borderRadius: '24px',
                                            height: '750px',
                                            width: '100%'
                                        }}>
                                    <Viewer fileUrl={defaultPdfFile}
                                         />
                                    </div>
                                </Worker></>}                           
                                </div>
                        </TabPane>
                        <TabPane tab="Detail" key="2">
                            <div className="research-detail">
                                <Row>
                                    <Col span={6}>Title</Col>
                                    <Col span={18}>Safety Requirements Analysis using Misuse Cases Method</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>Authors</Col>
                                    <Col span={18}>Ryo Alif Ramadhan, Dana Sulistyo, Jati Hiliamsyah Husen</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>Publication Date</Col>
                                    <Col span={18}>2021/6/17</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>Journal</Col>
                                    <Col span={18}>International Journal on Information and Communication Technologu (IJoICT)</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>Volume</Col>
                                    <Col span={18}>7</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>No / Issues</Col>
                                    <Col span={18}>7</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>Pages</Col>
                                    <Col span={18}>7</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>Description</Col>
                                    <Col span={18}>Safety requirements analysis is an activity inside software requirements engineering that focuses on finding and solving safety gaps inside a software product. One method to do safety requirements analysis is misuse cases, a technique adopted from the security analysis method. Misuse cases provide a safety analysis approach which allows detailed steps from different stakeholders' perspective. In this research, we evaluate the misuse cases method's understandability by implementing it to analyze safety requirements for an electric car's autopilot system. We assessed the developed models using the walkthrough method. We found differences between how the model understood from someone with experience in software development and those who don't.</Col>
                                </Row>
                            </div>
                        </TabPane>                        
                    </Tabs>
                </div>
                
            </div>
        </div>
    )
}

export default DetailResearch
