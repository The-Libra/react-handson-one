
import React, { Component } from "react";
import './App.css';
import ClassCompo from './ClassCompo';
import FuncCompo from './FuncCompo';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
    classCompo: false,
    funcCompo: false
  };
}
  render(){
    return (
    <div className="App">
      <div className="btns">
      <button type="button" onClick={()=>this.setState({classCompo: !this.state.classCompo})}>Class Component</button>
      <button type="button" onClick={()=>this.setState({funcCompo: !this.state.funcCompo})}>Functional Component</button>
      </div>
     <div className="container">
     {this.state.classCompo && <ClassCompo />}
     {this.state.funcCompo && <FuncCompo />}
     </div> 
     
     
    </div>
  );
}
}
export default App;
