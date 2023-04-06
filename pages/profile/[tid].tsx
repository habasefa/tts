import React, { useEffect, useRef, useState } from 'react'
import { Form, Input, Button, Alert, Select, InputNumber } from 'antd'
const { Option } = Select
import classes from '@/styles/completeProfile.module.css'
import { storage } from '../../utils/firebase'
import { updateTutor } from 'backend-utils/tutor-utils'
import { useRouter } from 'next/router'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import Header from '@/components/Common/Header'
import Footer from '@/components/Profile/Footer'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { getTutorById } from '../../backend-utils/tutor-utils'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

function UpdateTutor() {
  const user = useSelector(selectUser)
  if (user) {
    var token = user.accessToken
  }
  const router = useRouter()
  const { tid } = router.query
  const isMounted = useRef(false)
  const [err, setErr] = useState('')

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  useEffect(() => {
    getTutorById(tid, token)
      .then((res) => res.json())
      .then((data) => {
        setInputValue({
          fullName: data.user.fullName,
          email: data.user.email,
          phone: data.user.phone,
          gender: data.user.gender,
          subjects: data.user.subjects,
          age: data.user.age,
          acadStatus: data.user.acadStatus,
          UEE: data.user.UEE,
          cGPA: data.user.cGPA,
          field: data.user.field,
          college: data.user.college,
          volenteerism: data.user.volunteerism,
          prevTutored: data.user.prevTutored,
          prevTutorGrades: data.user.prevTutorGrades,
          prevTutorExperience: data.user.prevTutorExperience,
          idealTutor: data.user.idealTutor,
          preferredBank: data.user.preferredBank,
          bankAccountNo: data.user.bankAccountNo,
          contactName: data.user.contactName,
          contactPhone1: data.user.contactPhone1,
          contactPhone2: data.user.contactPhone2,
          contactEmail: data.user.contactEmail,
          workDays: data.user.workDays,
          workHour: data.user.workHour,
          location: data.user.location,
          essay: data.user.essay,
          hobby: data.user.hobby,
          profilePicture: data.user.profilePicture,
          userId: data.user.userId,
        })
        setIsLoading(false)
      })
      .catch((_) => {
        setErr('Something went wrong')
      })
  }, [tid])
  const [complete, setComplete] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [birthDate, setBirthDate] = useState('')
  const [tutorExperience, setTutorExperience] = useState(false)
  const [profileUrl, setProfileUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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
  for (let i = 0; i < subjects.length; i++) {
    children.push(<Option key={subjects[i]}>{subjects[i]}</Option>)
  }

  const onFinish = (value: any) => {
    setComplete(true)
    updateTutor(tid, token, inputValue)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          router.replace('/profile')
        } else {
          setErr(data.message)
        }
      })
      .catch((_err) => {
        setErr('Something went wrong')
      })
      .finally(() => {
        if (isMounted.current) {
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
            setInputValue({ ...inputValue, profilePicture: downloadURL })
          })
        }
      )
    }
    file && uploadFile()
  }, [file])

  const [form] = Form.useForm()
  //   useEffect(() => form.resetFields(), [tid])
  const [inputValue, setInputValue] = useState<any>(null)
  useEffect(() => {
    form.setFieldsValue(inputValue)
  }, [form, inputValue])

  const handleInputChange = (e: any) => {
    console.log(e)
    const keys = Object.keys(e)

    setInputValue({ ...inputValue, [keys[0]]: e[keys[0]] })
  }

  return (
    <div
      className="
    px-20  xl:px-16"
    >
      <Header />
      <Backdrop
        sx={{ color: '#fff', backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="info" />
      </Backdrop>
      <div className="font-minionPro">
        <h2 className={classes.header}>Update your profile</h2>
        <p className={classes.subHeader}>
          This helps parents understand you better.
        </p>
        <div className={classes.wrapper}>
          <Form
            form={form}
            layout="vertical"
            initialValues={inputValue}
            onFinish={onFinish}
            autoComplete="off"
            onValuesChange={handleInputChange}
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
                  file ? URL.createObjectURL(file) : inputValue?.profilePicture
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
              <Input name="fullName" maxLength={50} />
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
              <Input maxLength={15} showCount name="phone" />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
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
              <InputNumber controls={false} name="age" />
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
              <InputNumber maxLength={50} name="UEE" />
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
              <InputNumber maxLength={50} name="cGPA" />
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
              <Input maxLength={50} showCount name="field" />
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
              <Input maxLength={50} showCount name="college" />
            </Form.Item>
            <Form.Item
              label="Volunterism"
              name="volenteerism"
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
            <Form.Item
              name="prevTutorGrades"
              label="Previously Tutoried Grades"
            >
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
              <Input
                maxLength={500}
                showCount
                disabled={!tutorExperience}
                name="prevTutorExperience"
              />
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
              <Input maxLength={50} showCount name="idealTutor" />
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
              <Input maxLength={50} showCount name="preferredBank" />
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
              <Input maxLength={50} showCount name="bankAccountNo" />
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
              <Input maxLength={50} showCount name="contactName" />
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
              <Input maxLength={50} showCount name="contactPhone1" />
            </Form.Item>
            <Form.Item
              label="Contact's other phone number"
              name="contactPhone2"
            >
              <Input maxLength={50} showCount name="contactPhone2" />
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
              <Input maxLength={50} showCount name="contactEmail" />
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
              <InputNumber controls={false} name="workDays" />
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
              <InputNumber controls={false} name="workHour" />
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
              <Input maxLength={50} showCount name="location" />
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
              <Input.TextArea showCount name="essay" />
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
              <Input maxLength={50} showCount name="hobby" />
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
      <Footer />
    </div>
  )
}

export default UpdateTutor
