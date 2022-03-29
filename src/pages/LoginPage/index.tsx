/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import { Form, Input, Space, Button } from 'antd'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.scss'
export default () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    console.log('999')
    navigate('/home')
    console.log(history)
  }
  return (
        <div className = "loginContainer">
            <div className = "cardContainer">
                <div className = "formBox">
                    <Form className = "loginBox">
                        <h1>LOGIN</h1>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size="large" prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item
                            label="PassWord"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick = {handleLoginClick}>
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className = "registerBox hidden">
                        <Space direction = "vertical">
                            <label>User</label>
                            <Input size="large" prefix={<UserOutlined />} />
                            <label>PassWord</label>
                            <Input.Password
                                placeholder="input password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                    </div>
                </div>
                <div className = "con-box login">
                    <Button type="primary" >TO LOGIN</Button>
                </div>
                <div className = "con-box register">
                    <label style={{ fontSize: 30 }}>Welcome to AFMS</label>
                    <label style={{ fontSize: 15 }}>If you don't have an account</label>
                    <label style={{ fontSize: 15, marginBottom: 60 }}>Please click the button below</label>
                    <Button type='primary'>TO REGISTER</Button>
                </div>
            </div>
        </div>
  )
}
