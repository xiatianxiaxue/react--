import React, { Component } from 'react'
// 制作tudolist 简单功能 完成组件的拆分
// 升级 组件拆分 todulist
import myPropTypes from 'prop-types'
 class List extends Component {
    render() {
        let addul = {
            background:"#399",
            height:"800px",
            width:"500px",
            margin:" 0 auto"

        }
        let addli = {
            background:"pink",
            height:"40px",
            width:"400px",
            textAlign:"center",
            listStyle: "none",
            margin:" 10px auto",
            borderRadius: "20px"
        }
        let addbtn1={
            backgroundColor: "red",
            borderRadius: "10px",
            color: "white",
            marginLeft: "100px"
        }
        console.log(this.props.mylist)
         let mylist = this.props.mylist

        return (
            <div>
                 <ul style={addul}>
                     {
                         mylist.map((item,index)=>
                            <li key={item} style={addli} >
                                {item}

                              <button onClick={()=>this.hanclick(index)} style={addbtn1} >删除</button>
                            </li>

                         )
                     }
                 </ul>
                 {/* <Other></Other> 默认参数 */}
            </div>
        )
    }
    hanclick(index){
        console.log("del", index)
        this.props.onXiayu(index)
    }
}
 class Other extends Component {
    // static PropTypes={
    //     mytextlist:myPropTypes.string
    // } 
    // 属性验证 
    static propTypes = {
        mytextlist: myPropTypes.string,
    }
    //属性默认值的确认
   static defaultProps = {
        mytextlist:"来了老妹"
   }
    
    render() {
   
        let addul = {
            background:"#399",
            height:"800px",
            width:"500px",
            margin:" 0 auto"

        }
        return (
            <div>
                   <ul style={addul}>
                     <li>{this.props.mytextlist} 
                     <button onClick={()=>this.buttonclick()}>按钮</button></li>
                    </ul>
            </div>
        )
    }
    buttonclick(){
       this.props.myotherOnclick()
    }
}
export default class Bpp extends Component {
    render() {
        let addipt = {
            margin:" 30px auto",
            paddingLeft:"200px"
        }
        return (
            <div>
                <p style={addipt}>
                    <input  type="text" ref="iptval" autoComplete="off"></input>
                    <button  onClick={this.hanclick.bind(this)}>增加</button>
                </p>
                {/*   父组件通过这样的方式传递给子组件mylist={this.state.list} 子通过props 属性接受传过来的参数 */}
                   {
                       this.state.list.length ?
                       <List mylist={this.state.list} onXiayu={(index)=>{
                           console.log("父组件通过porps传给子组件一个方法",index)
                           this.delclick(index)
                       }}></List>
                       : <Other myotherOnclick={()=>{this.oneclick()}} mytextlist={this.state.mytextlist}></Other>
                   }
            </div>
        )
    }
    // 需求增加  当list=[] 时 显示出来文字 没有代办事项
    state={
        list:[],
        mytextlist:"没有代办事项！！！！"
    }
    oneclick=()=>{
        this.setState({
            mytextlist:"有代办事项！！！！  99999999999"
        })
    }
    //   hanclick   =   ()=>{}  就是把箭头函赋值给这给函数
    hanclick=()=>{
        console.log(this.refs.iptval.value)
        this.setState({
            list:[...this.state.list, this.refs.iptval.value ]
        })
    }
    delclick=(index) => {
         // 新定义一个数组 然后对这个数组 赋值
        let newist = [...this.state.list]
        // 对这个数组进行splice（） 抄作
        newist.splice(index,1)
        this.setState({
            list: newist
        })
        console.log(this.state.list)
    }

}
