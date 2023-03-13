import { Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import SharedLayout from '../SharedLayout'

export default function ProtectedRoute({children, user}) {
  const navigation = useNavigate()
    if (!user){
        return <Navigate to={'/'}/>
    }
  return (<SharedLayout/>)
}
