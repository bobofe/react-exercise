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
        this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
    }

    componentWillMount(){
        // 在render之前执行
        this._loadUsername()
    }

    componentDidMount(){
        //在render之后执行
        this.textarea.focus();

    }

    // 持久化用户名：将用户名保存到localStorage
    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    // 页面刷新时加载用户名
    _loadUsername(){
        var username = localStorage.getItem('username');
        if(username){
            this.setState(()=>{
                return{
                    name:username
                }
            })
        }
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
        this.props.updateComment(
            {
                name: this.state.name,
                content: this.state.content,
                createdTime: Date.now()
            });

        // 提交数据完成后，清空内容区，保留用户名
        this.setState(()=>{
            return{
                content:''
            }
        })
    }

    handleUsernameBlur(event){
        // 输入框失去焦点时，将值保存都localStorage中
        this._saveUsername(event.target.value)
    }

    handleCommentBlur(event){
        this._saveComment(event.target.value)
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
                               onBlur={this.handleUsernameBlur}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content}
                                  onChange={this.handleCommentChange}
                                  ref={(textarea)=>this.textarea=textarea}
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