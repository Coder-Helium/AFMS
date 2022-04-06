/* eslint-disable react/react-in-jsx-scope */
import TestPage from '../TestPage'
import TaskManagement from './TaskManagement'
import PlanFormulate from './PlanFormulate'
export const sideBar = {
  sideBarList: [
    {
      index: '1',
      name: ' 任务管理',
      url: './task/management',
      path: '/task/management',
      element: <TaskManagement/>
    },
    {
      index: '2',
      name: '计划制定',
      url: './plan/insert',
      path: '/plan/insert',
      element: <PlanFormulate/>
    },
    {
      index: '3',
      name: '计划发布',
      url: './plan/release',
      path: '/plan/release',
      element: <TestPage/>
    },
    {
      index: '4',
      name: '任务执行日志',
      url: './task/log',
      path: '/task/log',
      element: <TestPage/>
    },
    {
      index: '5',
      name: '养殖池管理',
      url: './pool/management',
      path: '/pool/management',
      element: <TestPage/>
    }
  ]
}
