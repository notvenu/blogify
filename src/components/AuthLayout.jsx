import React, { useEffect, useState } from 'react'
import Loader from './index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children, authentication=true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authStatus === true){
            navigate('/')
        } else if(authStatus === false){
            navigate('/login')
        }

        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
  return loader ? <Loader/> : <div>{children}</div>
}

export default AuthLayout
