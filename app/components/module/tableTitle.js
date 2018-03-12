import React,{Component}  from 'react';
import {connect}          from 'react-redux';
import {Route, Link}      from 'react-router-dom';

export default class TableTitle extends React.Component{

  renderLi(){
    const returnView = this.props.data.map((item,i)=>{
      return (<li key={i}>{item}</li>)
    })
    return returnView;
  }

  render(){
    return(
      <ul className="list" data-model="leave" data-th="true" data-column="6">
        <li>
          <ul>
            {this.renderLi()}
          </ul>
        </li>
      </ul>
    );
  }
}
