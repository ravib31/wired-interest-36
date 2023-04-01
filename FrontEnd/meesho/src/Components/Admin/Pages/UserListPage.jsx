import { useEffect } from 'react'
import axios from "axios"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { get_user_list } from '../Redux/AdminRedux/action';
import { store } from '../Redux/store';
import SingleUser from './SingleUser';

export const UserListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_user_list)
  }, [])
  const {User , isLoading ,isError} = useSelector((store)=>{return { User : store.Users, isLoading: store.isLoading, isError:store.isError}})
  console.log("User",User)

  return (
    <div>
      <h1>User List</h1>
      {User.map((el)=>(<SingleUser key={el._id} {...el} /> ))}
    </div>
  )
}
