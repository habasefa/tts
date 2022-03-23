import React, { useState, useEffect, useRef } from 'react'

import { signup } from '../backend-utils/user-utils'

import { Form, Input, Button, Checkbox, Alert, Select } from 'antd'
const { Option } = Select

import classes from '@/styles/signUp.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'

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
    setLoggingIn(true)
    setErr('')
    setShowAlert(false)

    signup(values.email, values.password, values.role)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
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
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {' '}
                Already have an account{' '}
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
              <Input placeholder="Enter email address" />
            </Form.Item>

            <Form.Item
              name="role"
              label="Choose role"
              rules={[{ required: true, message: 'Please choose your role!' }]}
            >
              <Select placeholder="Choose your role" defaultValue={'TUTOR'}>
                <Option value="TUTOR">Tutor</Option>
                <Option value="PARENT">Parent</Option>
              </Select>
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
                onChange={(e) => setPasswordLength(e.target.value.length)}
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

            <Form.Item
              name="confirm"
              label="Confirm Password"
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
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error('You should accept our terms & policies')
                        ),
                },
              ]}
            >
              <Checkbox>
                I have read and agreed to the{' '}
                <a href="">{'terms & policies'}</a>
              </Checkbox>
            </Form.Item>

            <Form.Item name="sendMail" valuePropName="checked">
              <Checkbox className={classes.mssg}>
                Digital may send you emails and messages with news, events,
                promotional information, and updates. You may opt out at any
                time in your user settings.
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                loading={loggingIn}
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Sign up
              </Button>
            </Form.Item>
          </Form>
          {showAlert && <Alert message={err} type="error" />}
        </div>
      </div>
    </div>
  )
}
