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
  InputNumber,
} from 'antd'
const { Option } = Select
import classes from '@/styles/completeProfile.module.css'
import ImgCrop from 'antd-img-crop'
import { storage } from '../../utils/firebase'
import { createTutor } from 'backend-utils/tutor-utils'
import { useRouter } from 'next/router'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

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
  const [tutorExperience, setTutorExperience] = useState(false)
  const [profileUrl, setProfileUrl] = useState('')

  //   subject select
  const children = []
  const subjects = [
    'Mathematics',
    'English',
    'Amharic',
    'Afan Oromo',
    'Physics',
    'Biology',
    'Chemistry',
    'History',
    'Geography',
    'Music',
    'Art',
    'Programming',
    'Web Development',
    'App Development',
  ]
  const bankChildren = []
  const banks = ['CBE', 'Awash', 'Abyssinia', 'Telebirr']
  for (let i = 0; i < subjects.length; i++) {
    children.push(<Option key={subjects[i]}>{subjects[i]}</Option>)
  }
  for (let i = 0; i < banks.length; i++) {
    bankChildren.push(<Option key={banks[i]}>{banks[i]}</Option>)
  }
  const onFinish = (value: any) => {
    const date = new Date(birthDate)
    setComplete(true)

    const userInfo = {
      fullName: value.fullName,
      email: user.user.email,
      phone: value.phone,
      gender: value.gender,
      subjects: value.subjects,
      age: parseInt(value.age),
      acadStatus: value.acadStatus,
      UEE: parseInt(value.UEE),
      cGPA: value.cGPA,
      field: value.field,
      college: value.college,
      volenteerism: value.volunteerism,
      prevTutored: tutorExperience,
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
      profilePicture: profileUrl,
      token: user.accessToken,
      telegramUsername: value.telegramUsername,
      userId: user.user.id,
    }

    createTutor(userInfo)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          router.replace('/profile')
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

  function handleChange(value: any) {
    let x: boolean
    value == 'yes' ? (x = true) : (x = false)
    setTutorExperience(x)
  }

  const [file, setFile] = useState<any>('')
  const [per, setPerc] = useState<any>(null)

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name

      const storageRef = ref(storage, name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          setPerc(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfileUrl(downloadURL)
          })
        }
      )
    }
    file && uploadFile()
  }, [file])

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
          <div
            className="left"
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 0 10px 0',
            }}
          >
            <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginRight: '20px',
              }}
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
            <Form.Item
              label="Upload your profile picture"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              {/* <ImgCrop rotate maxZoom={5}>
              <Upload
                listType="picture-card"
                {...props}
                //   onPreview={onPreview}
                fileList={fileList}
                // onChange={e => }
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop> */}
              <input
                type="file"
                id="file"
                onChange={(e: any) => setFile(e.target.files[0])}
              />
            </Form.Item>
          </div>

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
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <InputNumber controls={false} />
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
            <InputNumber maxLength={50} />
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
            <InputNumber maxLength={50} />
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
            label="Which University/College are you attending?"
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
            label="Have you volunteered before? If Yes, where and for how long?"
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
          <Form.Item name="prevTutored" label="Tutoring Experience">
            <Select
              placeholder="Select a option and change input text above"
              onChange={handleChange}
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </Form.Item>
          <Form.Item name="prevTutorGrades" label="Previously Tutoried Grades">
            <Select
              placeholder="Select a option and change input text above"
              allowClear
              disabled={!tutorExperience}
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
          >
            <Input maxLength={500} showCount disabled={!tutorExperience} />
          </Form.Item>
          <Form.Item
            label="What is an ideal tutor for you? In one word"
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
            <Select
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
            >
              {bankChildren}
            </Select>
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
            label="Guarantor's full name"
            name="contactName"
            rules={[
              {
                required: true,
                message: "Please input your Guarantor's full name!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            label="Guarantor's phone number"
            name="contactPhone1"
            rules={[
              {
                required: true,
                message: "Please input your Guarantor's phone number!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            label="Guarantor's other phone number"
            name="contactPhone2"
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Guarantor's email"
            name="contactEmail"
            rules={[
              {
                required: true,
                message: "Please input your Guarantor's phone number!",
              },
            ]}
          >
            <Input maxLength={50} showCount />
          </Form.Item>
          <Form.Item
            label="Username for telegram"
            name="telegramUsername"
            rules={[
              {
                required: true,
                message: 'Please input your username for telegram!',
              },
            ]}
          >
            <Input maxLength={50} showCount placeholder="@username" />
          </Form.Item>

          <Form.Item
            label="How many days a week are you available for tutoring?"
            name="workDays"
            rules={[
              {
                required: true,
                message: 'Please input preferred work day/days',
              },
            ]}
          >
            <InputNumber controls={false} />
          </Form.Item>
          <Form.Item
            label="How many hours a day(the number specified above) are you available?"
            name="workHour"
            rules={[
              {
                required: true,
                message: 'Please input preferred work hour/hours',
              },
            ]}
          >
            <InputNumber controls={false} />
          </Form.Item>
          <Form.Item
            label="List the places(by common name) which are close to where you are? Comma separated"
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
            <Input.TextArea showCount />
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
