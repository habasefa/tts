import React, { useState, useEffect, useRef } from 'react'
import { changePassword, forgotPassword, signin } from '../backend-utils/user-utils'
import { useRouter } from 'next/router'

import { Form, Input, Button, Alert } from 'antd'

import Snackbar from '@mui/material/Snackbar';

import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from 'redux/userSlice'


import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { getUserById } from '../backend-utils/user-utils'


export default function ForgotPassword() {
  // ? track mounted state
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
 

  const router = useRouter()
 


  const handleClose = (event, reason) => {

    setOpen(false);
  };


  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const [loggingIn, setLoggingIn] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)

 
  const onFinish = (values) => {
    setLoggingIn(true)
    setErr('')
    setShowAlert(false)
    
    forgotPassword(email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log(open)
        setOpen(true)
        router.push('/')
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
      .finally(() => {
        if (isMounted.current) {
          setLoggingIn(false)
        }
      })
  }
  const onFinishFailed = (errorInfo) => {}

  useEffect(() => {
    if (err != '') {
      setShowAlert(true)
    }
  }, [err])


  return (
    <>
    
      <div className="font-minionPro mx-auto min-h-screen bg-white  p-6 sm:bg-white md:bg-white lg:bg-[#f1f1f1]">
        <div className=" w-full">
          <div className="mx-auto max-w-lg">
            <a href="/">
              <h1 className="font-typograhica text-center  text-4xl text-[#FED607] lg:text-5xl  2xl:text-7xl">
                temaribet
              </h1>
            </a>
          </div>
         

          <div className="  mx-auto my-2 max-w-lg rounded-3xl bg-white p-8 md:p-10 md:px-20 lg:shadow-2xl ">
            <div className="mt-2">
              {showAlert && (
                <Alert
                  message={err}
                  type="error"
                  style={{ margin: '0 0 1rem' }}
                />
              )}

              <Form
                className="flex flex-col"
                layout="vertical"
                onFinish={onFinish}
              >
              
                <label
                  className="mb-1 block text-xl  text-gray-500 2xl:text-2xl "
                  htmlFor="email"
                >
                  <h4 className="text-xl">Enter your Email Address</h4>
                </label>
                <Form.Item
                  name="email"
                  
                  rules={[
                    { type: 'email' },
                    { required: true, message: 'Please input your email!' },
                  ]}
                  className="mb-2 rounded pt-1 "
                >
                  <Input
                    size="large"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full  border border-gray-400 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-900 focus:outline-none"
                  />
                </Form.Item>
                
               
                <Form.Item>
                  <Button
                    size="large"
                    loading={loggingIn}
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: '#1A3765', border: '#1A3765' }}
                  >
                    Send Your Email Address
                  </Button>
                </Form.Item>
                
              </Form>
            </div>
          </div>

          <div className="mx-auto mt-5 flex max-w-lg justify-center ">
            <p className=" text-center text-xl 2xl:text-2xl">
              &copy;2022 Temaribet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <Snackbar  anchorOrigin={{vertical:'top', horizontal:'right'}} open={open} message='  A message is sent to your email'  autoHideDuration={6000} onClose={handleClose} />
      
        
       
      
    </>
  )
}
