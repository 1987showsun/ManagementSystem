import React,{Component}                  from 'react';
import {Route, Link, Switch}              from 'react-router-dom';
import detectBrowserLanguage              from 'detect-browser-language';
import {connect}                          from 'react-redux';

//import action
import {localtion,lingual}                from '../../actions/multiLingual';

//import component
import routers                            from '../../router/router.js';
import Header                             from './header';
import Footer                             from './footer';
import Popup                              from '../module/popup';
import Note                               from '../module/note';

//import style
import '../../public/stylesheets/style.scss';

export default class Layout extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const local = detectBrowserLanguage();
  }

  returnRouter(){
    const renderRouter = routers.map((item,i)=>{
      return (<Route key={i} {...item} />);
    })
    return renderRouter;
  }

  render(){
    return(
      <section id="wrapper">
        <Route path="/:area" component={Header} />
        {this.returnRouter()}
        <Route path="/:area" component={Footer} />
        <Popup />
        <Note />
      </section>
    )
  }
}
