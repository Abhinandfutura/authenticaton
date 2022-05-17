import React from 'react'
import { Outlet, Navigate } from "react-router-dom";


 const Protected=()=> {
  
    let hasToken=JSON.parse(localStorage.getItem('auth'))

  return (


       hasToken!==null ?  <Outlet/>: <Navigate to='/'/>
      
  )
    }
    
      
  
      


 


export default Protected