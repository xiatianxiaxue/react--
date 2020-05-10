import React, { Component } from 'react'
import myPropTypes from 'prop-types'

//订阅发布模式 
const bus = {
    list:[],
    //订阅方法
    subscribe(callback){
        // console.log(callback)
        // 收集callback
        this.list.push(callback)
    },

    // 发布方法
    dispatch(data){
        // 遍历list ，讲list里面的每一个函数 进行回调调用
        console.log(this.list[0])

        this.list[0](data) //回调
    }
}




class Centext extends Component {
    // static propTypes = {
    //     prop: myPropTypes
    // }

    render() {
        let box2={
            height:"400px",
            width:"500px",
            backgroundColor:"#399"
        }
        return (
            <div style={box2}>
                内容1111111111111111
            </div>
        )
    }
}

class Centextrrrr extends Component {
    // static propTypes = {
    //     prop: myPropTypes
    // }

    render() {
        let box2={
            height:"400px",
            width:"500px",
            backgroundColor:"#399"
        }
        return (
            <div style={box2}>
                内容2222222222222
            </div>
        )
    }
}



export default class Dpp extends Component {
    static propTypes = {
        chuaxian: myPropTypes.bool
    }
    state={
       chuaxian:true 
    }
    // 订阅者订阅方法调用
    componentDidMount(){
         
        bus.subscribe((data)=>{
            console.log("app组件中定义的回调函数",data)
            this.setState({
                chuaxian:!this.state.chuaxian
            })
        })
    }


        render() {
        let box ={
            display:"flex",
            justifyContent: "space-evenly",
            backgroundColor: "pink",
            width:"500px",
            height:"100px",
        }
        return (
            <div>
                <p style={box}>
                    <button onClick={()=>{
                        bus.dispatch()
                    }}>1</button>
                    <button onClick={()=>{
                         //发布
                        bus.dispatch("来自侄儿的问候") //
                    }}>2</button>
                </p>
                {
                   this.state.chuaxian?
                   <Centext></Centext>
                  :<Centextrrrr></Centextrrrr>  
                }
               
            </div>
        )
    }
}
