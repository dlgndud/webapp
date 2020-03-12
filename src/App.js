import React, { Component } from 'react';
import './App.css';

import TOC from './components/TOC';
import Content from './components/content';
import Subject from './components/Subject';

class App extends Component {

  // class 초기화 block!
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      welcome:{title:'', desc:'Hello React!'},
      subject:{title:'WEB', sub:'world wide web!'},
      content:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language!!'},
        {id:2, title:'CSS', desc:'Hey man... this is css'},
        {id:3, title:'Java Script', desc:'whats up bro... Iam javascript'}
      ]
    }
  }
  // props or state가 변경되면 render()가 다시 호출 되도록 약속되어 있음
  render() {
    var _title, _desc = null;

    if(this.state.mode==='welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode==='read') {
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            alert('hi'); 
            //console.log(e); debugger;
            e.preventDefault();
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Subject title="REACT" sub="made by facebook"></Subject>
        <TOC data={this.state.content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
