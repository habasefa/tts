import React, { useState, useEffect, useRef } from 'react'

import { signin } from '../backend-utils/user-utils'
import { useRouter } from 'next/router'

import { Form, Input, Button, Alert } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from 'redux/userSlice'

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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loggingIn, setLoggingIn] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    setLoggingIn(true)
    setErr('')
    setShowAlert(false)
    console.log(email,password)
    signin(email, password)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(
            login({
              user: data.user,
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
              loggedIn: true,
            })
          )
          if (data.user.role === 'TUTOR' && data.user.tutor === null)
          {
            router.push('/complete-profile')
          }
          else if (data.user.role=== 'TUTOR'){
            router.push('/')
          }
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
  const onFinishFailed = (errorInfo: any) => {}

  useEffect(() => {
    if (err != '') {
      setShowAlert(true)
    }
  }, [err])

  const user = useSelector(selectUser)
  useEffect(() => {
    if (user) router.push('/')
  }, [])

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
          <div className="mx-auto mb-2 max-w-lg  text-center">
            <p className="">
              Don't have an account?{' '}
              <a
                href="/signup"
                className="pl-5 font-bold text-[#1A3765] hover:underline"
              >
                Sign up
              </a>
              .
            </p>
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
                  className="mb-1 block text-xl text-gray-500 2xl:text-2xl "
                  htmlFor="email"
                >
                  <h4 className="text-xl">Email</h4>
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
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full  border border-gray-400 bg-gray-200  px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-900 focus:outline-none"
                  />
                </Form.Item>
                <label
                  className="mb-1 block text-xl  text-gray-500 2xl:text-2xl "
                  htmlFor="password"
                >
                  <h4 className="text-xl">Password</h4>
                </label>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                  className="mb-2 rounded pt-1 "
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full  border border-gray-400 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-900 focus:outline-none"
                  />
                </Form.Item>
                <div className="flex justify-start">
                  <a
                    href="/forgotPassword"
                    className="text-md mb-2 text-[#1A3765]  hover:text-gray-600  2xl:text-lg"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Form.Item>
                  <Button
                    size="large"
                    loading={loggingIn}
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: '#1A3765', border: '#1A3765' }}
                  >
                    Log in
                  </Button>
                </Form.Item>
                
              </Form>
            </div>
          </div>

          <div className="mx-auto mt-5 flex max-w-lg justify-center ">
            <p className=" text-center text-xl 2xl:text-2xl">
              &copy;2023 Temaribet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
