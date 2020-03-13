import React, { Component } from 'react'

class Control extends Component {
    render() {
        return(
            <ul>
          <li><a href="/create" data-mode='create' onClick={
              function(e) {
                  e.preventDefault();
                  this.props.onChangeMode(e.target.dataset.mode)
              }.bind(this)
          } >create</a></li>
          <li><a href="/update" data-mode='update' onClick={
              function(e) {
                  e.preventDefault();
                  this.props.onChangeMode(e.target.dataset.mode)
              }.bind(this)
          } >update</a></li>
          <li><input type="button" value="delete" data-mode='delete' onClick={
              function(e) {
                  this.props.onChangeMode(e.target.dataset.mode)
              }.bind(this)
          }>
              </input></li>
        </ul>
        )
    }
}

export default Control;