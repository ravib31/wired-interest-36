import { useEffect } from 'react'
import axios from "axios"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { get_user_list } from '../Redux/AdminRedux/action';
import { store } from '../Redux/store';
import SingleUser from './SingleUser';
import AdminNavbar from '../Components/AdminNavbar';
import { wrap } from 'framer-motion';
import "./userlist.css";


export const UserListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_user_list)
  }, [])
  const { User, isLoading, isError } = useSelector((store) => { return { User: store.Users, isLoading: store.isLoading, isError: store.isError } })
  console.log("User", User)

  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className='container' >
        {User.map((el) => (
        <div className='item' >
        <SingleUser  key={el.id} {...el} />
        </div>
        ))}
      </div>
    </div>
  )
}
