import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/home-page/Home';


export default class Router extends React.PureComponent {
  public render() {
    return (
    <BrowserRouter>
    <Switch>
    <Route path='/' component={Home}></Route>
    </Switch>
    
    </BrowserRouter>
    );
  }
}
