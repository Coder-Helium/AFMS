/* eslint-disable react/react-in-jsx-scope */
import LogPage from './LogPage'
import LedgerPage from './LedgerPage'
export const sideBar = {
  sideBarList: [
    {
      index: '1',
      name: ' 财务管理',
      url: './fund',
      path: '/fund',
      element: <LedgerPage/>
    },
    {
      index: '2',
      name: '日志管理',
      url: './log',
      path: '/log',
      element: <LogPage/>
    }
  ]
}
