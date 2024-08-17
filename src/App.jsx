import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



class Reactstate extends React.Component{
  constructor(){
      super();
      this.state={obj1:"Welcome to my page",obj2:"Hello vadakku"};
  }
  changevalue=()=>{
      this.setState({obj1:"Hello my friend",obj2:"Hello"})
  }
  render(){
      return(<div><h1>{this.state.obj1},{this.state.obj2}</h1>
      <button type='button' onClick={changevalue}>Change th Content</button> </div>
      );
  }
 
}
ReactDOM.render(<Reactstate/>,document.getElementById('root'));



