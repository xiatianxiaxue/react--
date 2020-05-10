import React, { Component } from 'react'
const GlobalContext = React.createContext()
class Context extends Component {
    render() {
         
        return <GlobalContext.Consumer>
            {
                context=>{
                   //  在这里可以是方法
                    return(
                        <div>
                           我是一个context组件！！！！<span>我要获取服务:{context.serve}</span>
                           <hr></hr>
                          <button onClick={()=>{context.show()}}>按钮</button>
                       </div>
                    )  
                }
            }
            
        </GlobalContext.Consumer>
    }
}

export default  class App extends Component {
    state={
        isshow:true,
        serve:"app提供的短信fw"
    }
    show=()=>{
        console.log("我让别人给玩了")
        this.setState({
                isshow:false
            })
    }
    render() {
        return  <GlobalContext.Provider
                 value={{
                     name:"电话服务",
                     serve:this.state.serve,
                     show:this.show.bind(this)

                 }}
                       
                >
                    <div>
                    我是一个ap组件
                    {
                        this.state.isshow ?
                        <Context></Context>
                       : <h2>788888888887878</h2>
                    }
                    </div>
           </GlobalContext.Provider>
    }
}
