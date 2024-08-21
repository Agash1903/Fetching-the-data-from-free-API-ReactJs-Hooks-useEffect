// import React from 'react'
// import ReactDOM from 'react-dom'
// import React ,{usestate,useeffect} from 'react'
// import App from './App.jsx'
// import './index.css'
// import './main.css'

// class Reactstate extends React.Component{
//     constructor(){
//         super();
//         this.state={obj1:"Welcome to my page",obj2:"Hello vadakku"};
//     }
//     changevalue=()=>{
//         this.setState({obj1:"Hello my friend",obj2:"Hello"})
//     }
//     render(){
//         return(<div><h1>{this.state.obj1},{this.state.obj2}</h1>
//         <button type='button' onClick={changevalue}>Change th Content</button> </div>
//         );
//     }
   
// }
// ReactDOM.render(<Reactstate/>,document.getElementById('root'));

// Use Effect

import React from 'react';
import ReactDOM from 'react-dom';
// import { useState,useEffect } from 'react';
import EmployeeForm from './EmployeeForm';


// function ExampleRender(){
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         if(count<200){
//     setTimeout(() =>{
//         setCount(count =>count+1)
//     },1000)}
// }
// );

// return(
//     <h1>Website Counting details {count} times</h1>
// )
// }

// ReactDOM.render(<ExampleRender />,document.getElementById("root"));

// function Userdemo(){
//     const [users,setUsers] = useState([]);
//     const [loading,setLoading] = useState(true);

// useEffect(()=>{
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>{
//       setUsers(data);
//       setLoading(false);
//       })
//     .catch (error =>{
//         console.error("if it is not loading will be error message");

//         setLoading(false);
//     });
// },[]);
//     if(loading){
//         return <p>Loading.....</p>;
//     }

//     return(
//         <div>
//         <h1>List out the Users in API</h1>
//         <ol>
//             {users.map(user => (
//                 <h2><li key={user.id}>{user.name}---{user.email}</li></h2>
//             ))}
//         </ol>
//         </div>
//     );
// }
// ReactDOM.render(<Userdemo />,document.getElementById("root")) ;

// const Ternary = (props) => {
//     return (
//         <div>
//             {props.valid? <h2>You are valid User</h2> : <h2>You are invalid User</h2>}
//         </div>
//     )
// }

// // const Switch = ({user}) => {

// //     switch (user) {
// //         case "Dhana":
// //             return (
// //                 <h2>Welcome {user}</h2>
// //             )
// //             break;
// //         case "Selvan":
// //             return (
// //                 <h2>Welcome {user}</h2>
// //             )
// //             break;
// //         default:
// //             return (
// //                 <h2>You logged with the default user</h2>
// //             )
// //     }
// // }

// // export default Switch;

function App() {
    return (
      <div >
        <EmployeeForm/>
        {/* <Switch user="Dhana" /> */}
        {/* <Ternary valid="true" /> */}
      </div>
    );
  }
  
  export default App;
  ReactDOM.render(<EmployeeForm/>,document.getElementById('root'));