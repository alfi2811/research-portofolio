import React from 'react'
import { Upload, Button } from 'antd';
import './UploadPhoto.scss'
// import ava from '../../assets/images/profile.svg'
// import { useDispatch } from 'react-redux';
// import { upload_photo } from '../../redux/actions/main';
// import axios from 'axios';
import { useSelector } from 'react-redux';


// const UploadAction = (file) => {
//   const dispatch = useDispatch()
//   console.log(file)
//   dispatch(upload_photo(file))
// }

// const props = {
//   showUploadList: false,
//   progress: false,
//   action: (file) => {
//     let data = new FormData();
//     let token = window.localStorage.token;
//     console.log(file)        
//     data.append('photoProfile', file);
//     const config_form = {
//       headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' }
//     };
//     axios
//       .put('/user/uploadProfile', data, config_form)
//       .then((resp) => {                        
//         console.log(resp.data)                  
//       })
//       .catch((err) => {      
//           console.log(err)                 
//       });      
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

const UploadPhoto = ({handleChange}) => {
  // const dispatch = useDispatch()
  
  const main = useSelector(state => state?.main)  
  const ava = main?.url_avatar
  console.log(ava)
  // const Anjay = (file) => {
  //   console.log(file)
  //   dispatch(upload_photo(file))
  // }
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
