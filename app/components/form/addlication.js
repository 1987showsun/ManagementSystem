import React,{Component}  from 'react';
import {connect}          from 'react-redux';
import {Route, Link}      from 'react-router-dom';
import $                  from 'jquery';

//actions
import {selectApi,searchAgent}  from '../../actions/api';
import {formLeaveSubmit}        from '../../actions/post';

@connect((state,props)=>{
  return{
    leaveCategory   : state.api.leaveCategory,
    formLeaveSubmit : state.post.formLeaveSubmit,
    searchMember    : state.api.searchMember
  }
})

export default class Addlication extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVal  : [{}],
      selectAgentSwitch : false,
    }
  }

  componentDidMount() {

    this.props.dispatch( selectApi() );

    let inputLength   = $('input').length,
        _formVal      = this.state.formVal,
        nowDate       = new Date();

    for( let i=0 ; i < inputLength ; i++ ){
      const _name = $('.input').eq(i).attr('name');
      _formVal[0][_name] = "";
    }

    this.setState({
      formVal : _formVal
    })
  }

  returnleaveCategory(){
    const returnView = this.props.leaveCategory.map((item,i)=>{
      return (<option key={i} value={item.no}>{item.name_cn}</option>);
    });
    return returnView;
  }

  handleChange(e){

    let _val      = e.target.value,
        _name     = e.target.name,
        _formVal  = this.state.formVal,
        _ddd      = [];

    _formVal[0][_name] = _val;

    if( _name=="agent" ){
      this.props.dispatch( searchAgent(_val) );
    }

    this.setState({
      formVal : _formVal
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch( formLeaveSubmit( this.state.formVal ) );
  }

  selectAgent(_switch){
    this.setState({
      selectAgentSwitch : _switch,
    })
  }

  checkSelect(selectMember,_name){
    let _formVal       = this.state.formVal;
    _formVal[0][_name] = selectMember.username;
    this.setState({
      formVal : _formVal,
    })
    this.selectAgent(false);
  }

  showSearchMember(_name){
    const returnView = this.props.searchMember.map((item,i)=>{
      return(
        <li key={i} onClick={this.checkSelect.bind(this,item,_name)}>
          <ul>
            <li>
              <img src={item.profile_pic} alt={item.name_cn} title="" />
            </li>
            <li>
              <h3>{item.name_cn}</h3>
              <h4>{item.username}</h4>
            </li>
          </ul>
        </li>
      );
    })
    return returnView;
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <ul>
          <li>
            <ul>
              <li>請假時間：</li>
              <li>
                <div className="inputBorder">
                  <input type="tel" name="start_yy" value={this.state.formVal['start_yy']} className="yy input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder="YYYY"/>
                  <span data-textCenter="true">/</span>
                  <input type="tel" name="start_mm" value={this.state.formVal['start_mm']} className="mm input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder="MM"/>
                  <span data-textCenter="true">/</span>
                  <input type="tel" name="start_dd" value={this.state.formVal['start_dd']} className="dd input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder="DD"/>
                  <span data-textCenter="true"></span>
                  <input type="tel" name="start_hr" value={this.state.formVal['start_hr']} className="hh input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder=""/>
                  <span data-textCenter="true">：</span>
                  <input type="tel" name="start_min" value={this.state.formVal['start_min']} className="min input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder=""/>
                </div>
                <span>~</span>
                <div className="inputBorder">
                  <input type="tel" name="end_yy" value={this.state.formVal['end_yy']} className="yy input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder="YYYY"/>
                  <span data-textCenter="true">/</span>
                  <input type="tel" name="end_mm" value={this.state.formVal['end_mm']} className="mm input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder="MM"/>
                  <span data-textCenter="true">/</span>
                  <input type="tel" name="end_dd" value={this.state.formVal['end_dd']} className="dd input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder="DD"/>
                  <span data-textCenter="true"></span>
                  <input type="tel" name="end_hr" value={this.state.formVal['end_hr']} className="hh input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder=""/>
                  <span data-textCenter="true">：</span>
                  <input type="tel" name="end_min" value={this.state.formVal['end_min']} className="min input" data-textCenter="true" onChange={this.handleChange.bind(this)} placeholder=""/>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>請假項目：</li>
              <li>
                <div className="inputBorder">
                  <select name="leaveCategory" value={this.state.formVal['leaveCategory']} className="shareWidth input" onChange={this.handleChange.bind(this)}>
                    {this.returnleaveCategory()}
                  </select>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>職務代理人：</li>
              <li>
                <div className="inputBorder">
                  <input type="text" name="agent" value={this.state.formVal['agent']} className="shareWidth input" onChange={this.handleChange.bind(this)} onClick={this.selectAgent.bind(this,true)} autoComplete="off"/>
                  <input type="hidden" name="username" value="" />
                </div>
                <div className={`selsct ${this.state.selectAgentSwitch}`}>
                  <ul className="list" data-model="select1">
                    {this.showSearchMember('username')}
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>請假原因：</li>
              <li>
                <div className="inputBorder">
                  <input type="text" name="reason" value={this.state.formVal['reason']} className="shareWidth input" onChange={this.handleChange.bind(this)}/>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>附件：</li>
              <li>
                <div className="inputBorder">
                  <input type="file" name="annex" value={this.state.formVal['annex']} className="shareWidth input" onChange={this.handleChange.bind(this)}/>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li></li>
              <li>
                <button type="submit">送出</button>
              </li>
            </ul>
          </li>
        </ul>
      </form>
    )
  }
}
