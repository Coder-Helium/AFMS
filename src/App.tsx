import Routers from './router'
import './App.scss'
import { routes } from './router/routes'
import React from 'react'
function App () {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className = 'appConatiner'>
      <Routers routes={routes}/>
    </div>
  )
}

export default App
