/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Input, Button, Avatar } from 'antd';
import React from 'react';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import './index.scss'
const { Search } = Input;

const popoverList = [
  { name: '个人中心', path: '/home/setting/base' },
  { name: '消息通知', path: '/home/setting/notification' },
  { name: '账号设置', path: '/home/setting/account' }
]

export default React.memo(() => {
  // ToDo 搜索按钮事件响应
  const onSearch = () => {
    console.log();
  }
  // // ToDo 设置按钮事件响应
  const onSetting = () => {
    console.log();
  }

  const navigate = useNavigate();

  return (
      <div className = 'navContainer'>
        {/* @ts-ignore */}
        <a className = 'navLable' onClick={() => navigate('/home')}>AFMS</a>
        <Search className = 'navSearchBar' placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300 }} />
        <Avatar className = 'navAvatar' icon={<UserOutlined />} />
        <Button className = 'navSetting' type="primary" shape="circle" icon={<SettingOutlined />} onClick = {onSetting}/>
      </div>
  )
})
