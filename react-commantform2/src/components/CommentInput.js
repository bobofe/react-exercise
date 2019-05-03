import React,{ Component } from 'react';
// import './CommentInput.css'
import PropTypes from 'prop-types'

class CommentInput extends Component{

    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

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

    componentDidMount(){
        //在render之后执行
        this.textarea.focus();
    }

    handleUsernameBlur(event){
        if(this.props.onUserNameInputBlur){
            this.props.onUserNameInputBlur(event.target.value)
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
        if(this.props.onSubmit){
            this.props.onSubmit({
                name: this.state.name,
                content: this.state.content,
                createdTime: new Date()
            })
        }


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