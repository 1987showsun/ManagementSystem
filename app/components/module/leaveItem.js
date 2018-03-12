import React,{Component}      from 'react';
import {connect}              from 'react-redux';
import {Link}                 from 'react-router-dom';

export default class LeaveItem extends React.Component{
  render(){
    const item = this.props.item;
    const url  = this.props.url;
    return(
      <li>
        <Link to={url} alt={`編號：${item._id} 假別：${item.category}`} title={`編號：${item.No} 假別：${item.category} 天數：${item.days}`}></Link>
        <ul>
          <li><span className="number">{this.props.un}</span></li>
          <li>{item._id}</li>
          <li>{item.category}</li>
          <li>{`${item.start_date} ~ ${item.end_date}`}</li>
          <li>{item.days}</li>
          <li>{item.status}</li>
        </ul>
      </li>
    );
  }
}
