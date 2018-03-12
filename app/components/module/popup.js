import React,{Component} from 'react';
import {connect}         from 'react-redux';

//actions
import {popup}           from '../../actions/popup';

//component
import Menu              from '../pos/menu';

@connect((state,props)=>{
  return{
    windowStatus     : state.popup.windowStatus,
    action           : state.popup.action,
    id               : state.popup.id,
    index            : state.popup.selectInputIndex,
    formResult       : state.popup.formResult,
  }
})

export default class Popup extends React.Component{

  constructor(props){
    super(props);
    this.state={
      setup : []
    }
  }

  closePopupWindow(){
    let setUp = {
          "popupWindowStatus" : false,
          "stoer_Id"          : this.props.id,
          "popupAction"       : this.props.action,
          "selectInputIndex"  : this.props.index
        };
    this.props.dispatch( popup(setUp) );
  }

  selectrenderView(){
    if( this.props.action=='program' ){
      return ( <Menu /> );
    }
  }

  render(){
    return(
      <section className={`popup ${this.props.windowStatus}`}>
        <div className="null" onClick={this.closePopupWindow.bind(this)}></div>
        <section className="popupConent">
          <span className="close" onClick={this.closePopupWindow.bind(this)}></span>
          {this.selectrenderView()}
        </section>
      </section>
    )
  }
}
