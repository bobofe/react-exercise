import React,{ Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[
                {name:'大大da',content:'你好dee'},
                {name:'小小fff',content:'你好fce'},
                {name:'期间就非IE',content:'的点点滴滴'},
            ]
        };
        this.commentUpdate = this.commentUpdate.bind(this)
    }

    commentUpdate(comment){
        const comments = this.state.comments;
        comments.push(comment)
        this.setState((prevState)=>{
            return{
                comments:comments
            }
        })
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput updateComment={this.commentUpdate}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;