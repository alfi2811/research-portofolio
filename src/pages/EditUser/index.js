import { Col, Row, Form, Input, Button, Select } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ava from '../../assets/images/profile.svg'
import './EditUser.scss'
import { useDispatch, useSelector } from 'react-redux';
import { post_data } from '../../redux/actions/main';

const { Option } = Select;

const EditUser = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
    // const requiredMark = 'optional';
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.        

  useEffect(() => {
      forceUpdate({});
      dispatch(post_data("/user/viewUser", "profile_data"))      
  }, [dispatch]);
  const onFinish = (values) => {        
      console.log('Received values of form: ', values);      
  };
  const main = useSelector(state => state?.main)  
  const data = main?.profile_data.dataUser
  
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
            <Row>
              <Col span={8} className="change-ava">
                <img src={ava} alt="" />
                <Button type="primary" shape="round" size="large" block>
                  Edit Your Profile
                </Button>
              </Col>
              <Col span={14} className="change-form">
                <Form.Item label="Fullname" name="fullname" initialValue={data.fullname}>
                    <Input />
                </Form.Item>
                <Form.Item label="Position" name="position" initialValue={data.fullname}>
                    <Input />
                </Form.Item>
                <Form.Item label="Affiliation" name="affiliation">
                    <Input />
                </Form.Item>
                <Form.Item label="Field of Interest" name="interest">
                    <Input />
                </Form.Item>
                <Form.Item
                  name="fields"
                  label="Fields of Interest"
                  initialValue={['Requirement Engineering']}                  
                >
                  <Select mode="multiple" defaultValue={['Requirement Engineering']} placeholder="Please select favourite colors">
                    <Option value="Requirement Engineering">Requirement Engineering</Option>
                    <Option value="Game Development">Game Development</Option>
                    <Option value="Software Engineering">Software Engineering</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input />
                </Form.Item>
              </Col>
            </Row>            
            <Form.Item shouldUpdate>
              {() => (
              <Button
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
