import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";

function Dashboard() {
  return (
    <div className='dashboard'>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>

    </div>
  )
}

export default Dashboard;