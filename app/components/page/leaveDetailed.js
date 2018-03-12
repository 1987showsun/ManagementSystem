import React,{Component}  from 'react';
import {connect}          from 'react-redux';

//actions
import {leaveDetailed,selectApi}    from '../../actions/api';

@connect((state,props)=>{
  return{
    leaveDetailed : state.api.leaveDetailed,
    leaveCategory : state.api.leaveCategory
  }
})

export default class LeaveDetailed extends React.Component{

  constructor(props){
    super(props);
    this.state={
      getApiSwitch  : true,
      leaveDetailed : [],
      leaveCategory : [],
    }
  }

  componentDidMount() {
    this.props.dispatch( selectApi() );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      leaveCategory : nextProps.leaveCategory,
      leaveDetailed : nextProps.leaveDetailed,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.leaveCategory!=[] ){
      if( this.state.getApiSwitch ){
        this.props.dispatch( leaveDetailed(this.props.match,this.state.leaveCategory) );
        this.setState({
          getApiSwitch : false,
        })
      }
    }
  }

  render(){
    return(
      <ul className="list">
        <li>
          <ul>
            <li>表單編號</li>
            <li>{this.state.leaveDetailed._id}</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>申請時間</li>
            <li>{this.state.leaveDetailed.apply_date}</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>假別</li>
            <li>{this.state.leaveDetailed.category}</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>請假時間</li>
            <li>{`${this.state.leaveDetailed.start_date} ~ ${this.state.leaveDetailed.end_date}`}</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>職務代理人</li>
            <li>{ (this.state.leaveDetailed.agent!=undefined)? this.state.leaveDetailed.agent.name : ''} ( { (this.state.leaveDetailed.agent!=undefined)? this.state.leaveDetailed.agent.username : ''} )</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>原因</li>
            <li>{ this.props.leaveDetailed.remarks }</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>附件</li>
            <li></li>
          </ul>
        </li>
      </ul>
    )
  }
}
