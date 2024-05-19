import React from "react";
import "./style.css"

class AppClass extends React.Component{


  constructor(props){
    super(props);
    this.increasecount = this.increasecount.bind(this)
  }
  // js place
     
    state={count:5,name:"rakesh"}
    increasecount=()=>{
    //   this.state.count =  this.state.count+1
      this.setState({count:this.state.count+1})
      this.setState({name:"raj"})
      console.log("thissssss",this.state.count);
    }

    componentDidMount(){
      this.setState({name:"Rajkumar"})
      console.log("This is component didmout");
    }

    componentDidUpdate(){
      console.log("this is update phase");
    }

    componentWillUnmount(){
      console.log("this is unmount");
    }

    render(){
        return(
            <>
             <h2>This is App Class , My name is {this.state.name}</h2>
             <p>This is my value {this.state.count}</p>
             <button onClick={this.increasecount}>Increment</button>
            </>
           
        )
    }
}

export default AppClass;

// {} ==> interpolation
// onclick,onchange,onmousehover ==>synthetic events
// document.addeventlistn
// state. ==>class component is also called state full component
// state intial values, setstate
// life cycles
// componentdidmount
//componentdidupdate
// componentwillunmount

//Routing

