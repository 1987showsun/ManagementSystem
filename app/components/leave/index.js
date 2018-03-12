import React,{Component}          from 'react';
import {Route, Link}              from 'react-router-dom';
import {connect}                  from 'react-redux';

//import Component
import List                       from '../module/list';
import TableTitle                 from '../module/tableTitle';

//component
import Option                     from '../module/option';

//actions
import { selectApi,leaveListApi } from '../../actions/api';
import { statusApi }              from '../../actions/status';

//redux
@connect((state,props)=>{
  return{
    leaveList      : state.api.leaveList,
    formStatus     : state.api.formStatus,
    leaveCategory  : state.api.leaveCategory,
  }
})

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state={
      leave : [{
        model : "leave",
        th    : ["","價單編號","假別","請假日期","請休天數","狀態"]
      }],
      formStatus : [],
    }
  }

  componentDidMount() {
    this.props.dispatch( statusApi() );
    this.props.dispatch( selectApi() );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      formStatus : nextProps.formStatus
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.formStatus!=this.state.formStatus){
      this.props.dispatch(leaveListApi(this.state.formStatus));
    }
  }

  handleChange(){

  }

  render(){
    return(
      <div>
        <form>
          <ul className="list" data-model="search">
            <li>
              <div className="inputBorder">
                <select onChange={this.handleChange.bind(this)}>
                  <option value="">請選擇搜尋假別</option>
                  {
                    this.props.leaveCategory.map((item,i)=>{
                      return(
                        <Option key={i} id={ item.no } name={item.name_cn}/>
                      );
                    })
                  }
                </select>
              </div>
            </li>
            <li>
              <div className="inputBorder">
                <select onChange={this.handleChange.bind(this)}>
                  <option value="">請選擇流程轉態</option>
                  <option value="0">流程完成(已歸檔)</option>
                  <option value="1">代理人審核中</option>
                  <option value="2">人事審核中</option>
                </select>
              </div>
            </li>
          </ul>
        </form>
        <TableTitle data={this.state.leave[0].th}/>
        <List data={this.props.leaveList} url={this.props.match.url} />
      </div>
    );
  }
}
