import React,{ Component } from 'react';
import Comment from './Comment'

class CommentList extends Component{

    handleDelete(index){
        console.log(this.props);
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }

    render(){
        const {comments}=this.props;
        // console.log(comments);
        return(
            <div>
                {
                    comments.map( (comment,index)=> {
                        // key值要加在循环的最外层
                        return(
                            <Comment comment={comment}
                                     key={index}
                                     index={index}
                                     onDeleteComment={this.handleDelete.bind(this)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default CommentList;