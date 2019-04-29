import React,{ Component } from 'react';
import './Comment.css'
import PropTypes from 'prop-types'


class Comment extends Component{
    constructor(){
        super();
        this.state={
            timeString:''
        }
    }

    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    componentWillMount(){
        this._updateTime()
    }

    _updateTime(){
        const {comment} = this.props;
        console.log(comment);
        console.log(typeof comment.createdTime); //number
        const duration = (Date.now() - comment.createdTime) / 1000;
        console.log(duration);
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
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
            </div>
        )
    }
}

export default Comment;