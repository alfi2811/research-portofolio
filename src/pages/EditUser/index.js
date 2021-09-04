import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Input, Button, Select, Upload, Avatar, message } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './EditUser.scss'
import { useDispatch, useSelector } from 'react-redux';
import { post_data, check_login, post_edit_user, upload_photo, put_data } from '../../redux/actions/main';
// import UploadPhoto from '../../components/UploadPhoto';

const { Option } = Select;

const EditUser = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const [fileList, setfileList] = useState(false)
  let history = useHistory()
    // const requiredMark = 'optional';
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.        

  useEffect(() => {
    forceUpdate({});
    dispatch(check_login(history))
    if(window.localStorage.token) {      
      dispatch(post_data("/user/getUser", "user_data"))      
    }
  }, [dispatch, history]);
  const handleChange = (info) => {        
    console.log('file: ', info);          
    setfileList(info.file)
  };
  const handleType = (file) => {        
    if (file.type !== 'image/png') {
      message.error(`${file.name} is not a pdf file`);
    }
    return file.type === 'image/png' ? false : Upload.LIST_IGNORE;
  };
  const onFinish = (values) => {        
    console.log('Received values of form: ', values);      
    if(fileList) {
      dispatch(upload_photo(fileList, values, history))
    } 
    else {
      dispatch(post_edit_user(values, history))    
    }
    dispatch(put_data('user_data', false))
  };
  const main = useSelector(state => state?.main)
  const data = main?.user_data?.result
  console.log(data)
  return (
    <div className="edit-container">
      <Link to="/profile">
        <div className="back-btn">
          <LeftOutlined /> 
          <span style={{marginLeft: '2vw'}}>Kembali ke Halaman Profil</span>
        </div>
      </Link>
      <div className="form-edit">
        {
          data && 
          <Form
            form={form}
            layout="vertical"                    
            onFinish={onFinish}
            >
            <Row justify="space-between" align="top">
              <Col span={8} className="upload-ava">
                {/* <UploadPhoto handleChange={(file) => handleChange(file)} /> */}                
                <Avatar shape="square" src={data?.photoProfile} />
                <Upload maxCount={1} onChange={handleChange} beforeUpload={(file) => handleType(file)} >
                  <Button type="primary" shape="round" size="large" block>
                    Upload Photo
                  </Button>
                </Upload>
              </Col>
              <Col span={14} className="change-form">
                <Form.Item name="id" initialValue={data?._id} hidden={true}>
                    <Input />
                </Form.Item>
                <Form.Item label="Fullname" name="fullname" initialValue={data?.fullName}>
                    <Input />
                </Form.Item>
                <Form.Item label="Position" name="role" initialValue={data?.role}>
                    <Input />
                </Form.Item>
                <Form.Item label="Affiliation" name="affiliation" initialValue={data?.affiliation}>
                    <Input />
                </Form.Item>                
                <Form.Item
                  name="field"
                  label="Fields of Interest"
                  initialValue={data?.fields}
                >
                  <Select mode="multiple" placeholder="Please select favourite colors">
                    <Option value="Requirement Engineering">Requirement Engineering</Option>
                    <Option value="Game Development">Game Development</Option>
                    <Option value="Software Engineering">Software Engineering</Option>
                    <Option value="Math">Math</Option>
                    <Option value="Science">Science</Option>
                    <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                    <Option value="Machine Learning">Machine Learning</Option>
                    <Option value="UI/UX">UI/UX</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Email" name="email" initialValue={data?.email}>
                    <Input />
                </Form.Item>
                <Form.Item 
                  label="Password" 
                  name="password" 
                  tooltip="Please enter your current password or new password"
                  required={false}                  
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    }
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>            
            <Form.Item shouldUpdate>
              {() => (
              <Button
                className="btn-save"
                shape="round" 
                size="large" 
                type="primary"
                htmlType="submit"                  
                block
              >
                  Save Changes
              </Button>
              )}
          </Form.Item> 
          </Form>
        }
      </div>
    </div>
  )
}

export default EditUser
