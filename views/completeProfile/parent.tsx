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
import { createParent } from 'backend-utils/parent-utils'
import { useRouter } from 'next/router'
const { Option } = Select

function Parent({ user }: any) {
  const router = useRouter()
  const isMounted = useRef(false)

  const [complete, setComplete] = useState(false)
  const [err, setErr] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [birthDate, setBirthDate] = useState('')

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
      phone1: value.phone1,
      phone2: value.phone2,
      preferredBank: value.preferredBank,
      location: value.location,
      profilePicture: '',
      token: user.accessToken,
      userId: user.user.id,
    }

    createParent(userInfo)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          router.push('/add-students')
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

  return (
    <div>
      <h2 className="mt-6 text-center font-mono text-3xl text-gray-900">
        Complete your profile
      </h2>
      <p className={classes.subHeader}>
        This helps tutors understand you better.
      </p>

      <div className={classes.wrapper}>
        {/* <h2 className="text-center font-mono text-3xl text-gray-900">
          Parent/Guardian Information
        </h2> */}
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
          <Row gutter={[20, 0]}>
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
            {user && (
              <Col md={12} sm={24}>
                <Form.Item label="Email" name="email">
                  <Input disabled placeholder={user.user.email} />
                </Form.Item>
              </Col>
            )}
            <Col md={12} sm={24}>
              <Form.Item
                label="Phone number"
                name="phone1"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input maxLength={15} showCount />
              </Form.Item>
            </Col>
            <Col md={12} sm={24}>
              <Form.Item
                label="Other Phone number"
                name="phone2"
                rules={[
                  {
                    required: true,
                    message: 'Please input your other phone number!',
                  },
                ]}
              >
                <Input maxLength={15} showCount />
              </Form.Item>
            </Col>
            <Col md={12} sm={24}>
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
            </Col>
            <Col md={12} sm={24}>
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
            </Col>
          </Row>
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

export default Parent
