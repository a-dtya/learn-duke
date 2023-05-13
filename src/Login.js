import React from 'react'
import "./login.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const handleToast=()=>{
        toast.success("Login Successfull",{
            position:"top-center"
        })
    }
  return (
    <>
    <div className='login'>
        <h3 className='login-title'>Welcome User</h3>
        <button className='login-btn' onClick={handleToast}>Login</button>
        <ToastContainer/>
    </div>
   
    </>
  )
}

export default Login