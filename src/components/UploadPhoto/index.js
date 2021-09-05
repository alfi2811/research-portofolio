import React from 'react'
import { Upload, Button } from 'antd';
import './UploadPhoto.scss'
import { useSelector } from 'react-redux';

const UploadPhoto = ({handleChange}) => {  
  const main = useSelector(state => state?.main)  
  const ava = main?.url_avatar    
  return (
    <div className="upload-ava">
      <img src={ava} alt="" />
      <Upload maxCount={1} onChange={handleChange} beforeUpload={() => false}>
        <Button type="primary" shape="round" size="large" block>
          Upload Photo
        </Button>
      </Upload>
    </div>
  )
}

export default UploadPhoto
