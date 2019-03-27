import React,{ Component } from 'react';
import './Comment.css'


class Comment extends Component{

    render(){
        const {name,comment}=this.props;
        return(
            <div className="comment-list">
                <div className="comment-user">
                    <span>{name}：</span>
                </div>
                <p>{comment}</p>
            </div>
        )
    }
}

export default Comment;