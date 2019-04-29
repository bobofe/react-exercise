import React,{ Component } from 'react';
import './Comment.css'
import PropTypes from 'prop-types'


class Comment extends Component{
    constructor(){
        super();
        this.state={
            timeString:''
        }
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    componentWillMount(){
        this._updateTime()
    }

    _updateTime(){
        console.log(this.props);
        //{comment: {name: "波波", content: "我是一", createdTime: 1556527025186},key: }
        const {comment} = this.props;
        console.log(comment);
        //{name: "波波", content: "我是一", createdTime: 1556527025186}
        // console.log(typeof comment.createdTime); //number
        const duration = (Date.now() - comment.createdTime) / 1000;
        // console.log(duration);
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment(e){
        if (this.props.onDeleteComment) {
            console.log(this.props.index)
            this.props.onDeleteComment(this.props.index)
        }
    }

    render(){
        const {comment}=this.props;
        return(
            <div className="comment-list">
                <div className="comment-user">
                    <span>{comment.name}：</span>
                </div>
                <p>{comment.content}</p>
                <span className='comment-createdtime'>{this.state.timeString}</span>
                <span className='comment-delete'
                      onClick={this.handleDeleteComment}
                >删除该条评论</span>
            </div>
        )
    }
}

export default Comment;