import React, { useState, useEffect, useRef } from 'react'

import { changePassword, signin } from '../backend-utils/user-utils'
import { useRouter } from 'next/router'

import { Form, Input, Button, Alert } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from 'redux/userSlice'


import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { getUserById } from '../backend-utils/user-utils'
import classes from '@/styles/signUp.module.css'


export default function Login() {
  // ? track mounted state
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const router = useRouter()
  const user = useSelector(selectUser)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [oldPassword, setOldPassword] = useState(null)

  const [loggingIn, setLoggingIn] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading,setIsLoading]=useState(true)
  const [passwordLength, setPasswordLength] = useState(0)
  const dispatch = useDispatch()
  if (user) {
    
    var token = user.accessToken
    var id = user.user.id
  }
  useEffect(() => {
    
    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
       
        setEmail(data.email)
     
        setIsLoading(false)
       
      })
      .catch((_) => {
     
      })
  }, [])

  const onFinish = (values) => {
    setLoggingIn(true)
    setErr('')
    setShowAlert(false)
    console.log(email,password)
    changePassword(id,token,{password:password , oldPassword:oldPassword})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success)
        {
          router.push('/')
        }
        else {
          if (data.status != 500)
          {
          setErr(data.message)
          }
          else{
            setErr('Something went wrong')
          }
        }
       
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
     <Backdrop
        sx={{ color: '#fff', backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="info" />
      </Backdrop>
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
                  htmlFor="oldpassword"
                >
                  <h4 className="text-xl">Old Password</h4>
                </label>
                <Form.Item
                  name="oldpassword"
                  rules={[
                    { required: true, message: 'Please input your Old password!' },
                  ]}
                  className="mb-2 rounded pt-1 "
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter Old password"
                    value={password}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full  border border-gray-400 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-900 focus:outline-none"
                  />
                </Form.Item>
              
                <label
                  className="mb-1 block text-xl  text-gray-500 2xl:text-2xl "
                  htmlFor="password"
                >
                  <h4 className="text-xl">New Password</h4>
                </label>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (getFieldValue('password').length < 8) {
                          return Promise.reject(
                            new Error('Password must be minimum 8 characters.')
                          )
                        }
                        return Promise.resolve()
                      },
                    }),
                  ]}
                  className="mb-2 rounded pt-1 "
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value); setPasswordLength(e.target.value.length) }}
                    className="w-full  border border-gray-400 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-900 focus:outline-none"
                  />
                </Form.Item>
                <div className={classes.strength}>
                  <span
                    className={`${classes.box} ${
                      passwordLength >= 2 && classes.strongO
                    }`}
                  ></span>
                  <span
                    className={`${classes.box} ${
                      passwordLength >= 4 && classes.strongO
                    }`}
                  ></span>
                  <span
                    className={`${classes.box} ${
                      passwordLength >= 6 && classes.strong
                    }`}
                  ></span>
                  <span
                    className={`${classes.box} ${
                      passwordLength >= 8 && classes.strong
                    }`}
                  ></span>
                </div>
                
               
                <Form.Item>
                  <Button
                    size="large"
                    loading={loggingIn}
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: '#1A3765', border: '#1A3765' }}
                  >
                    Change Password
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
    </>
  )
}
