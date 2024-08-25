import React, { Component, useState } from 'react'

// export default class Reference extends Component {

//     constructor(props){
//         super(props)
//         this.inputref=React.createRef();
//     }

//     componentDidMount(){
//         this.inputref.current.focus();
//     }

//     handleClick=()=>{
//         alert(this.inputref.current.value);
//     }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputref} />
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     )
//   }
// }

import { useRef } from 'react'



const Reference = () => {
  const [state,setState]=useState(" ")
  const ref=useRef();
  const handleClick=()=>{
    // alert(ref.current.value);
    alert(state);
  }
  return (
    <div>
      <input ref={ref}  onChange={(e)=>setState(e.target.value)} type="text" />
      <button onClick={()=>alert(state)}>button</button>
    </div>
  )
}

export default Reference

