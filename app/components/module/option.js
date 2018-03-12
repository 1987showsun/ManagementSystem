import React,{Component}     from 'react';
import {connect}             from 'react-redux';
import {Link}                from 'react-router-dom';

export default class Option extends React.Component{
  render(){
    return(
      <option value={this.props.id}>{this.props.name}</option>
    )
  }
}
