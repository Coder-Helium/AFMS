/* eslint-disable array-callback-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../pages/LoginPage'
import { IRoutes } from '../services/APIModel/routes'
import { CacheRoute, CacheSwitch } from 'react-router-cache-route'
const Routers = (props:IRoutes) => (
    <Routes>
      <Route path="/" element={<Login/>} />
      {props.routes.map((route, i) => {
        if (route.routes === undefined) {
          return <Route key={i} path={route.path} element={route.component} />
        }
        return (
          <Route key={i} path={route.path} element={route.component} >
            {route.routes.map((subroute, j) => (
              <Route key={j} path={subroute.path} element={subroute.component} />
            ))}
          </Route>
        )
      })}
    </Routes>
)

export default Routers
