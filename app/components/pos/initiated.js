import React,{Component}                from 'react';
import {connect}                        from 'react-redux';
import {Link}                           from 'react-router-dom';
import $                                from 'jquery';

//actions
import {POSStore,POSStoreBranch,POSStoreMenu}        from '../../actions/api';
import {posAddTask}                                  from '../../actions/post';

//component
import Option                           from '../module/option'

@connect((state,props)=>{
  return{
    posStore        : state.api.posStore,
    posStoreBranch  : state.api.posStoreBranch,
    posStoreMenu    : state.api.posStoreMenu,
    posAddTask      : state.post.posAddTask
  }
})

export default class POSInitiated extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      formVal : [{}],
      menu    : [],
    }
  }

  componentDidMount() {
    let _inputLength = $('.input').length,
        _name        = '',
        _formVal     = this.state.formVal;

    for(let i=0 ; i < _inputLength ; i++ ){
      _name = $('.input').eq(i).attr('name');
      _formVal[0][_name] = '';
    }

    this.props.dispatch( POSStore() );

    this.setState({
      formVal : _formVal
    })
  }

  componentWillReceiveProps(nextProps) {
    let _formVal  = this.state.formVal;

    _formVal[0]['menu'] = nextProps.posStoreMenu;

    this.setState({
      formVal : _formVal,
    })
  }

  handleChange(e){
    let _name     = e.target.name,
        _val      = e.target.value,
        _formVal  = this.state.formVal;

    _formVal[0][_name] = _val;

    if( _name == 'store' ){
      this.props.dispatch( POSStoreBranch(_val) );
      this.props.dispatch( POSStoreMenu(_val) );
    }

    this.setState({
      formVal : _formVal,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch( posAddTask(this.state.formVal) );
  }

  render(){
    return(
      <div>
        <section>
          發起流程
        </section>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <ul>
                <li>發起名稱</li>
                <li>
                  <div className="inputBorder">
                    <input type="text" name="name" value={this.state.formVal['name']} onChange={this.handleChange.bind(this)} className="input"/>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>開始時間</li>
                <li>
                  <div className="inputBorder">
                    <input type="date" name="startDate" value={this.state.formVal['startDate']} onChange={this.handleChange.bind(this)} className="input"/>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>結束時間</li>
                <li>
                  <div className="inputBorder">
                    <input type="date" name="endDate" value={this.state.formVal['endDate']} onChange={this.handleChange.bind(this)} className="input"/>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>發起類別</li>
                <li>
                  <div className="inputBorder">
                    <select name="category" value={this.state.formVal['category']} onChange={this.handleChange.bind(this)} className="input">
                      <option value="">請選擇發起類別</option>
                      <option value="訂餐">訂餐</option>
                      <option value="團購">團購</option>
                      <option value="聚餐">聚餐</option>
                    </select>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>店家/廠商</li>
                <li>
                  <div className="inputBorder">
                    <select name="store" value={this.state.formVal['store']} onChange={this.handleChange.bind(this)} className="input">
                      <option>請選擇消費店家</option>
                      {
                        this.props.posStore.map((item,i)=>{
                          return( <Option key={i} id={item._id} name={item.name}/> )
                        })
                      }
                    </select>
                    <input type="hidden" name="menu" value={this.state.formVal['menu']} className="input" />
                  </div>
                  <div className="inputBorder">
                    <select name="branch" value={this.state.formVal['store']} onChange={this.handleChange.bind(this)} className="input">
                      <option>分店</option>
                      {
                        this.props.posStoreBranch.map((item,i)=>{
                          return( <Option key={i} id={item._id} name={item.branch}/> )
                        })
                      }
                    </select>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>活動時段</li>
                <li>
                  <div className="inputBorder">
                    <select name="executionDate" value={this.state.formVal['executionDate']} onChange={this.handleChange.bind(this)} className="input">
                      <option value="">請選擇時段</option>
                      <option value="all">全天</option>
                      <option value="morning">上午（ 09:00 ~ 11:00 ）</option>
                      <option value="noon">中午（ 11:00 ~ 13:00 ）</option>
                      <option value="afternoon">下午（ 13:00 ~ 18:00 ）</option>
                      <option value="night">晚上（ 18:00 ~ 21:00 ）</option>
                    </select>
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
      </div>
    )
  }
}
