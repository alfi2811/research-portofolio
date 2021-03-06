import React, { useEffect } from 'react'
import { Avatar, Tabs, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { check_login, delete_bookmark, post_create_bookmark, post_research_detail, put_download_research } from '../../redux/actions/main'
import { useHistory, useParams } from 'react-router-dom'
import { format, parseISO } from "date-fns"
import { Viewer } from '@react-pdf-viewer/core'; 
import { Worker } from '@react-pdf-viewer/core'; 

import Navbar from '../../components/Navbar'
import Bookmark from '../../assets/images/bookmark.png'
import BookmarkAct from '../../assets/images/Bookmark-Active.svg'
import Calendar from '../../assets/images/Calendar.png'
import Chart from '../../assets/images/Chart.png'
import pdf from '../../assets/images/pdf.png'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './DetailResearch.scss'


const { TabPane } = Tabs;

const DetailResearch = () => {    
    const dispatch = useDispatch()    
    let history = useHistory()
    let { id } = useParams();   

    useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(check_login(history))
      if(window.localStorage.token) {        
        dispatch(post_research_detail(id)) 
      }
    }, [dispatch, history, id])

    const main = useSelector(state => state?.main)    
    const detailRes = main?.detail_research    

    const changeFormat = (date, formatTgl) => {
      let newDate = format(parseISO(date), formatTgl)
      return newDate
    }
    const handleBookmark = async (id) => {
      if(window.localStorage.token) {
        if(detailRes?.status === "true") {
          await dispatch(delete_bookmark(id))
        } 
        else {
          await dispatch(post_create_bookmark(id))
        }
        dispatch(post_research_detail(id))
      }
    }    
    
    return (
        <div>
            <Navbar justLogo={false} />
            <div className="detailres-container">
              <div className="research-header">
                <div className="title">
                  <h1>{ detailRes?.articleTitle }</h1>
                  <img src={ detailRes?.status === "true" ? BookmarkAct : Bookmark } onClick={async () => await handleBookmark(detailRes?._id)} alt="" />
                </div>
                <div className="statistic">        
                  <div>
                    <img src={Calendar} alt="" />
                    <span>{ detailRes && changeFormat(detailRes?.publicationDate, "MMM yyyy") }</span>
                  </div>
                  <div>
                    <img src={Chart} alt="" />
                    <span>{detailRes?.downloadCount} Reads</span>
                  </div>     
                </div>
                <h2>Authors</h2>                        
                <div className="authors">        
                  <div className="author">        
                    <Avatar
                      size={{ xs: 5, sm: 15, md: 20, lg: 44, xl: 50, xxl: 90 }}
                      src={detailRes?.uploaderInfo?.photoProfile}         
                    />
                    <div className="desc">
                      <p className="nama">{ detailRes?.uploaderInfo?.fullName }</p>
                      <p className="institusi">{ detailRes?.uploaderInfo?.affiliation }</p>
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
                            <Col span={21}>{ detailRes?.articleTitle }</Col>                            
                            <Col span={3}>
                              <a 
                                target="_blank"
                                rel="noopener noreferrer" 
                                href={detailRes?.fileLink}
                                onClick={() => dispatch(put_download_research(detailRes?._id))}
                              >
                                Download
                              </a>
                            </Col>
                          </Row>                                        
                          <p>{ detailRes?.author }</p>
                        </Col>                                    
                      </Row>
                    </div>                            
                      <div className="research-fulltext">    
                        {detailRes&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                        <div 
                          style={{
                            borderRadius: '24px',
                            height: '750px',
                            width: '100%'
                          }}
                        >
                          <Viewer fileUrl={detailRes?.fileLink}/>
                        </div>
                        </Worker></>}                           
                      </div>
                  </TabPane>
                  <TabPane tab="Detail" key="2">
                    <div className="research-detail">
                      <Row>
                        <Col span={6}>Title</Col>
                        <Col span={18}>{ detailRes?.articleTitle }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>Authors</Col>
                        <Col span={18}>{ detailRes?.author }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>Publication Date</Col>
                        <Col span={18}>{ detailRes && changeFormat(detailRes?.publicationDate, "yyyy/MM/dd") }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>Journal</Col>
                        <Col span={18}>{ detailRes?.journalTitle }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>Volume</Col>
                        <Col span={18}>{ detailRes?.volume }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>No / Issues</Col>
                        <Col span={18}>{ detailRes?.issue }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>Pages</Col>
                        <Col span={18}>{ detailRes?.pages }</Col>
                      </Row>
                      <Row>
                        <Col span={6}>Description</Col>
                        <Col span={18}>{ detailRes?.description }</Col>
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
