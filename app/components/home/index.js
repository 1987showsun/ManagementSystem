import React,{Component}       from 'react';
import {Link}                  from 'react-router-dom';
import { connect }             from "react-redux";


//import action
//import {home} from '../../actions/home';


export default class Home extends React.Component{
  componentDidMount(){
    //this.props.dispatch(home());
  }

  render(){
    return(
      <main>
        <section id="kv">kv</section>
        <section className="content" data-column="3" data-maxWidth="true">
          <nav>nav</nav>
          <section className="main">
            <section className="title main">
              <h2>標題一</h2>
              <Link to="#">more</Link>
            </section>
            <section className="title main">
              <h2>標題一</h2>
              <Link to="#">more</Link>
            </section>
          </section>
          <aside>
            aside
          </aside>
        </section>
      </main>
    )
  }
}
