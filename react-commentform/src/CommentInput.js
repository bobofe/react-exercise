import React,{ Component } from 'react';
import './CommentInput.css'

class CommentInput extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            content:''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e){
        const name = e.target.value;
        this.setState(function (prevState) {
            return{
                name:name
            }
        })
    }

    handleCommentChange(e){
        const content = e.target.value;
        this.setState(function (prevState) {
            return{
                content:content
            }
        })
    }

    handleSubmit(){
        this.props.updateComment(this.state);
        this.setState(()=>{
            return{
                content:''
            }
        })
    }

    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input type="text"
                               value={this.state.name}
                               onChange={this.handleUsernameChange}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content}
                                  onChange={this.handleCommentChange}
                        />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}
                    >发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;