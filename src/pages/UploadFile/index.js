import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
// import DragnDrop from '../../components/DragnDrop'
import { Form, Input, Button, Upload, DatePicker, Checkbox, message  } from 'antd';
import { FiUpload } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { check_login, post_research } from '../../redux/actions/main';
import { useHistory } from 'react-router-dom';

import UploadIco from '../../assets/images/Upload.svg'
import PaperPlus from '../../assets/images/PaperPlus.svg'
import './UploadFile.scss'

const normFile = (e) => {  
  if (Array.isArray(e)) {    
    return e;
  }
  let newA = []
  newA.push(e.fileList[e.fileList.length - 1])

  return e && newA;
};

const UploadFile = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm();    
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.        

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(check_login(history))
    forceUpdate({});
  }, [dispatch, history]);    
  const onFinish = (values) => {                
    dispatch(post_research(values, history))
  };
  const handleType = (file) => {        
    if (file.type !== 'application/pdf') {
      message.error(`${file.name} is not a pdf file`);
    }
    return file.type === 'application/pdf' ? false : Upload.LIST_IGNORE;
  };

  return (
    <div>
      <Navbar justLogo={true} />
      <div className="upload-container">
        <div className="upload-form">            
          <h1 className="title">Upload File</h1>
          <Form
            form={form}
            layout="vertical"                    
            onFinish={onFinish}
          >                    
            <Form.Item>
              <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                <Upload.Dragger name="files" beforeUpload={(file) => handleType(file)} maxCount={1} >
                  <p className="ant-upload-drag-icon">                                
                    <img src={UploadIco} alt="icon upload" />
                  </p>
                  <p className="ant-upload-text">Drag and Drop your files here (*.pdf)</p>                              
                  <p className="ant-upload-text gray">OR</p>   
                  <Button
                    shape="round"                                
                    type="primary"                                
                    icon={<img src={PaperPlus} alt="icon" />}                                  
                  >
                    Browse Files
                  </Button>                           
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>               
            <Form.Item 
              label="Title" 
              name="title"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your Title!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Authors" 
              name="authors" 
              initialValue={window.localStorage.name_user} 
            >
              <Input disabled />
            </Form.Item>
            <Form.Item 
              label="Publication Date" 
              name="publicationDate"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your Publication Date!',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item 
              label="Journal" 
              name="journal"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your Journal!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Volume" 
              name="volume"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your Volume!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="No / Issue" 
              name="no"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your No / Issue!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Pages" 
              name="pages"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your Pages!',
                },
              ]}
            >
              <Input />
            </Form.Item>    
            <Form.Item 
              name="desc" 
              label="Description"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your Description!',
                },
              ]}
            >
              <Input.TextArea rows={6} />
            </Form.Item>                    
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Checkbox>
                I have reviewed and verified each file I am uploading. I have the right to share each
                file publicy and/or store a private copy accessible to me and the co-authors, 
                as applicable. By uploading this file, I agree to the Upload Conditions.
              </Checkbox>
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  shape="round" 
                  size="large" 
                  type="primary"
                  htmlType="submit"
                  icon={<FiUpload fontSize="20px" />}
                  className="upload-btn"
                >
                  Upload File
                </Button>                      
              )}                      
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UploadFile
