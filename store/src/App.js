import React from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import NavTop from "./components/NavTop"
import Routes from './Routes'

export default function App() {
  return (
    <Router>
      <NavTop/>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  )
}
