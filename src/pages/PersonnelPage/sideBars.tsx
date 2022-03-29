/* eslint-disable react/react-in-jsx-scope */
import ClientManagement from './ClientManagement'
import ClientInsert from './ClientInsert'
import UserInsert from './UserInsert'
import UserManagement from './UserManagement'
export const sideBar = {
  sideBarList: [
    {
      index: '1',
      name: ' 客户管理',
      url: './client',
      path: '/client',
      element: <ClientManagement/>
    },
    {
      index: '2',
      name: '添加客户',
      url: './client/insert',
      path: '/client/insert',
      element: <ClientInsert/>
    },
    {
      index: '3',
      name: '员工管理',
      url: './user',
      path: '/user',
      element: <UserManagement/>
    },
    {
      index: '4',
      name: '添加员工',
      url: './user/insert',
      path: '/user/insert',
      element: <UserInsert/>
    }
  ]
}
