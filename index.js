import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/pages/login';
import Hotels from './components/pages/hotels';
import order from './components/pages/order';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/order/:id" component={order} />
      </div>
    </Router>
)

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
