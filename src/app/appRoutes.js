import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import {FirstPage,SecondPage,Home,Login, FeedbackForm} from './pages/index'
import {EmpFeedbackRequest ,PendingFeedback} from './components/index'
import Master from './master'

let isLoggedInUser = false;
let AppRoutes = (
    <Router history={hashHistory}>
    <Redirect from="/" to={(isLoggedInUser) ? "home" : "login" }/>
    <Route path="/login" component={Login} />
    <Route path="/feedback/:givingEmpID/:recEmpID/:managerID" component = {FeedbackForm} />
    <Route path="/" component={Master}>
        <IndexRoute component={(isLoggedInUser) ? Home : Login}/>
        <Route path="home" component={Home}>
            <IndexRoute component={SecondPage}/>
            <Route path="first" component={FirstPage} />
            <Route path= "second" component={SecondPage} />
        </Route>
    </Route>
    </Router>
);

render(AppRoutes,document.getElementById('reactComponent'));
