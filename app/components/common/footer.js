import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component{
  render(){
    return(
      <footer>
        <section className="footerWrap" data-column="3">
          <article className="left">1</article>
          <article className="center">2</article>
          <article className="right">3</article>
        </section>
        <small>&copy; 2010 Skyline Co., LTD. ALL RIGHTS RESERVED.</small>
      </footer>
    );
  }
}
