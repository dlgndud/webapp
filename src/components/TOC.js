import React, { Component } from 'react'

// Table of Content
class TOC extends Component {
    render() {
        var data = this.props.data;
        var list = []
        for(var i=0; i<data.length; i++) {
            list.push(
            <li key={data[i].id}>
                <a href={"/content/"+data[i].id} 
                    data-id={data[i].id} 
                    onClick={function(e){
                         e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                }.bind(this)} >
                    {data[i].title}
                </a>
            </li>
            )
        }
      return(
        <nav>
          <ul>
            {list}
          </ul>
        </nav>
      )
    }
  }

  export default TOC;