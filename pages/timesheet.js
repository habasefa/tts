// import { useState } from "react";

// const AddUser = () => {

//   const [data, setData] = useState({
//     name: "",
//     image: "",
//   });
//   const handleChange = (name) => (e) => {
//     const value = name === "image" ? e.target.files[0] : e.target.value;
//     setData({ ...data, [name]: value });
//   };
//   const handleSubmit = async () => {
//     try {
//       let formData = new FormData();
//       formData.append("image", data.image);
//       formData.append("name", data.name);

//       const res = await fetch(`http://localhost:5000/user`, {
//         method: "POST",
//         body: formData,
//       });
//       if (res.ok) {
//         setData({ name: "", image: "" });

//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto" }}>
//       <div className="mb-3">
//         <input
//           className="form-control"
//           placeholder="Enter name"
//           type="text"
//           name="name"
//           value={data.name}
//           onChange={handleChange("name")}
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           className="form-control"
//           type="file"
//           accept="image/*"
//           name="image"
//           onChange={handleChange("image")}
//         />
//       </div>
//       <div className="text-center">
//         <button className="btn btn-primary" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//       <form>
//   <label class="block">
//     <span class="sr-only">Choose profile photo</span>
//     <input type="file" class="block w-full text-sm text-gray-500
//       file:mr-4 file:py-2 file:px-4
//       file:rounded-md file:border-0
//       file:text-sm file:font-semibold
//       file:bg-blue-500 file:text-white
//       hover:file:bg-blue-600
//     "/>
//   </label>
// </form>

//     </div>
//   );
// };

// export default AddUser;

import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import { getUserById } from '../backend-utils/user-utils'
import { useRouter } from 'next/router'
import Header from '../components/historyComponents/header'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Footer from '../components/historyComponents/footer'

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
  TextField,
} from '@mui/material'
import { sendTimeSheet } from '../backend-utils/tutor-utils'

const DropZoneImageUpload = () => {
  const date = new Date()
  const mont = date.getMonth() + 1
  const [isUploading, setUploading] = useState(false)
  const router = useRouter()
  const user = useSelector(selectUser)
  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        console.log(data)
      })
      .catch((_) => {
        router.push('/')
        setErr('Something went wrong')
      })
  }, [])
  const [uploadedImage, setUploadedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [totalHour, setTotalHour] = useState(null)
  const [totalSalary, setTotalSalary] = useState(null)
  const [parentName, setParentName] = useState(null)
  const [address, setAddress] = useState(null)
  const [listStudent, setListStudents] = useState([
    {
      studentName: '',
      grade: '',
      workHour: 0,
    },
  ])

  const handleStudentField = (event, index) => {
    let data = [...listStudent]
    data[index][event.target.name] = event.target.value
    setListStudents(data)
    var total = 0
    data.map((val) => {
      total += val.workHour
    })
    setTotalHour(Number(total))
    setTotalSalary(total * 250)
  }
  const addStudent = () => {
    event.preventDefault()
    let data = [...listStudent]
    let new_studnet = {
      studentName: '',
      grade: '',
      workHour: 0,
    }
    data.push(new_studnet)
    setListStudents(data)
  }
  const removeStudent = () => {
    event.preventDefault()
    const data = [...listStudent]
    if (data.length > 1) {
      data.pop()
      setListStudents(data)
    }
  }
  const fileInputRef = useRef(null)

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    handleFile(file)
  }

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    handleFile(file)
  }

  const handleFile = (file) => {
    const reader = new FileReader()
    reader.onload = () => {
      setUploadedImage(reader.result)
    }
    console.log(typeof file)
    setImage(file)
    reader.readAsDataURL(file)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleBrowseClick = () => {
    fileInputRef.current.click()
  }

  const handleChangeClick = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = null
    }
    fileInputRef.current.click()
  }
  const createStudentParent = () => {
    event.preventDefault()
    setUploading(true)
    console.log(isUploading)

    sendTimeSheet({
      tutorId: userData?.tutor.id,
      listStudent: { listStudent },
      parentName: parentName,
      month: Number(mont),
      image: image,
      token: token,
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        console.log('h')

        router.push('/')
        setUploading(false)
      })
  }
  return (
    <div className="">
      <Header />
      <div className='flex justify-center '>
          <div className=' font-minionPro mt-1'>
            <h1 className='text-[#000000] md:text-2xl text-lg'>Monthly TimeSheet</h1>
            </div>
            </div>
      <form onSubmit={createStudentParent} method="post">
        <div className="justify-center px-10 font-minionPro  md:px-16 ">
          <div
            className=" xl:h-120 flex h-96 w-full cursor-pointer flex-col items-center justify-center rounded-lg  border-2 border-dashed border-gray-300 p-4 sm:h-72 sm:flex-row sm:p-8 md:h-80 lg:h-96"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {uploadedImage ? (
              <>
                <div className="relative h-full w-full">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="h-full w-full object-contain"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 rounded-tl-md bg-blue-500 px-2 py-1 text-sm font-medium text-white"
                    onClick={handleChangeClick}
                  >
                    Change Image
                  </button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileInputChange}
                />
              </>
            ) : (
              <>
                <div className="text-center sm:text-left">
                  <span className=" text-lg font-medium text-gray-500">
                    Drag &amp; drop an image here or
                  </span>
                  <div class="flex justify-center">
                    <button
                      type="button"
                      className="ml-2  flex flex-col items-center text-lg font-medium text-blue-500 hover:text-blue-700 focus:underline focus:outline-none"
                      onClick={handleBrowseClick}
                    >
                      <FileUploadIcon />
                      browse
                    </button>
                  </div>
                </div>
                <input
                  required={true}
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileInputChange}
                />
              </>
            )}
          </div>
        </div>
        <div className="justify-center px-10 font-minionPro   md:px-16 ">
          <Grid container p={4} rowSpacing={1} columnSpacing={2}>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Parent Name</InputLabel>
              <TextField
                fullWidth
                required={true}
                margin="normal"
                name="parentName"
                onChange={(event) => setParentName(event.target.value)}
                value={parentName}
              />
            </Grid>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Address</InputLabel>
              <TextField
                fullWidth
                required={true}
                margin="normal"
                name="address"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
              />
            </Grid>
          </Grid>
        </div>
        <div className="justify-center px-10 font-minionPro  md:px-16 ">
          {listStudent.map((val, index) => {
            return (
              <Grid container p={4} rowSpacing={1} columnSpacing={2}>
                <Grid item xs={3} md={3} lg={3}>
                  <InputLabel id="demo-select-small">Tutee Name</InputLabel>
                  <TextField
                    fullWidth
                    required={true}
                    margin="normal"
                    name="studentName"
                    onChange={(event) => handleStudentField(event, index)}
                    value={val.studentName}
                  />
                </Grid>

                <Grid item xs={3} md={3} lg={3}>
                  <InputLabel
                    sx={{
                      pb: 2,
                      font: 'inherit',
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
                    onChange={(event) => handleStudentField(event, index)}
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
                <Grid item xs={3} md={3} lg={3}>
                  <InputLabel id="demo-select-small">No of Hours</InputLabel>
                  <TextField
                    fullWidth
                    required={true}
                    margin="normal"
                    name="workHour"
                    InputProps={{
                      inputProps: { min: 0 },
                    }}
                    onChange={(event) => handleStudentField(event, index)}
                    value={val.workHour}
                    type="number"
                  />
                </Grid>

                <Grid item xs={3} md={3} lg={3}>
                  <InputLabel id="demo-select-small">Add or Remove</InputLabel>
                  <IconButton
                    color="primary"
                    onClick={addStudent}
                    aria-label="delete"
                    size="small"
                  >
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={removeStudent}
                    aria-label="delete"
                    size="small"
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Grid>
              </Grid>
            )
          })}
          <Grid container p={4} rowSpacing={1} columnSpacing={2}>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Total Hour</InputLabel>
              <TextField disabled value={totalHour} />
            </Grid>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Net Salary</InputLabel>
              <TextField disabled value={totalSalary} />
            </Grid>
          </Grid>
          <div className="my-1 mx-2 mb-4 flex justify-end md:my-2 ">
            <button
              class=" focus:shadow-outline w-1/2 rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none disabled:bg-[#6793d9] md:w-1/6 md:text-xl"
              type="submit"
            >
              {isUploading && (
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-white opacity-25"></div>
              )}
              {isUploading ? 'Uploading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default DropZoneImageUpload
