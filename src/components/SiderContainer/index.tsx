/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Layout, Menu, Button } from 'antd';
import { useState } from 'react';
import './index.scss'
import { ISideBar } from '../../services/APIModel/sideBar';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
export default (props: ISideBar) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => setCollapsed(!collapsed)
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { sideBarList } = props;
  const handleMenuClick = (prop: any) => {
    console.log(prop);
    navigate(prop.url);
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {sideBarList.map((item) => {
        if (item.subSideBar === undefined) {
          return (
            <Menu.Item key={item.index} onClick={() => handleMenuClick(item)}>
              {item.name}
            </Menu.Item>
          )
        }
        return (
          <SubMenu key={item.index} title={item.name}>
            {item.subSideBar?.map((subItem) => {
              return (
                <Menu.Item key={subItem.index} onClick={() => handleMenuClick(subItem)}>
                  {subItem.name}
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      })}
      </Menu>
    </Sider>
    <Content>
      <Routes>
        {sideBarList.map((routeItem, i) => (
          <Route key ={i} path={routeItem.path} element={routeItem.element}/>
        ))}
      </Routes>
    </Content>
  </Layout>
  )
}
