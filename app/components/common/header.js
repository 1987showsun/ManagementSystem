import React,{Component}  from 'react';
import {connect}          from 'react-redux';
import {Link}             from 'react-router-dom';
import axios              from 'axios';

//import Nav Components
import Nav                from '../module/nav';

import {mainNav}          from '../../actions/nav';

@connect((state,props)=>{
  return{
    nav : state.nav.data
  }
})

export default class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nav : []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nav : nextProps.nav
    })
  }

  componentDidMount() {
    this.props.dispatch(mainNav());
  }

  render(){
    return(
      <header data-position="fixed">
        <article className="logo">
          <Link to={`/${this.props.match.params.area}`}>
            <img src="../../public/images/logo.png" alt="skyline" title="skyline" />
          </Link>
        </article>
        <Nav url={this.props.match.url} data={this.state.nav} componentClassName="mainNav" orientation="landscape"/>
      </header>
    );
  }
}
