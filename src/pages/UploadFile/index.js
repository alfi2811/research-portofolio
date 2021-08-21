import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
// import DragnDrop from '../../components/DragnDrop'
import './UploadFile.scss'
import { Form, Input, Button, Upload, DatePicker } from 'antd';
import { FiUpload } from "react-icons/fi";
import { UploadOutlined  } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { post_research } from '../../redux/actions/main';
import { useHistory } from 'react-router-dom';
const normFile = (e) => {
  console.log('Upload event:', e.file);
  console.log('Upload event:', e.fileList);
  console.log('Upload event:', e);
  
  if (Array.isArray(e)) {
    console.log("masuk IF")
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
    // const requiredMark = 'optional';
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.        

    useEffect(() => {
        forceUpdate({});
    }, []);
    const onFinish = (values) => {        
        console.log('Received values of form: ', values);         
        dispatch(post_research(values, history))
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
                    {/* <DragnDrop />   */}
                    <Form.Item>
                        <Form.Item name="dragger" multiple={false} valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                          <Upload.Dragger name="files" beforeUpload={() => false} multiple="false" >
                              <p className="ant-upload-drag-icon">
                                <UploadOutlined />
                              </p>
                              <p className="ant-upload-text">Drag and Drop your files here (*.pdf)</p>                              
                          </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>               
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Authors" name="authors">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Publication Date" name="publicationDate">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Journal" name="journal">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Volume" name="volume">
                        <Input />
                    </Form.Item>
                    <Form.Item label="No / Issue" name="no">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Pages" name="pages">
                        <Input />
                    </Form.Item>    
                    <Form.Item name="desc" label="Description">
                        <Input.TextArea rows={6} />
                    </Form.Item>
                    
                    <Form.Item shouldUpdate>
                        {() => (
                        <Button
                            shape="round" 
                            size="large" 
                            type="primary"
                            htmlType="submit"
                            icon={<FiUpload fontSize="3vmin" />}
                            disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }                                
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
