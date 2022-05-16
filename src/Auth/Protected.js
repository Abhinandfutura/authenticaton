import React from 'react'
import { Route,Navigate}from 'react-router-dom'


const Protected=({ component , ...rest})=> {
  console.log("componenet", component);



    let RenderComponent=component;
    let hasToken=JSON.parse(localStorage.getItem('auth'))

  return (
<Route
         {...rest}
         render={(props) =>
        hasToken!==null ?  (<RenderComponent {...props} />) :( <Navigate  to="/login" />)
         }
       />
      
  
      


 
  )
}

export default Protected