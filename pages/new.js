import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import StudentRegistration from './studentRegistration'
import * as data from './Applied Tutors (2).json'
import { API_URL } from 'utils/url'


export default function BasicTextFields() {

  const createTutor = async ({
    fullName,
    email,
    phone,
    gender,
    subjects,
    age,
    acadStatus,
    cGPA,
    field,
    college,
    prevTutorGrades,
    contactName,
    contactPhone1,
    contactPhone2,
    contactEmail,
    location,
    userId,
  }) => {
    const response = await fetch(`${API_URL}api/v1/tutor/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        gender,
        subjects,
        age,
        acadStatus,
        field,
        college,
        prevTutorGrades,
        contactName,
        contactPhone1,
        contactPhone2,
        contactEmail,
        location,
        userId,
      }),
    })
    return response
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        onClick={() => {
          console.log(data.Sheet1)

          data['Applied Tutors'].map(async (user, index) => {
            
            const response = await fetch(`${API_URL}api/v1/user/register`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email:user.email,
                password: user.password,
              role:"TUTOR"
              }),
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data)
              const userInfo = {
              fullName: user.fullName,
              email: user.email,
              phone: user.contactPhone1,
              gender: user.gender,
              subjects:user.subjects,
              age: parseInt(user.age),
              acadStatus:user.acadStatus,
            
              field: user.field,
              college: user.college,
            
              
              prevTutorGrades: user.prevTutorGrades,
              contactName: user.contactName,
              contactPhone1:user.contactPhone1,
              contactPhone2:user.contactPhone2,
              contactEmail: user.contactEmail,
             
              location: user.location,
              
              userId: data.newUser.id,
            }


              if (data.success){
                createTutor(userInfo)
                .then((res) => res.json())
                .then((data) => {
                  if (data.success) {
                    console.log(data)
                  } else {
                    console.log(data.message)
                  }
                })
              }

            })
            console.log(response,index,user.email)
            return response
          })
        }}
      >
        Json feker
      </Button>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  )
}
