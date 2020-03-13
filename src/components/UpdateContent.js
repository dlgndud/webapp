import React, {Component} from 'react'

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.data.id,
            title:this.props.data.title,
            email:this.props.data.email,
            desc:this.props.data.desc
        }

        this.inputFormHandler = this.inputFormHandler.bind(this)
    }

    inputFormHandler(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        //console.log(this.props.data)
        return (
           
            <article>
                <h2>Update</h2>
                <form action="/crate_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        let data = {}
                        data.id = this.state.id;
                        data.title = this.state.title;
                        data.email = this.state.email;
                        data.desc = this.state.desc
                        this.props.onSubmit(data);
                        
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id} />
                    <p><input type='text' name='title' placeholder='title' value={this.state.title} 
                        onChange={this.inputFormHandler}/></p>
                    <p><input type='text' name='email' placeholder='email' value={this.state.email} 
                        onChange={this.inputFormHandler} /></p>
                    <p><textarea name='desc' placeholder='desc' value={this.state.desc}
                        onChange={this.inputFormHandler} ></textarea></p> 
                    {/* 
                        <p><textarea name='desc' placeholder='desc'>{this.props.data.desc}</textarea></p> 
                        위의 코드는 에러 코드이다. state를 수정할 수 없다는 리액트의 기본 사상을 어겼기 때문이다.
                        그렇기 때문에 내부에 state를 생성하고 글이 수정될때마다 내부 state를 업데이트하는 방법으로 수정한다.
                        수정된 state를 상위 컴포넌트에 전달한다.
                    */}
                    <p><input type='submit' ></input> </p>
                </form>
            </article>
        )
    }
}

export default UpdateContent;