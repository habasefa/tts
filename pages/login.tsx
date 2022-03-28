import React, { useState, useEffect, useRef } from 'react'

import { signin } from '../backend-utils/user-utils'
import { useRouter } from 'next/router'

import { Form, Input, Button, Checkbox, Alert, Select } from 'antd'
const { Option } = Select

import classes from '@/styles/signUp.module.css'
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

    signin(email, password)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.user)
          dispatch(
            login({
              user: data.user,
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
              loggedIn: true,
            })
          )
          if (data.user.role === 'TUTOR' && data.user.tutor === null)
            router.push('/complete-profile')
          if (data.user.role === 'PARENT' && data.user.parent === null)
            router.push('/complete-profile')
          router.push('/')
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
    <div className="grid h-screen w-screen place-items-center">
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <a
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {' '}
                Create an account{' '}
              </a>
            </p>
          </div>

          <Form
            layout="vertical"
            initialValues={{ sendMail: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { type: 'email' },
                { required: true, message: 'Please input your email!' },
              ]}
            >
              <Input
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                loading={loggingIn}
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
          {showAlert && <Alert message={err} type="error" />}
        </div>
      </div>
    </div>
  )
}
