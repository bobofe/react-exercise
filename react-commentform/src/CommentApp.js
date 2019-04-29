import React,{ Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[],
        };
        this.commentUpdate = this.commentUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount(){
        this._loadComments()
    }

    _loadComments(){
        var comments = localStorage.getItem('comments');
        if(comments){
            this.setState(function () {
                return{
                    comments: JSON.parse(comments)
                }
            })
        }else{
            this.setState(function () {
                return{
                    comments:this.state.comments
                }
            })
        }
    }

    _updateComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }

    commentUpdate(comment){
        // 不能直接操作this.state中的属性的属性值，包括赋值和数组的加减操作，
        // 可以赋值给一个新变量，再将新变量通过setState给到this.state中的属性，
        // 从而实现数据变化，并重新渲染
        // 方法一：
        if(!comment) return;
        if(!comment.name) alert('请输入用户名');
        if(!comment.content) alert('请输入评论内容');

        const comments = this.state.comments;

        comments.push(comment);
        this.setState(()=>{
            return{
                comments:comments
            }
        });

        this._updateComments(comments)
        // 方法二：剩余参数
        // this.setState(()=>({comments: [...this.state.comments,comment]}));

        // 方法三：setState函数参数
        // this.setState((prevState,props)=>{
        //     // 固定参数，第一个是this.state的前一个状态；第二个参数为属性对象props
        //     console.log(prevState)
        //     console.log(comment)
        //     console.log(props);   //{}
        //
        //     return{
        //         comments:[...prevState.comments,comment]
        //     }
        // })
    }

    handleDelete(index){
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState(function () {
            return{
                comments:comments
            }
        });
        this._updateComments(comments)
    }

    render(){
        return(
            <div className="wrapper">
                {/*作为组件调用时可以有属性和方法，使用上和标签相同，可通过给组件加属性和方法实现向组件间的数据传递*/}
                <CommentInput updateComment={this.commentUpdate}/>
                <CommentList comments={this.state.comments}
                             onDeleteComment={this.handleDelete}/>
            </div>
        )
    }
}

export default CommentApp;