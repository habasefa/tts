import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'


import {
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
const Pricing = () => {
  const [grade, setGrade] = useState('')
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)
  const [cost, setCost] = useState(0)
  const handleDays = (event) => {
    setDays(Number(event.target.value))
    setCost(event.target.value * hours*4*250)
  }
  const handleHours = (event) => {
    setHours(Number(event.target.value))
    setCost(event.target.value * days*4*250)
  }
  const handleGrade = (event) => {
    setGrade(event.target.value)
  }

  return (
    <>
    <div className="h-screen overflow-y-scroll  bg-gray-50 scrollbar-hide font-minionPro">
      <Header />
      <div className="mt-16  xl:px-16">
        <div className="my-2 p-3 md:p-5">
        <h1 className="mt-12 text-center text-lg md:text-3xl ">Pricing</h1>
          <h2 className="text-lg md:text-2xl md:py-2">Pricing Per Hour</h2>
          <div className="text-lg">
            <p>
            Sessions are 250 ETB per hour for KG-12  students for direct 1:1, tutor- student time. 
            </p>
            <div>
              For KG-10:
              <br />
              250 ETB Birr Per Hour
            </div>
            <div>
              For G-11 & 12:
              <br />
              250 ETB Birr Per Hour
            </div>
          </div>
        </div>

        <div className="my-2 p-3 md:p-5">
          <h2 className="text-lg md:text-2xl">Billing Schedule</h2>
          <div  className="text-lg">
            <p>
            Monthly invoices will be sent to the parent’s phone number at the end of each month.
             Payment is expected by the 7th of each month for the previous month’s billing invoice.
             Cash and check will be accepted.
            </p>
          </div>
        </div>

        <div className="my-2 p-3 md:p-5">
          <h2 className="text-lg md:text-2xl">Price Calculator</h2>
          <div  className="text-lg">
            <p>
            You can calculate a your predicted bill by manipulating the number of hours per each day and the number of days per week you want your child to be tutored.
            </p>
          </div>
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
                Grade
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="grade"
                margin="normal"
                value={grade}
                label="grade"
                fullWidth
                onChange={(event) => handleGrade(event)}
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
                name="hours"
                margin="normal"
                value={hours}
                label="Hours Per Day"
                fullWidth
                onChange={(event) => handleHours(event)}
              >
                <MenuItem value="1">1 Hour</MenuItem>
                <MenuItem value="2">2 Hour</MenuItem>
                <MenuItem value="3">3 Hour</MenuItem>
                <MenuItem value="4">4 Hour</MenuItem>
                <MenuItem value="5">5 Hour</MenuItem>
                <MenuItem value="6">6 Hour</MenuItem>
                <MenuItem value="7">7 Hour</MenuItem>
                <MenuItem value="8">8 Hour</MenuItem>
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
                Days per Week
              </InputLabel>
              <Select
               labelId="demo-select-small"
               id="demo-select-small"
               name="days"
               margin="normal"
               value={days}
               label="Hours Per Day"
               fullWidth
               onChange={(event) => handleDays(event)}
              
              >
                <MenuItem value="1">1 Day</MenuItem>
                <MenuItem value="2">2 Days</MenuItem>
                <MenuItem value="3">3 Days</MenuItem>
                <MenuItem value="4">4 Days</MenuItem>
                <MenuItem value="5">5 Days</MenuItem>
                <MenuItem value="6">6 Days</MenuItem>
                <MenuItem value="7">7 Days</MenuItem>
                <MenuItem value="8">8 Days</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </div>
        <div className="md: p-12">
          <Alert severity="info" sx={{padding:'2' }} >
            <p className="m-0 font-minionPro text-lg">
              Your estimated monthly value is going to be
              <label className="bg-[#fdd507] px-2 ">{cost}</label> birr
            </p>
          </Alert>
        </div>
      </div>
       <Footer />
    </div>
   
   </>
  )
}

export default Pricing
