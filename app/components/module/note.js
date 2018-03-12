import React,{Component} from 'react';
import {connect}         from 'react-redux';

//actions
import {note}            from '../../actions/note';

@connect((state,props)=>{
  return{
    note : state.note
  }
})

export default class Note extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      note : props.note
    }
  }

  closeNoteWindow(){
    let noteSetUp = {
      popupWindowStatus : false,
      message           : "",
      type              : ""
    }
    this.props.dispatch( note(noteSetUp) );
  }

  selectRenderTypeView(){
    switch(this.state.note.type){
      case 'text':
        return(
          <div className="noteContent">
            <div className="text">
              {this.state.note.message}
            </div>
            <div className="action">
              <button className="btn submit" onClick={this.closeNoteWindow.bind(this)}>確定</button>
            </div>
          </div>
        );
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      note : nextProps.note
    })
  }

  render(){
    return(
      <div className={`note ${this.state.note.popupWindowStatus}`}>
        <div className="null" onClick={this.closeNoteWindow.bind(this)}></div>
        {this.selectRenderTypeView()}
      </div>
    )
  }
}
