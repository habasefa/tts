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
import { useRouter } from 'next/router'

import Header from '../../components/historyComponents/header'
import IconButton from '@mui/material/IconButton'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Footer from '../../components/historyComponents/footer'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { getTutorById } from '../../backend-utils/tutor-utils'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { FaSpinner } from 'react-icons/fa';

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
import { sendTimeSheet } from '../../backend-utils/tutor-utils'

import { deleteTimesheet } from '../../backend-utils/tutor-utils'

const DropZoneImageUploadUpdate = () => {
  const styles = {
    input: {
      backgroundColor: '#f1f1f1', // Replace with desired gray color
    },
    boxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  }
  const date = new Date()
  const [month, setMonth] = useState(0);

  const [year,setYear] = useState(date.getFullYear())
  const [isUploading, setUploading] = useState(false)
  const [parentId, setParentId] = useState('');
  const router = useRouter()
  const user = useSelector(selectUser)
  const [isLoading, setIsLoading] = useState(true);
  const [openDup,setOpenDup] = useState(false)
  const [userData, setUserData] = useState(null)
  const { tsid } = router.query;
  useEffect(() => {
  
    deleteTimesheet(token,tsid)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data,"indeed deleted")
        if (data.success)
        {
      
            setSelectedParent(data.deletedTimesheet?.parent)
            setMonth(data.deleteTimesheet?.month)
            setYear(data.deleteTimesheet?.year)
            setUserData(data.deletedTimesheet?.tutor)
            setParentId(data.deletedTimesheet?.parentId)
            let parentIds = data.deletedTimesheet?.parentId
            getTutorById(data.deletedTimesheet?.tutorId,token)
            .then((tutor)=>{
                tutor.students.map((student)=>{
                    if (student.parentId == parentIds){
                      value.push({
                        studentName: student,
                        grade: student.grade,
                        workHour: 0,
                      })
              
                    }
                  })
                  
           console.log(value,"students of " )
              
              
                  setListStudents(value)

            })
        }
    }
    )
   
    .catch((error)=>{
        router.push('/');
        console.log("Something is Wrong");
    })
    .finally(()=>{
        setIsLoading(false)
    })
  }, [])
  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }
 


  const monthName =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [uploadedImage, setUploadedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [totalHour, setTotalHour] = useState(null)
  const [totalSalary, setTotalSalary] = useState(null)
  const [parentName, setParentName] = useState(null)
  const [address, setAddress] = useState(null)
  const [selectedParent, setSelectedParent] = useState(null)
  const [listStudent, setListStudents] = useState([])
  const [parentFetched , setParentFetched] = useState(false);

  const handleStudentField = (event, index) => {
    let data = [...listStudent]
    data[index][event.target.name] = event.target.value
    setListStudents(data)
    var total = 0
    data.map((val) => {
      total += Number(val.workHour)
    })
    setTotalHour(Number(total))
    setTotalSalary(total * 250)
  }
  const addParents = (parent) => {
   
    setlistOfParents(prevList => [...prevList, parent]);

   
    console.log(parent,"hid,updated")
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
  const removeStudent = (index) => {
    event.preventDefault()
    const data = [...listStudent]
    if (data.length > 1) {
       data.slice(index,1)
      setListStudents(data)
    }
    var total = 0
    data.map((val) => (total += Number(val.workHour)))
    setTotalHour(Number(total))
    setTotalSalary(total * 250)
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
      tutorId: userData?.id,
      listStudent: { listStudent },
      parentId: parentId,
      month: Number(month),
      image: image,
      token: token,
      year: Number(year),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        console.log('h')
        if (data.duplication)
        
        {
            setOpenDup(true)
          
        }
        else {

        router.push('/')
        }
        setUploading(false)
      })
  }
  const renderSelectedParent = (value) => {
    if (!value) {
      return '';
    }

    return value.fullName;
  };
  const handleParentSelection = (event) => {
    const parent = event.target.value;
    console.log(parent,"selected Parent")
    let value = []
    console.log(parent.fullName)
    setSelectedParent(parent);
    setParentId(parent.id)
    userData.students.map((student)=>{
      if (student.parentId == parent.id){
        value.push({
          studentName: student,
          grade: student.grade,
          workHour: 0,
        })

      }
    })
    
    console.log(selectedParent);


    setListStudents(value)
  }
 
  const handleClose = () => {
    router.push('/')
   
    setOpenDup(false)
    
  }
  return (
    <div className="h-screen">
      <Header />
      <Backdrop
         sx={{ color: '#fff', backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="info" />
      </Backdrop>
      <div className="flex justify-center ">
        <div className=" mt-1 font-minionPro">
          <h1 className="text-lg text-[#000000] md:text-2xl">
            Monthly TimeSheet
          </h1>
        </div>
      </div>
      <div className="justify-left flex  px-10 font-minionPro  md:px-40  ">
        <h1 className="text-lg text-[#000000] md:text-2xl">
          {monthName[month - 1]} Time Sheet
        </h1>
      </div>
      <form onSubmit={createStudentParent} method="post">
        <div className="justify-center px-10 font-minionPro  md:px-40 ">
          <div
            className=" xl:h-96 flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-lg  border-2 border-dashed border-gray-300 p-4 sm:h-72 sm:flex-row sm:p-8 md:h-80 lg:h-96"
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
                  <div class="flex justify-center">
                    <CloudUploadIcon />
                  </div>
                  <span className=" text-lg font-medium text-gray-500">
                    Drag, Drop or{' '}
                    <button
                      type="button"
                      className="text-lg font-medium text-blue-500 hover:text-blue-700 focus:underline focus:outline-none"
                      onClick={handleBrowseClick}
                    >
                      {' '}
                      Choose a file{' '}
                    </button>{' '}
                    to upload
                  </span>
                  <div class="flex justify-center">
                    <p
                      type="button"
                      className="ml-2  flex flex-col items-center text-lg font-medium "
                    >
                      PNG,JPEG or JPG
                    </p>
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
        <div className="justify-center px-10 font-minionPro  md:px-32 ">
          <Grid container p={4} rowSpacing={1} columnSpacing={2}>
            <Grid item xs={16} md={8} lg={3}>
              <InputLabel id="demo-select-small">Parent Name</InputLabel>
               <TextField
               disabled
               value={selectedParent?.parent}
               fullWidth
               required={true}
               margin="normal"
               InputProps={{ style: styles.input }}
               />
             
            </Grid>
          </Grid>
        </div>
        <div className="  justify-center px-10 font-minionPro  md:px-40 ">
          {listStudent.map((val, index) => {
            return (
              <div className=" my-2 mb-4 rounded-lg border border-gray-200 px-3 py-2 shadow-md ">
                <Grid container p={4} rowSpacing={1} columnSpacing={2}>
                  <Grid item xs={16} md={8} lg={3}>
                    <InputLabel id="demo-select-small">Tutee Name</InputLabel>
                    <TextField
                      disabled
                      value={val.studentName.fullName}
                      fullWidth
                      required={true}
                      margin="normal"
                      InputProps={{ style: styles.input }}
                    />
                  </Grid>

                  <Grid item xs={16} md={8} lg={3}>
                    <InputLabel id="demo-select-small">Grade</InputLabel>
                    <TextField
                      disabled
                      value={val.grade}
                      fullWidth
                      required={true}
                      margin="normal"
                      InputProps={{ style: styles.input }}
                    />
                  </Grid>
                  <Grid item xs={16} md={8} lg={3}>
                    <InputLabel id="demo-select-small">No of Hours</InputLabel>
                    <TextField
                      fullWidth
                      required={true}
                      margin="normal"
                      name="workHour"
                      InputProps={{
                        inputProps: { min: 0 },
                        style: styles.input,
                      }}
                      onChange={(event) => handleStudentField(event, index)}
                      value={val.workHour}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={16} md={8} lg={3}>
                  <IconButton
                        color="error"
                        onClick={()=> {removeStudent(index)}}
                        aria-label="delete"
                        size="small"
                      >
                        <HighlightOffIcon />
                      </IconButton>
                      </Grid>

                  {/* <Grid item xs={16} md={8} lg={3}>
                    <Box style={styles.boxContainer}>
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
                    </Box>
                  </Grid> */}
                </Grid>
              </div>
            )
          })}

          {listStudent.length > 0 && (
            <>
              <Grid container p={4} rowSpacing={1} columnSpacing={2}>
                <Grid item xs={16} md={8} lg={3}>
                  <InputLabel id="demo-select-small">Total Hour</InputLabel>
                  <TextField
                    InputProps={{ style: styles.input }}
                    disabled
                    value={totalHour}
                  />
                </Grid>
              </Grid>
              <Grid container p={4} rowSpacing={1} columnSpacing={2}>
                <Grid item xs={16} md={8} lg={3}>
                  <InputLabel id="demo-select-small">Net Salary</InputLabel>
                  <TextField
                    InputProps={{ style: styles.input }}
                    disabled
                    value={totalSalary}
                  />
                </Grid>
              </Grid>
            </>
          )}
           {listStudent.length > 0 && 
          <div className="my-1 mx-2 mb-4 flex justify-center md:my-2 ">
            <button
              class="  focus:shadow-outline w-1/2 rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none disabled:bg-[#6793d9] md:w-1/6 md:text-xl"
              type="submit"
              disabled={isUploading}
            >
              {isUploading ? <span className="flex items-center">
      <FaSpinner className="animate-spin mr-2" />
      Uploading...
    </span> : 'Submit'}
            </button>
          </div>
}
        </div>
           
      </form>
      <Dialog
          open={openDup}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle align="center">
            <label className="font-minionPro text-[#fd6907] md:text-3xl ">
              Alert
            </label>
          </DialogTitle>

          <DialogContent dividers>
          <label className="font-minionPro  md:text-xl ">
          TimeSheet is submitted for the this specific Month.
            </label>
          </DialogContent>
          <DialogActions>
          <div className="flex justify-center my-2">
          <button
              className=" focus:shadow-outline    font-minionPro rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none  md:text-xl"
              type="button"
              onClick={handleClose}
            >
              Go To Home
            </button>
          
            </div>
          </DialogActions>
        </Dialog>
      <Footer />
      
    </div>
  )
  
}

export default DropZoneImageUploadUpdate
