import React, { Component } from 'react'
import myPropTypes from 'prop-types'
// 3333333333333333333333333333333333333333333333333333
 class Childb extends Component {

    render() {
        let mycolr={
            backgroundColor:"red",
            height:" 530px",

        }
        return (
            <div style={mycolr}>
                {/* this.state.xianshi? */}
                <div>内容   <span onClick={()=>{this.eeeee()}}>给爷爷的-----{ this.props.mysonclick( )}</span></div>
                {/* :<div>空空乳业</div> */}
            </div>
        )
    }
    eeeee=()=>{
        this.props.mysonclick( )
    }
    
}

// 222222222222222222222222222222222222222

export class Child extends Component {
    // 通过这个属性去设置属性检验 
    static propTypes = {
        mytext: myPropTypes.bool,
        myheader: myPropTypes.string


    }
    // 默认属性
    static defaultProps = {
        mytext:true,
        myheader:"这是首页页面"
    }
    render() {
        let box ={
            display: "flex",
            justifyContent: "space-around",
            height:" 30px",
            backgroundColor: "turquoise",
        } 
        return (
            <div>
                      <h2>{this.props.myheader}</h2>

                    {
                      this.props.mytext?
                        <div style={box}>
                            <div>详情</div>
                            <div onClick={()=>{this.wwwwww()}}>介绍</div>
                            <div>留言</div>
                        </div>
                      : null
                    }
                        <Childb mysonclick={()=>{this.wwwwww()}}></Childb>

            </div>
        )
    }
    wwwwww=()=>{
        this.props.myclick()
    }
}

// 11111111111111111111111111111111

export default class Cpp extends Component {
   state={
       bulala:"000000000000000",
       xianshi:true
   }
   static propTypes = {
    xianshi:myPropTypes.bool

    }
    // 默认属性
    // static defaultProps = {
    //     xianshi:true,
    // }

    render() {
        return (
            <div >
              <Child mytext={true} myclick={()=>{this.qqqqqq()}}/>
            </div>
        )
    }
    qqqqqq=()=>{
        console.log("我是爷爷 给孙子一个  111111")
        this.setState({
            xianshi:!this.state.xianshi 
        })
    }
}
