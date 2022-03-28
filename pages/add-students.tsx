import React, { useEffect, useRef, useState } from 'react'
import {
  Form,
  Input,
  Button,
  Alert,
  Upload,
  notification,
  Select,
  DatePicker,
  Row,
  Col,
} from 'antd'

import classes from '@/styles/completeProfile.module.css'
import ImgCrop from 'antd-img-crop'
import { createStudent, getParentById } from 'backend-utils/parent-utils'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import Header from '@/components/Header'
import CenterContent from '@/components/CenterContent'
const { Option } = Select

function AddStudents() {
  const user = useSelector(selectUser)
  const router = useRouter()
  const isMounted = useRef(false)

  const [complete, setComplete] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [birthDate, setBirthDate] = useState('')
  const [hadPrevTutor, setHadPrevTutor] = useState(false)

  const parentId = user.user.parent.id

  const children = []
  const subjects = [
    'Mathematics',
    'English',
    'Biology',
    'Physics',
    'Chemistry',
    'History',
    'Geography',
    'Civics',
    'SAT',
  ]
  for (let i = 0; i < subjects.length; i++) {
    children.push(<Option key={subjects[i]}>{subjects[i]}</Option>)
  }

  const onFinish = (value: any) => {
    const date = new Date(birthDate)

    const userInfo = {
      fullName: value.fullName,
      nickName: value.nickName,
      gender: value.gender,
      birthDay: date,
      subjects: value.subjects,
      grade: value.grade,
      address: value.address,
      school: value.school,
      hobby: value.hobby,
      prevTutored: hadPrevTutor,
      prevTutorExperience: value.prevTutorExperience,
      idealTutor: value.idealTutor,
      workDays: parseInt(value.workDays),
      workHour: parseInt(value.workHour),
      token: user.accessToken,
      parentId: parentId,
    }

    createStudent(userInfo)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
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
          setComplete(false)
        }
      })
  }

  useEffect(() => {
    if (user == null) router.push('/')
  }, [])

  function handleChange(value: any) {
    let x: boolean
    value == 'yes' ? (x = true) : (x = false)
    setHadPrevTutor(x)
  }

  return (
    <div className="mainContentWithLeftMargin">
      <Header />
      <CenterContent>
        <div>
          <h2 className="mt-6 text-center font-mono text-3xl text-gray-900">
            Fill students information
          </h2>
          <p className={classes.subHeader}>
            This helps us find suitable tutor for your student.
          </p>

          <div className={classes.wrapper}>
            <Form
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[20, 0]} justify="center">
                <Col md={12} sm={24}>
                  <Form.Item
                    label="Full name?"
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your full name!',
                      },
                    ]}
                  >
                    <Input maxLength={50} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item label="Nick name?" name="nickName">
                    <Input maxLength={50} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Select your gender">
                      <Option value="Male">Male</Option>
                      <Option value="Female">Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="Date of birth"
                    name="birthDay"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your birth date!',
                      },
                    ]}
                  >
                    {/* <Input maxLength={50} showCount /> */}
                    <DatePicker
                      onChange={(date, dateString) => setBirthDate(dateString)}
                    />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    name="subjects"
                    label="Subjects you would like to get tutored on."
                    rules={[{ required: true }]}
                  >
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select"
                    >
                      {children}
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    name="grade"
                    label="Current Grade"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Select your grade" allowClear>
                      <Option value="kindergarten">Kindergarten</Option>
                      <Option value="elementary">1-8</Option>
                      <Option value="highschool">9 & 10</Option>
                      <Option value="preparatory">11 & 12</Option>
                      <Option value="university">University</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="School name"
                    name="school"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your nick name!',
                      },
                    ]}
                  >
                    <Input maxLength={50} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your address!',
                      },
                    ]}
                  >
                    <Input maxLength={50} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="Ideal tutor in one word."
                    name="idealTutor"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your ideal tutor in one word!',
                      },
                    ]}
                  >
                    <Input maxLength={50} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    name="prevTutored"
                    label="Have you been tutored previously"
                    rules={[{ required: true }]}
                  >
                    <Select
                      placeholder="Please choose"
                      allowClear
                      onChange={handleChange}
                    >
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={12} sm={24}>
                  <Form.Item
                    label="How many hours per day?"
                    name="workHour"
                    rules={[
                      {
                        required: true,
                        message: 'Please input preferred work hour/hours',
                      },
                    ]}
                  >
                    <Input maxLength={2} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="How many day per week"
                    name="workDays"
                    rules={[
                      {
                        required: true,
                        message: 'Please input preferred work day/days',
                      },
                    ]}
                  >
                    <Input maxLength={1} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="Hobby"
                    name="hobby"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your hobby!',
                      },
                    ]}
                  >
                    <Input maxLength={30} showCount />
                  </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                  <Form.Item
                    label="Strength and Weakness on your previous Tutor Experience"
                    name="prevTutorExperience"
                  >
                    <Input.TextArea
                      maxLength={500}
                      disabled={!hadPrevTutor}
                      showCount
                    />
                  </Form.Item>
                </Col>
                <Col md={24} lg={24} sm={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={complete}>
                      Submit Information
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            <br />
            {showAlert && <Alert message={err} type="error" />}
          </div>
        </div>
      </CenterContent>
    </div>
  )
}

export default AddStudents
