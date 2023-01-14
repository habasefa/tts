import React, { useState, useEffect, useRef } from 'react'

import { signup } from '../backend-utils/user-utils'

import { Form, Input, Button, Alert } from 'antd'

import classes from '@/styles/signUp.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import emailjs from '@emailjs/browser'

interface IProps {
  setSignUp: (authState: boolean) => void
}

export default function SignUp() {
  // ? track mounted state
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const [loggingIn, setLoggingIn] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [passwordLength, setPasswordLength] = useState(0)

  const router = useRouter()
  const onFinish = (values: any) => {
    const templateParams = {
      from_name: 'Naboni',
      sender_email: 'naboni.abebe.m@gmail.com',
      send_to: values.email,
      message: 'Welcome to Temaribet.',
    }
    setLoggingIn(true)
    setErr('')
    setShowAlert(false)
    console.log(values.email)
    console.log(values.passoword)
    signup(values.email, values.password, 'TUTOR')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          emailjs
            .send(
              process.env.EMAIL_SERVICE_ID!,
              process.env.EMAIL_TEMPLATE_ID!,
              templateParams,
              process.env.EMAIL_PUBLIC_KEY
            )
            .then(
              (response) => {
                console.log('SUCCESS!', response.status, response.text)
              },
              (err) => {
                console.log('FAILED...', err)
              }
            )
          router.replace('/login')
        } else {
          setErr(data.message)
        }
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
      .finally(() => {
        if (isMounted.current) {
          // ? preserve memory leak
          // ? state is updated only if mounted
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
        <div className="">
          <div className="mx-auto max-w-lg">
            <a href="/">
              <h1 className="font-typograhica text-center text-4xl text-[#FED607] lg:text-5xl 2xl:text-7xl">
                temaribet
              </h1>
            </a>
          </div>
          <div className="mx-auto mb-2 max-w-lg  text-center">
            <p className="">
              Have an account?{' '}
              <a
                href="/login"
                className="pl-5 font-bold text-[#1A3765] hover:underline"
              >
                Log in
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
                    minLength={8}
                    size="large"
                    placeholder="Enter password"
                    onChange={(e) => setPasswordLength(e.target.value.length)}
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
                <label
                  className="mb-1 block text-xl  text-gray-500 2xl:text-2xl "
                  htmlFor="password"
                >
                  <h4 className="text-xl">Confirm Password</h4>
                </label>
                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error(
                            'The two passwords that you entered do not match!'
                          )
                        )
                      },
                    }),
                  ]}
                  className="mb-2 rounded pt-1 "
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter password"
                    className="w-full  border border-gray-400 bg-gray-200 px-3 pb-3 text-gray-700 transition duration-500 focus:border-gray-900 focus:outline-none"
                  />
                </Form.Item>
                <div className="flex justify-start">
                  <a
                    href="#"
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
                    Sign up
                  </Button>
                </Form.Item>
               
                
               
              </Form>
            </div>
          </div>

          <div className="mx-auto mt-5 flex max-w-lg justify-center ">
            <p className=" text-center text-xl">
              &copy;2022 Temaribet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
