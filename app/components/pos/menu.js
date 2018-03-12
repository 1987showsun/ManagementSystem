import React,{Component} from 'react';
import {connect} from 'react-redux';

//component
import List from './list';

@connect((state,props)=>{
  return{
    posStoreMenu : state.api.posStoreMenu
  }
})

export default class Menu extends React.Component{

  renderView(){
    const returnView = this.props.posStoreMenu.map((item,i)=>{
      return (
        <div className="" key={i}>
          <div className="title">{item.name}</div>
          <List data={item.item}/>
        </div>
      )
    })

    return returnView;
  }

  render(){
    return (
      <div className="in">
        {this.renderView()}
      </div>
    );
  }
}
