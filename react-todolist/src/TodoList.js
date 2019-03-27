import React,{ Component,Fragment } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            lists : [1,2,3]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    handleSubmit(e){
        //这个一共有两步
        //第一步：将input框中的内容添加到lists中,首先要获取到,注意push进去的是一个字符串，返回的是个数组的长度
        //所以不能用push
        this.setState({
            // lists :this.state.lists.push(parseInt(this.state.inputValue))
            lists:[...this.state.lists,this.state.inputValue],
            inputValue:''
        });
        //第二步：将lists中的内容渲染到页面上，同时
    }

    handleDelete(index){
        const lists = this.state.lists;
        lists.splice(index,1);
        this.setState({
            lists : lists
        })
    }


    render(){
        return(
            <Fragment>
                <div>
                    <span>输入值：</span>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <ul>
                    {
                        this.state.lists.map( (list,index)=> {
                            return(
                                <li key={index}
                                    onClick={this.handleDelete.bind(this,index)}
                                >{list}</li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;