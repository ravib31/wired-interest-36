import React, { useEffect } from 'react'
import axios from "axios"

const getUserList = () =>{
  axios.get(`localhost:4500/user/Adminuserget`)
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
}

export const UserListPage = () => {
  useEffect(()=>{
getUserList()
  },[])
  return (
    <div>UserListPage</div>
  )
}
