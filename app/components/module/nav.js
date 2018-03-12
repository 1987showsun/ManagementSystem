import React,{Component}  from 'react';
import {Link}             from 'react-router-dom';

export default class Nav extends React.Component{

  returnNav(){
    const renderNav = this.props.data.map((item,i)=>{
      if( item.main=="user" ){
        return (<li key={i} >
                  <Link to={`${this.props.url}/${item.path}`}>
                    <span className="img">
                      <img src="http://img.ltn.com.tw/Upload/ent/page/800/2016/12/14/phpovCK2y.jpg" title="" alt="" />
                    </span>
                    {item.text}
                  </Link>
                </li>);
      }else{
        return (<li key={i} ><Link to={`${this.props.url}/${item.path}`}>{item.text}</Link></li>);
      }
    })
    return renderNav;
  }

  render(){
    return(
      <nav className={this.props.componentClassName} data-orientation={this.props.orientation}>
        <ul className="nav">
          {this.returnNav()}
        </ul>
      </nav>
    )
  }
}
