import React,{Component}        from 'react';
import {Route, Link}            from 'react-router-dom';
import {connect}                from 'react-redux';

//import Components
import Nav                      from '../module/nav';
import Main                     from './main';
import LeaveDetailed            from './leaveDetailed';
import Addlication              from '../form/addlication';
import List                     from '../module/list';
import Leave                    from '../leave';
import POSIndex                 from '../pos';
import POSInitiated             from '../pos/initiated';
import POSProgram               from '../pos/program';


import {subNav}           from '../../actions/nav';

@connect((state,props)=>{
  return{
    nav : state.nav.sub
  }
})

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nav : [],
      leave : [{
        model : "leave",
        th    : ["","價單編號","假別","請假日期","請休天數","狀態"]
      }],
      formStatus : [],
    }
  }

  componentDidMount() {
    this.getSubNav();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      navMain : nextProps.match.params.main,
      nav     : nextProps.nav
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.navMain!=prevProps.match.params.main ){
      this.getSubNav();
    }
  }

  getSubNav(){
    const main = this.props.match.params.main;
    this.props.dispatch( subNav(main) );
  }

  render(){
    return(
      <main>
        <section className="content" data-column="2" data-maxWidth="true">
          <Nav  url={this.props.match.url} data={this.state.nav} componentClassName="mainNav" orientation="portrait" />
          <section class="main">
            <Route exact path="/:area/manage/leave" component={Leave} />
            <Route exact path="/:area/manage/leave/list" component={Leave} />
            <Route path="/:area/manage/Leave/list/:id" component={LeaveDetailed} />
            <Route path="/:area/manage/Leave/form" component={Addlication} />
            <Route exact path="/:area/manage/pos" component={POSIndex} />
            <Route exact path="/:area/manage/pos/list" render={()=><div>pos list</div>} />
            <Route path="/:area/manage/pos/list/:id" render={()=><div>pos list Item</div>} />
            <Route path="/:area/manage/pos/initiated" component={POSInitiated} />
            <Route path="/:area/manage/pos/program" component={POSProgram} />
          </section>
        </section>
      </main>
    )
  }
}
