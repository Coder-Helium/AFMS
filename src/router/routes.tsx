/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProcessPage from '../pages/ProcessPage'
import StorehousePage from '../pages/StorehousePage'
import PersonnelPage from '../pages/PersonnelPage'
import Others from '../pages/OtherPages/OtherPageIndex'
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
    component: ProcessPage
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
    component: Others,
    routes: [
      {
        path: '/others/ledger',
        component: LedgerPage
      },
      {
        path: '/others/log',
        component: LogePage
      }
    ]
  }
];
