import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/historyComponents/footer'
import Header from '../components/historyComponents/header'
import { createParent, createStudent } from '../backend-utils/parent-utils'
import { Form} from 'antd'


import {
  Autocomplete,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Box,
  Item,
  Button,
  Tabs,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Tab,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
} from '@mui/material'

import TextField from '@mui/material/TextField'
import { Router } from '@mui/icons-material'
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const StudentRegistration = () => {
  const [personName, setPersonName] = useState([])
  const router = useRouter()

  const [cost, setconst] = useState(0)
  const locations=["Minilik hospital","6 kilo","5 kilo","22","Lamberet","Megenanya","Kolfa 18 Mazoriya","Merkato","Autbis Tera","4 kilo","Mexico","Stadium","Kebena","SheroMeda","Ayat","Semit"]
  const ethiopian_phone_number_regexp =
    /(\+\s*2\s*5\s*1\s*9\s*(([0-9]\s*){8}\s*))|(0\s*9\s*(([0-9]\s*){8}))/
  const subjects = [
    'Physics',
    'Maths',
    'Chemistry',
    'Biology',
    'Histroy',
    'Geography',
    'Amharic',
    'English',
    'Programming',
  ]
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
    router.push('/')
  }
  const [studnets, setStudentField] = useState([
    {
      studentName: '',
      age: 0,
      gender: 'M',
      grade: '',
      schoolName: '',
      workDays: 0,
      workHour: 0,
      subjects: [],
    },
  ])
  const addStudent = () => {
    event.preventDefault()
    let data = [...studnets]
    let new_studnet = {
      studentName: '',
      age: '',
      gender: 'M',
      grade: '',
      schoolName: '',
      workDays: 0,
      workHour: 0,
      subjects: [],
    }
    data.push(new_studnet)
    setStudentField(data)
  }
  const handleStudentField = (event, index) => {
    let data = [...studnets]
    console.log(data)

    if (event.target.name == 'subjects') {
      const {
        target: { value },
      } = event
      console.log(value)
      if (typeof value === 'string') {
        data[index].subjects = value.split(',')
      } else {
        data[index].subjects = value
      }
      console.log()

      // console.log(event.target.value)
      // data[index].subjects.push(event.target.value)
    } else {
      data[index][event.target.name] = event.target.value
    }
    var costs = 0
    data.map((val) => {
      costs += val.workDays * val.workHour * 250 * 4
    })
    setconst(costs)
    setStudentField(data)
  }
  const studentik = useFormik({
    initialValues: {
      student: [
        {
          studentName: '',
          age: '',
          gender: 'M',
          grade: '',
          schoolName: '',
          workDays: 0,
          workHour: 0,
          subjects: [],
        },
      ],
    },
    validationSchema: Yup.object({
      student: Yup.array().of(
        Yup.object({
          studentName: Yup.string()
            .max(255)
            .required('Student Name is required'),
          age: Yup.string().max(255).required('Age is required'),
          grade: Yup.string().max(255).required('Grade Name is required'),
          schoolName: Yup.string().max(255).required('School Name is required'),
          workDays: Yup.number().required('Work day is required'),
          workHour: Yup.number().required('Work Hour is required'),
        })
      ),
    }),
  })
  const formik = useFormik({
    initialValues: {
      parentName: '',
      phoneNumber1: '',
      phoneNumber2: '',
      Address: '',
    },

    validationSchema: Yup.object({
      parentName: Yup.string().max(255).required('Parent name is required'),
      phoneNumber1: Yup.string().matches(
        ethiopian_phone_number_regexp,
        'Phone number is not valid'
      ),
      Address: Yup.string().max(255).required('Address is required'),
    }),
    onSubmit: () => {
      console.log('hi')
    },
  })
  const createStudentParent = () => {
    setIsLoading(true)
    event.preventDefault()
    createParent({
      fullName: formik.values.parentName,
      location: formik.values.Address,
      phone1: formik.values.phoneNumber1,
      email: null,
      phone2: formik.values.phoneNumber2,
      preferredBank: null,
      profilePicture: null,
      userId: null,
    })
      .then((res) => res.json())

      .then((res) =>
        studnets.map((val) => {
          createStudent({
            fullName: val.studentName,
            gender: val.gender,
            address: formik.values.Address,
            age: parseInt(val.age),
            grade: val.grade,
            hobby: null,
            idealTutor: null,
            nickName: null,
            parentId: res.parent.id,
            prevTutorExperience: null,
            prevTutored: null,
            school: val.schoolName,
            subjects: val.subjects,
            workDays: parseInt(val.workDays),
            workHour: parseInt(val.workHour),
            tutorId: null,
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(() => {
              setIsLoading(false)
              setOpen(true)
             
            })
        })
      )
    
  }

  return (
    <div>
      <Header />

      <div className="justify-center px-10 font-minionPro md:flex  md:px-16 ">
        <form
        onSubmit={createStudentParent}
        method="post"
        
        >
          <label className="font-minionPro text-lg font-semibold pl-4 text-[#1A3765] md:text-xl">
            Parent Information
          </label>

          <Grid container p={4} rowSpacing={1} columnSpacing={2}>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Full Name</InputLabel>
              <TextField
                InputLabelProps={{ shrink: true }}
                required={true}
                error={Boolean(
                  formik.touched.parentName && formik.errors.parentName
                )}
                fullWidth
                helperText={
                  formik.touched.parentName && formik.errors.parentName
                }
                margin="normal"
                name="parentName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.parentName}
              />
            </Grid>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Phone Number</InputLabel>
              <TextField
               required={true}
                error={Boolean(
                  formik.touched.phoneNumber1 && formik.errors.phoneNumber1
                )}
                fullWidth
                helperText={
                  formik.touched.phoneNumber1 && formik.errors.phoneNumber1
                }
                margin="normal"
                name="phoneNumber1"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber1}
              />
            </Grid>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Phone Number 2</InputLabel>
              <TextField
              
                error={Boolean(
                  formik.touched.phoneNumber2 && formik.errors.phoneNumber2
                )}
                fullWidth
                helperText={
                  formik.touched.phoneNumber2 && formik.errors.phoneNumber2
                }
                margin="normal"
                name="phoneNumber2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phoneNumber2}
              />
            </Grid>

            <Grid item xs={16} md={8} lg={3}>
            <InputLabel
                sx={{
                    pb: 2,
                    font:"inherit"
                }}
                id="demo-select-small"
              >
             Address
              </InputLabel>
              <Select
               labelId="demo-select-small"
               id="demo-select-small"
               name="Address"
               required={true}
               margin="normal"
               value={formik.values.Address}
               label="Hours Per Day"
               onBlur={formik.handleBlur}
               onChange={formik.handleChange}
               fullWidth
               
              
              >
               {locations.map((name)=>{
                return (
                  <MenuItem
                  key={name}
                  value={name}
                 
                >
                  {name}
                </MenuItem>
                )
               })}
              </Select>
             
            </Grid>
          </Grid>

          {studnets && studnets.length > 0
            ? studnets.map((val, index) => {
                return (
                  <div key={index} className=" my-2 mb-4 px-10 py-2 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <label className="font-minionPro text-lg font-semibold text-[#1A3765] md:text-xl">
                      Child Information (Child {index+1})
                    </label>
                    <Grid
                      container
                      p={2}
                      rowSpacing={1}
                      spacing={2}
                      columnSpacing={2}
                    >
                      <Grid item xs={16} md={8} lg={3}>
                        <InputLabel id="demo-select-small">
                          Child Name
                        </InputLabel>
                        <TextField
                          fullWidth
                          required={true}
                         
                          
                          margin="normal"
                          name="studentName"
                          onChange={(event) => handleStudentField(event, index)}
                          value={val.studentName}
                        />
                      </Grid>
                      <Grid item xs={16} md={8} lg={3}>
                        <InputLabel id="demo-select-small">Age</InputLabel>
                        <TextField
                          fullWidth
                          required={true}
                          margin="normal"
                          name="age"
                          InputProps={{
                            inputProps: { min: 0 }
                          }}
                    
                          onChange={(event) => handleStudentField(event, index)}
                          value={val.age}
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={16} md={8} lg={3}>
                        <InputLabel
                          sx={{
                            pb: 2,
                            font:"inherit"
                          }}
                          id="demo-select-small"
                        >
                          Gender
                        </InputLabel>
                        <Select
                         required={true}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          name="gender"
                          margin="normal"
                          value={val.gender}
                          label="gender"
                          fullWidth
                          onChange={(event) => handleStudentField(event, index)}
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                      </Grid>

                      <Grid item xs={16} md={8} lg={3}>
                      <InputLabel
                sx={{
                  pb: 2,
                  font:"inherit"
                }}
                id="demo-select-small"
              >
                Grade
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="grade"
                margin="normal"
                required={true}
                value={val.grade}
                label="grade"
                fullWidth
                onChange={(event) => handleStudentField(event,index)}
              >
                <MenuItem value="1">G-1</MenuItem>
                <MenuItem value="2">G-2</MenuItem>
                <MenuItem value="3">G-3</MenuItem>
                <MenuItem value="4">G-4</MenuItem>
                <MenuItem value="5">G-5</MenuItem>
                <MenuItem value="6">G-6</MenuItem>
                <MenuItem value="7">G-7</MenuItem>
                <MenuItem value="8">G-8</MenuItem>
                <MenuItem value="9">G-9</MenuItem>
                <MenuItem value="10">G-10</MenuItem>
                <MenuItem value="11">G-11</MenuItem>
                <MenuItem value="12">G-12</MenuItem>
              </Select>
                      </Grid>
                      <Grid item xs={16} md={8} lg={3}>
                        <InputLabel id="demo-select-small">
                          School Name
                        </InputLabel>
                        <TextField
                          fullWidth
                          margin="normal"
                          name="schoolName"
                          onChange={(event) => handleStudentField(event, index)}
                          value={val.schoolName}
                        />
                      </Grid>
                    </Grid>
                    <label className="font-minionPro text-lg font-semibold text-[#1A3765] md:text-xl">
                      Tutorial Detail
                    </label>
                    <Grid
                      container
                      p={2}
                      rowSpacing={1}
                      spacing={2}
                      columnSpacing={2}
                    >
                      <Grid item xs={16} md={8} lg={3}>
                      <InputLabel
                sx={{
                    pb: 2,
                    font:"inherit"
                }}
                id="demo-select-small"
              >
                Days per Week
              </InputLabel>
              <Select
               labelId="demo-select-small"
               id="demo-select-small"
               name="workDays"
               margin="normal"
               required={true}
               value={val.workDays}
               label="Hours Per Day"
               fullWidth
               onChange={(event) => handleStudentField(event,index)}
              
              >
                <MenuItem value={1}>1 Day</MenuItem>
                <MenuItem value={2}>2 Days</MenuItem>
                <MenuItem value={3}>3 Days</MenuItem>
                <MenuItem value={4}>4 Days</MenuItem>
                <MenuItem value={5}>5 Days</MenuItem>
                <MenuItem value={6}>6 Days</MenuItem>
                <MenuItem value={7}>7 Days</MenuItem>
                <MenuItem value={8}>8 Days</MenuItem>
              </Select>
                      </Grid>
                      <Grid item xs={16} md={8} lg={3}>
                      <InputLabel
                sx={{
                    pb: 2,
                    font:"inherit"
                }}
                id="demo-select-small"
              >
                Hours Per Day
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="workHour"
                margin="normal"
                value={val.workHour}
                label="Hours Per Day"
                fullWidth
                onChange={(event) => handleStudentField(event,index)}
              >
                <MenuItem value={1}>1 Hour</MenuItem>
                <MenuItem value={2}>2 Hour</MenuItem>
                <MenuItem value={3}>3 Hour</MenuItem>
                <MenuItem value={4}>4 Hour</MenuItem>
                <MenuItem value={5}>5 Hour</MenuItem>
                <MenuItem value={6}>6 Hour</MenuItem>
                <MenuItem value={7}>7 Hour</MenuItem>
                <MenuItem value={8}>8 Hour</MenuItem>
              </Select>
                      </Grid>
                      <Grid item xs={16} md={8} lg={3}>
                        <InputLabel
                          sx={{
                            pb: 2,
                          }}
                          id="demo-multiple-chip-label"
                        >
                          Subjects
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          margin="normal"
                          required={true}
                          fullWidth
                          name="subjects"
                          value={val.subjects}
                          onChange={(event) => handleStudentField(event, index)}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {subjects.map((name) => (
                            <MenuItem key={name} value={name}>
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    </Grid>
                  </div>
                )
              })
            : null}
          <Grid container p={2} rowSpacing={1} spacing={2} columnSpacing={2}>
            <Grid item xs={16} md={8}>
              <InputLabel id="demo-select-small">
                Anything you want to Add
              </InputLabel>
              <TextField

                margin="normal"
                multiline
                required={true}
                fullWidth
                rows={4}
                xs={16}
                md={8}
              />
            </Grid>
          </Grid>
          <button
            class=" focus:shadow-outline w-1/2 rounded-xl bg-[#767b84] py-2 px-4 font-bold text-white hover:bg-[#c5c5c5] focus:outline-none md:w-1/6 md:text-xl"
            type="button"
            onClick={addStudent}
          >
            Add Child
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
          </button>

          <div className="flex justify-center">
            <Alert severity="info">
              <p className="m-0 font-minionPro text-lg">
                Your estimated monthly value is going to be
                <label className="bg-[#fdd507] px-2">{cost}</label> birr
              </p>
            </Alert>
          </div>
          <div className="my-1 flex justify-center md:my-2 ">
            <button
              class=" focus:shadow-outline w-1/2 rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none md:w-1/6 md:text-xl"
              type="submit"
              
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          
        >
          <DialogTitle align="center">
            <label className="font-minionPro capitalize text-[#fdd507] md:text-3xl ">
              Successful
            </label>
          </DialogTitle>

          <DialogContent dividers>
            <Typography gutterBottom>
              You have successfully submitted your request for tutor. Morbi leo
              risus, porta ac consectetur ac, vestibulum at eros.
            </Typography>
            <br></br>
            <Typography gutterBottom>
              In 24 Hour Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor.
            </Typography>
            <br></br>
            <Typography gutterBottom>
            In due time, save this number:
            <br></br>
            <p className="text-[#1A3765] ">+251-940120591 Temaribet-Support </p>
            </Typography>
            <br></br>
            <Typography gutterBottom>
            In 24 Hour Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor.
            </Typography>
          </DialogContent>
          <div className="flex justify-center my-2">
          <button
              className=" focus:shadow-outline w-2/4  font-minionPro rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none  md:text-xl"
              type="button"
              onClick={handleClose}
            >
              Go To Home
            </button>
          
            </div>
        
        </Dialog>
      </div>
      <Footer />
    </div>
  )
}
export default StudentRegistration
