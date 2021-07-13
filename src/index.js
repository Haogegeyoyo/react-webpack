import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './app';
import './index.less'
import { HashRouter, BrowserRouter } from 'react-router-dom'
// const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;
const Router = HashRouter 


ReactDOM.render(
  // <React.StrictMode>
  //  需要路由监听的，统统放在 <Router> 组件下，<app>
    <Router>
      <App />
    </Router>,
  // </React.StrictMode>,
  document.getElementById('app')
);