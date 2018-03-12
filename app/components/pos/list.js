import React,{Component}  from 'react';
import {connect}          from 'react-redux';

//actions
import {selectProgram,selectProgramOption} from '../../actions/popup';

@connect((state,props)=>{
  return{
    selectInputIndex : state.popup.selectInputIndex,
    formResult       : state.popup.formResult,
    program          : state.program,
  }
})

export default class List extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVal :[],
    }
  }

  select( selectAddOption ){
    {/*let formResult       = this.props.formResult,
        selectInputIndex = this.props.selectInputIndex;

    this.props.dispatch( selectProgram( formResult,selectInputIndex,selectAddOption ) );*/}
    let selectInputIndex = this.props.selectInputIndex,
        program          = this.props.program;

    this.props.dispatch( selectProgramOption( program,selectAddOption,selectInputIndex ) );
    //console.log( this.props.dispatch );
    //this.props.dispatch( program( program,selectAddOption,selectInputIndex ) );
  }

  renderView(){
    const renderView = this.props.data.map((item,i)=>{
      return(
        <li key={i} onClick={this.select.bind(this,item)} className="" >
          <div>
            <img src={item.img[0]} alt="" title=""/>
            <div>
              <h3>{item.name}</h3>
              <span className="much">{item.much[0]}</span>
            </div>
          </div>
        </li>
      )
    })
    return renderView;
  }

  render(){
    return(
      <ul className="list" data-model="block">
        {this.renderView()}
      </ul>
    );
  }
}
