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
        // 对于事件处理函数的event对象，setState的参数函数不识别，只能放在外面

        this.setState(function (prevState) {
            return{
                name:name
            // 这里可以简写为{name}
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
        // 向父组件传递数据，在子组件调用父组件的方法，将要传递的数据作为方法的参数
        this.props.updateComment(this.state);

        // 提交数据完成后，清空内容区，保留用户名
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