import React from 'react'
import { Route,useNavigate}from 'react-router-dom'


const Protected=({component , ...rest})=> {
  console.log("componenet", component);
const   navigate=useNavigate()
    let RenderComponent=component;
    let hasToken=JSON.parse(localStorage.getItem('auth'))

  return (
      <Route
      {...rest}

      render={props =>{ 
        
        if(hasToken!==null){
        return  <RenderComponent {...props}/>

      }else{

        return  navigate('/login')
      }
    }}
      
      />

 
  )
}

export default Protected