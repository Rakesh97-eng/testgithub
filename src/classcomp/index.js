import {Component} from "react";

class FirstClass extends Component{
    // js
    name = "Rakesh"
    state={count:2,age:"55"}
     handleAlert(){
        // alert("Hi welcome")
       this.setState({count:this.state.count + 1})
    }

    // componentDidMount(){
    //     console.log("this is mounting phase");
    //     alert("welcome to React")
    // }

    // componentDidUpdate(){
    //     console.log("this is update phase");
    // }

    // componentWillUnmount(){
    //     console.log("this is component will unmount");
    // }

    render(){
        return(
            // html space
            <div>
                {this.name} {this.state.count} {this.state.age}
                <h1>This is my class components</h1>
                <button onClick={()=>this.handleAlert()}>show Alert</button>
            </div>
        )
    }
}

export default FirstClass;