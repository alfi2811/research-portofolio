import React from 'react'
import { Button } from 'antd';
import imgPerson from '../../assets/images/jumbtron-img.png'
import './Jumbtron.scss'
import { useHistory } from 'react-router-dom';


const Jumbtron = () => {
  let history = useHistory()
  const handleClick = () => {    
    if(window.localStorage.token) {
      history.push('/upload')
    }
  }
  return (
    <div className="jumbotron-container">
      <h1 className="title">Hello there!</h1>
      <h2 className="desc">Millions of researchs uploaded here</h2>
      <p className="text">
          Find out the journals that could be best suited for publishing your research. Match your manuscript using the ReZearch tool, then learn more about each journal.
      </p>
      <Button className="button-blue" shape="round" size="large" onClick={handleClick}>
          Upload Research
      </Button>
      <div className="illustration">
          <img src={imgPerson} alt="" />
      </div>
    </div>
  )
}

export default Jumbtron
