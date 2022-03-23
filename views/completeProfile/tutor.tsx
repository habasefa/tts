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
} from 'antd'
const { Option } = Select
import classes from '@/styles/completeProfile.module.css'
import ImgCrop from 'antd-img-crop'
import { storage } from '../../utils/firebase'
import { ref } from 'firebase/storage'
import { createTutor } from 'backend-utils/tutor-utils'
import { useRouter } from 'next/router'

function Tutor({ user }: any) {
  const router = useRouter()
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  const [complete, setComplete] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [birthDate, setBirthDate] = useState('')

  //   subject select
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
    if (fileList.length !== 1) {
      notification.error({
        message: 'Only 1 image is required!',
      })
      return
    }
    // const storageRef = ref(storage, `/files/${fileList[0].name}`)
    const date = new Date(birthDate)

    const userInfo = {
      fullName: value.fullName,
      email: user.user.email,
      phone: value.phone,
      gender: value.gender,
      subjects: value.subjects,
      birthDay: date,
      acadStatus: value.acadStatus,
      UEE: parseInt(value.UEE),
      cGPA: value.cGPA,
      field: value.field,
      college: value.college,
      volenteerism: value.volunteerism,
      prevTutored: true,
      prevTutorGrades: value.prevTutorGrades,
      prevTutorExperience: value.prevTutorExperience,
      idealTutor: value.idealTutor,
      preferredBank: value.preferredBank,
      bankAccountNo: value.bankAccountNo,
      contactName: value.contactName,
      contactPhone1: value.contactPhone1,
      contactPhone2: value.contactPhone2,
      contactEmail: value.contactEmail,
      workDays: parseInt(value.workDays),
      workHour: parseInt(value.workHour),
      location: value.location,
      essay: value.essay,
      hobby: value.hobby,
      profilePicture: '',
      token: user.accessToken,
    }

    createTutor(userInfo)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          router.replace('/protected')
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

  //   !Image upload related
  const validImageTypes = ['image/png', 'image/jpeg', 'image/jpg']
  const [fileList, setFileList] = useState(Array<any>())

  const props = {
    name: 'file',
    beforeUpload: (file: any) => {
      if (!validImageTypes.includes(file.type)) {
        notification.error({
          message: `${file.name} is not a valid file type`,
        })
        return Upload.LIST_IGNORE
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        notification.error({
          message: 'Image must smaller than 2MB!',
        })
        return Upload.LIST_IGNORE
      }
      setFileList([])
      setFileList((state) => state.concat(file))
      return false
    },
    onRemove: (file: any) => {
      setFileList((state) => state.filter((f) => f.name !== file.name))
    },
  }

  return (
    <div>
      <h2 className={classes.header}>Complete your profile</h2>
      <p className={classes.subHeader}>
        This helps parents understand you better.
      </p>
      <div className={classes.wrapper}>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Upload your profile picture"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <ImgCrop rotate maxZoom={5}>
              <Upload
                listType="picture-card"
                {...props}
                //   onPreview={onPreview}
                fileList={fileList}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item>

          <Form.Item
            label="Full name"
            name="fullName"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}
          >
            <Input maxLength={50} />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input maxLength={15} showCount />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select a option and change input text above">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="subjects"
            label="Subjects you would like to tutor on."
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
          <Form.Item
            label="Birthday"
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
          <Form.Item
            name="acadStatus"
            label="Academic Status"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="underGraduate">Under Graduate</Option>
              <Option value="postGraduate">Post Graduate</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="UEE"
            name="UEE"
            rules={[
              {
                required: true,
                message: 'Please input your UEE!',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Cumulative GPA"
            name="cGPA"
            rules={[
              {
                required: true,
                message: 'Please input your cGPA!',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Field of study"
            name="field"
            rules={[
              {
                required: true,
                message: 'Please input your field of study!',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="What University/College are you attending"
            name="college"
            rules={[
              {
                required: true,
                message: 'Please input your field of study!',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Volunterism"
            name="volunteerism"
            rules={[
              {
                required: true,
                message: 'Please input your participation in volunterism!',
              },
            ]}
          >
            <Input maxLength={500} showCount />
          </Form.Item>
          <Form.Item
            name="prevTutored"
            label="Tutoring Experience"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="prevTutorGrades"
            label="Previously Tutoried Grades"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="kindergarten">Kindergarten</Option>
              <Option value="elementary">1-8</Option>
              <Option value="highschool">9 & 10</Option>
              <Option value="preparatory">11 & 12</Option>
              <Option value="university">University</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Strength and Weakness on your previous Tutor Experience"
            name="prevTutorExperience"
            rules={[
              {
                required: true,
                message:
                  'Please input your strength and weakness in your tutoring experience!',
              },
            ]}
          >
            <Input maxLength={500} showCount />
          </Form.Item>
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
          <Form.Item
            label="Preferred bank."
            name="preferredBank"
            rules={[
              {
                required: true,
                message: 'Please input your preferred bank!',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            label="Bank account number"
            name="bankAccountNo"
            rules={[
              {
                required: true,
                message: 'Please input bank account number!',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            label="Contact's full name"
            name="contactName"
            rules={[
              {
                required: true,
                message: "Please input your contact's full name!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            label="Contact's phone number"
            name="contactPhone1"
            rules={[
              {
                required: true,
                message: "Please input your contact's phone number!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            label="Contact's other phone number"
            name="contactPhone2"
            rules={[
              {
                required: true,
                message: "Please input your contact's other phone number!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Contact's email"
            name="contactEmail"
            rules={[
              {
                required: true,
                message: "Please input your contact's phone number!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Work days"
            name="workDays"
            rules={[
              {
                required: true,
                message: 'Please input preferred work day/days',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Work hours"
            name="workHour"
            rules={[
              {
                required: true,
                message: 'Please input preferred work hour/hours',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: 'Please input your location',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Essay"
            name="essay"
            rules={[
              {
                required: true,
                message: 'Please write an essay',
              },
            ]}
          >
            <Input.TextArea maxLength={500} showCount />
          </Form.Item>
          <Form.Item
            label="Hobby"
            name="hobby"
            rules={[
              {
                required: true,
                message: 'Please input your hobby',
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={complete}>
              Complete profile
            </Button>
          </Form.Item>
        </Form>
        <br />
        {showAlert && <Alert message={err} type="error" />}
      </div>
    </div>
  )
}

export default Tutor
