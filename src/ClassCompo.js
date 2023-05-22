import React, { Component } from 'react'
class ClassCompo extends Component {
  render() {
    return (
        <div>
          <div className="cards class">
        <h1>This is from Class Component</h1>
        <p style={{color: "blue", fontWeight: "bold"}}>This styling is done using inline css</p>
        <p className='ptag'>This styling is done using external css</p>
          </div>
        </div>
    );
  }
}

export default ClassCompo