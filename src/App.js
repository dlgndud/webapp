import React, { Component } from 'react';
import './App.css';

import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {

  // class 초기화 block
  constructor(props) {
    super(props);
    this.max_content_id = 3; // 불필요한 렌더링 방지를 위해 state에서 분리
    this.state = {
      mode:'create',
      welcome:{title:'', desc:'Hello React!'},
      subject:{title:'WEB', sub:'world wide web!'},
      selected_content_id:1,
      content:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language!!', email:''},
        {id:2, title:'CSS', desc:'Hey man... this is css', email:''},
        {id:3, title:'Java Script', desc:'whats up bro... Iam javascript', email:''}
      ]
    }
  }
  // props or state가 변경되면 render()가 다시 호출 되도록 약속되어 있음

  getContent() {
    var _title, _desc, _article = null;

    if(this.state.mode==='welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode==='read') {
      let i = 0;
      while(i < this.state.content.length) {
        var data = this.state.content[i];
        if(data.id===this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++
      } 
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode==='create') {
      _article = <CreateContent onSubmit={
        function(data) {
          //debugger;
          this.max_content_id++;
          let _content = Array.from(this.state.content)
          _content.push({id:this.max_content_id, title:data.title, desc:data.desc, email:data.email})
          this.setState(
            {content:_content}
          )
        }.bind(this)
      }></CreateContent>
    } else if(this.state.mode==='update') {
      _article = <UpdateContent 
                    data={this.state.content[this.state.selected_content_id-1]}
                    onSubmit={
                      function(data){
                        
                        let _content = Array.from(this.state.content);
                        let i = 0;
                        while(i<_content.length) {
                          if(_content[i].id === data.id) {
                            _content[i] = {id:data.id, title:data.title, email:data.email, desc:data.desc}
                            break;
                          }
                          i++;
                        }
                        this.setState(
                          {content:_content, mode:'read'}
                        )
                      }.bind(this)
                    }
                    >
                  </UpdateContent>
    }

    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(msg){
            this.setState({mode:'read'})
          }.bind(this)}
          />
        {/* <header>
          <h1><a href="/" onClick={function(e){
            //alert('hi'); 
            //console.log(e); debugger;
            //this.state.mode='welcome' 
            // 위의 코드가 동작하지 않는 이유는 this에 state가 없기 때문이며(so... bind를 통해 컴포넌트의 state를 사용할 수 있도록 해줘야한다.) 
            // state는 setState 형태로 변경해야하며 그 이유는 변경된 컴포넌트 렌더링을 위함이다.
            e.preventDefault();
            this.setState({
              mode:'read'
            })
          }.bind(this)} >
            {this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject title="REACT" sub="made by facebook"></Subject>
        <TOC data={this.state.content} onChangePage={
          function(id) {
            this.setState({mode:'read', selected_content_id:Number(id)})
          }.bind(this)
        }></TOC>
        <Control onChangeMode={function(mode){
          this.setState({mode:mode});
        }.bind(this)}>
        </Control>

        {this.getContent()}

      </div>
    )
  }
}

// https://www.youtube.com/watch?v=NFR7vDArVlY&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=24

export default App;
