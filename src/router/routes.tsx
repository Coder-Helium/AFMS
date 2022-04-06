/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProcessPage from '../pages/ProcessPage'
import StorehousePage from '../pages/StorehousePage'
import PersonnelPage from '../pages/PersonnelPage'
import Others from '../pages/OtherPages'
import LedgerPage from '../pages/OtherPages/LedgerPage'
import LogePage from '../pages/OtherPages/LogPage'
import TestPage from '../pages/TestPage'
export const routes = [
  {
    path: '/login',
    component: <LoginPage/>
  },
  {
    path: '/home',
    component: <HomePage/>
  },
  {
    path: '/process',
    component: <ProcessPage />,
    routes: [
      {
        path: '/process/task/management',
        component: <TestPage/>
      },
      {
        path: '/process/plan/insert',
        component: <TestPage/>
      },
      {
        path: '/process/plan/release',
        component: <TestPage/>
      },
      {
        path: '/process/task/log',
        component: <TestPage/>
      },
      {
        path: '/process/pool/management',
        component: <TestPage/>
      }
    ]
  },
  {
    path: '/personnel',
    component: <PersonnelPage/>,
    routes: [
      {
        path: '/personnel/client',
        component: <TestPage/>
      },
      {
        path: '/personnel/client/insert',
        component: <TestPage/>
      },
      {
        path: '/personnel/user',
        component: <TestPage/>
      },
      {
        path: '/personnel/user/insert',
        component: <TestPage/>
      }
    ]
  },
  {
    path: '/item',
    component: <StorehousePage/>,
    routes: [
      {
        path: '/item/tool',
        component: <TestPage/>
      },
      {
        path: '/item/feed',
        component: <TestPage/>
      },
      {
        path: '/item/medicine',
        component: <TestPage/>
      },
      {
        path: '/item/warehouse',
        component: <TestPage/>
      }
    ]
  },
  {
    path: '/others',
    component: <Others />,
    routes: [
      {
        path: '/others/fund',
        component: LedgerPage
      },
      {
        path: '/others/log',
        component: LogePage
      }
    ]
  }
];
