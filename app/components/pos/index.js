import React,{Component}     from 'react';
import {connect}             from 'react-redux';
import {Link}                from 'react-router-dom';

//actions
import {POSTask} from '../../actions/api';

@connect((state,props)=>{
  return{
    posAddTask : state.post.posAddTask,
    posTask    : state.api.posTask
  }
})

export default class POSIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      posTask : []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posTask : nextProps.posTask
    })
  }

  componentDidMount() {
    this.props.dispatch( POSTask() )
  }

  render(){
    return(
      <div>
        <section>
          正在執行的流程
        </section>
        <ul className="list">
          {
            this.state.posTask.map((item,i)=>{
              return(
                <li>
                  <ul>
                    <li>{i+1}</li>
                    <li>{item.name}</li>
                    <li>{item.category}</li>
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
