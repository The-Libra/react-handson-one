import React from 'react'

function FuncCompo() {
  return (
    <div>
      <div className="cards func">
        <h1>This is from Functional Component</h1>
        <p style={{color: "blue", fontWeight: "bold"}}>This styling is done using inline css</p>
        <p className='ptag'>This styling is done using external css</p>
      </div>
    </div>
  );
}

export default FuncCompo