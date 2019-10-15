/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './containers/Login'

// import Page404 from 'containers/Page404'
// import Page500 from 'containers/Page500'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" name="Login Page" component={Login} />
          {/* <Route exact path="/404" name="Page 404" component={Page404} /> */}
          {/* <Route exact path="/500" name="Page 500" component={Page500} /> */}
        </Switch>
      </Router>
    </div>
  )
}
