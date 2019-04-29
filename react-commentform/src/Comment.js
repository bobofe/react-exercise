import React,{ Component } from 'react';
import './Comment.css'
import PropTypes from 'prop-types'


class Comment extends Component{


    static propTypes = {
        comment: PropTypes.string.isRequired
    }

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