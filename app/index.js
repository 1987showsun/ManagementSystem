import React,{Component}                                          from 'react';
import ReactDOM                                                   from 'react-dom';
import { Provider }                                               from 'react-redux';
import { BrowserRouter, HashRouter, Route, Link }                 from 'react-router-dom';

//import redux store
import store                                                      from "./store";

//import components
import Layout                                                     from './components/common/layout';
import routes                                                     from './router/router';

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      page : [],
    }
  }

  render(){
    return(
      <HashRouter>
        <Provider store={store}>
          <Layout />
        </Provider>
      </HashRouter>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Index />,app);
