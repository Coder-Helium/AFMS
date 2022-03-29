/* eslint-disable react/react-in-jsx-scope */
import FeedPage from './Feeds'
import MedicinePage from './Medicine'
import ToolsPage from './Tools'
import WarehousePage from './Warehouse'
export const sideBar = {
  sideBarList: [
    {
      index: '1',
      name: ' 仓库管理',
      url: './warehouse',
      path: '/warehouse',
      element: <WarehousePage/>
    },
    {
      index: '2',
      name: '工具管理',
      url: './tool',
      path: '/tool',
      element: <ToolsPage/>
    },
    {
      index: '3',
      name: '饲料管理',
      url: './feed',
      path: '/feed',
      element: <FeedPage/>
    },
    {
      index: '4',
      name: '药品管理',
      url: './medicine',
      path: '/medicine',
      element: <MedicinePage/>
    }
  ]
}
