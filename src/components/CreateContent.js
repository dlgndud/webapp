import React, { Component } from 'react'

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="/crate_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        let data = {}
                        data.title=e.target.title.value;
                        data.eamil=e.target.email.value;
                        data.desc=e.target.desc.value;
                        this.props.onSubmit(data);
                        
                    }.bind(this)}
                >
                    <p><input type='text' name='title' placeholder='title' /></p>
                    <p><input type='text' name='email' placeholder='email' /></p>
                    <p><textarea name='desc' placeholder='desc'></textarea></p>
                    <p><input type='submit' ></input> </p>
                </form>
            </article>
        )
    }
}

export default CreateContent;