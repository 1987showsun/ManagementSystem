import React,{Component}        from 'react';
import {connect}                from 'react-redux';
import $                        from 'jquery';

//component
import Option                   from '../module/option';

//actions
import {popup,addProgramArray}  from '../../actions/popup';
import {POSStore,POSStoreMenu}  from '../../actions/api';
import {note}                   from '../../actions/note';

@connect((state,props)=>{
  return {
    store           : state.api.posStore,
    menu            : state.api.posStoreMenu,
    program         : state.program
  }
})

export default class POSProgram extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      program : [],
    }
  }

  componentDidMount() {
    let inputLength = $('.input').length,
        state       = [];
    for( let i=0 ; i < inputLength ; i++ ){
      this.setState({
        [$('.input').eq(i).attr('name')]  : '',
      })
    }
    this.props.dispatch( POSStore() );
  }

  handleChange(e){
    let name = e.target.name,
        val  = e.target.value;

    if(name=="store_id"){
      this.props.dispatch( POSStoreMenu(val) );
    }

    this.setState({
      [name] : val
    })
  }

  handleProgramChange(index,e){
    let name     = e.target.name,
        val      = e.target.value,
        program  = this.state.program;

    program[index][name] = val;

    this.setState({
      program : program
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let checkTheArray = this.state.program.filter((item,i)=>{
      if( item.project.length==0 || item.name=="" || item.category=="" ){
        return false;
      }else{
        return true;
      }
    })

    console.log(checkTheArray);
  }

  writeTheSelectedItem(item,itemIndex){
    return item.map((item,i)=>{
      return(
        <div className="option" key={i}>
          <span className="close" onClick={ this.removerProjectItems.bind(this,itemIndex,i)} title={`刪除${item.name}`}></span>
          {item.name}
        </div>
      );
    })
  }

  renderProgramInput(){
    return this.state.program.map((item,i)=>{
      return (
        <div key={i} className="column">
          <div className="inputBorder program">
            {this.writeTheSelectedItem(item['project'],i)}
            <div className="touchBlock" onChange="" onClick={this.popup.bind(this,i)}></div>
            <input type="hidden" name="project" value="" className="input program"/>
          </div>
          <div className="inputBorder">
            <input type="number" name="much" value={item["much"]} className="input number" onChange={this.handleProgramChange.bind(this,i)}/>
          </div>
          <div className="inputBorder">
            <select name="category" onChange={this.handleProgramChange.bind(this,i)}>
              <option value="">方案所屬類別</option>
              <option value="超值全餐">超值全餐</option>
              <option value="快樂分享餐">快樂分享餐</option>
              <option value="豪滿足獨享餐">豪滿足獨享餐</option>
              <option value="大滿足獨享餐">大滿足獨享餐</option>
            </select>
          </div>
          <div className="inputBorder">
            <input type="text" name="name" value={item['name']} className="input name"  onChange={this.handleProgramChange.bind(this,i)} placeholder="套餐名稱"/>
          </div>
          <span className="btn remove" onClick=""></span>
        </div>
      )
    })
  }

  popup(index){
    let setup = {
      "popupWindowStatus" : true,
      "stoer_Id"          : "5a9509c1f9587727a0fba57d",
      "popupAction"       : "program",
      "selectInputIndex"  : index
    }

    this.props.dispatch( popup(setup) )
  }

  addHtml(){
    if( this.state.store_id=='' ){
      let noteSetUp = {
        popupWindowStatus : true,
        message           : "請先選擇所要新增方案的店家",
        type              : "text"
      }
      this.props.dispatch( note(noteSetUp) );
    }else{
      let program = this.state.program;
      program.push({ "project":[], "much":"0","category":"","name":"" });
      this.setState({ program : program });
      this.props.dispatch( addProgramArray(program) );
    }
  }

  removerProjectItems(itemIndex,i){
    let program               = this.state.program;
    program[itemIndex]['project'].splice(i,1);
    this.setState({
      program : program
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <ul>
          <li>
            <ul>
              <li>店家</li>
              <li>
                <div className="inputBorder">
                  <select name="store_id" className="input" onChange={this.handleChange.bind(this)}>
                    <option value="">請選擇新增方案的店家</option>
                    {
                      this.props.store.map((item,i)=>{
                        return( <Option key={i} id={item._id} name={item.name}/> )
                      })
                    }
                  </select>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>菜單方案</li>
              <li>
                {this.renderProgramInput()}
                <span className="btn add" onClick={this.addHtml.bind(this)}>
                  <span class="icon add" data-icon-color="fff"></span>
                  新增方案
                </span>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li></li>
              <li>
                <button className="btn submit" type="submit">送出</button>
              </li>
            </ul>
          </li>
        </ul>
      </form>
    )
  }
}
