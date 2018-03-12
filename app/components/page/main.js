import React,{Component}        from 'react';
import {Route, Link}            from 'react-router-dom';
import {connect}                from 'react-redux';

//import Component
import Addlication              from '../form/addlication';
import List                     from '../module/list';
import TableTitle               from '../module/tableTitle';

//actions
import {leaveListApi} from '../../actions/api';
import {statusApi} from '../../actions/status';


@connect((state,props)=>{
  return{
    leaveList   : state.api.leaveList,
    formStatus  : state.api.formStatus,
  }
})

export default class Main extends React.Component{

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
    this.props.dispatch(statusApi());
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

  includeComponent(){
    switch (this.props.match.params.sub){
      case 'form':
        return(<Addlication match={this.props.match}/>);
        break;

      case 'list':
      return(
        <div className="mainBlock">
          <TableTitle data={this.state.leave[0].th} />
          <List data={this.props.leaveList} url={this.props.match.url} />
        </div>
      );
      break;
    }
  }

  render(){
    //{this.includeComponent()}
    {/*
      <Route path="/:area/manage/:main/form" component={Addlication} />
      <Route exact path="/:area/manage/:main/list" component={List} />
      <Route exact path="/:area/manage/:main/list/:id" component={LeaveDetailed} />
      */}
    return(
      <section class="main">
      </section>
    );
  }
}
