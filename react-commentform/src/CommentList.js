import React,{ Component } from 'react';
import Comment from './Comment'

class CommentList extends Component{

    render(){
        const {comments}=this.props;
        console.log(comments);
        return(
            <div>
                {
                    comments.map( (comment,index)=> {
                        // key值要加在循环的最外层
                        return(
                            <Comment comment={comment}
                                     key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default CommentList;