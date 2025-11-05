import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import BasicBtn from '../common/Button/BasicBtn'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })

  }
  return (
    <BasicBtn onClick={logoutHandler}>Logout</BasicBtn>
  )
}

export default LogoutBtn
