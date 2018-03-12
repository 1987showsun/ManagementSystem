import React,{Component}  from 'react';
import {Link}             from 'react-router-dom';

//import Component
import LeaveItem from './leaveItem';

export default class List extends React.Component{
  render(){
    return(
      <ul className="list" data-model="leave" data-th="false" data-column="6">
        {
          this.props.data.map((item,i)=>{
            return (<LeaveItem key={i} un={i} url={`${this.props.url}/list/${item._id}`} item={item}/>)
          })
        }
      </ul>
    );
  }
}
