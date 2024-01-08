import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom';

const RequiereAuth = ({children}) => {

    const {user,setUser}=useContext(UserContext);

    if(!user){
        return <Navigate to="/login" />
    }else{
        return children;
    }
  return (
    <div>
      
    </div>
  )
}

export default RequiereAuth
