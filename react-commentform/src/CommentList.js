import React,{ Component } from 'react';
import Comment from './Comment'

class CommentList extends Component{

    render(){
        const {comments}=this.props;
        return(
            <div>
                {
                    comments.map( (comment,index)=> {
                        return(
                            <div key={index}>
                                <Comment name={comment.name}
                                         comment={comment.content}
                                />
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default CommentList;