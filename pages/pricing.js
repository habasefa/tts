import Footer from '@/components/Common/Footer'
import Header from '@/components/Common/Header'
import PricingCard from '@/components/Pricing/PricingCard'
import PricingCardContainer from '@/components/Pricing/PricingCardContainer'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Alert, Grid, InputLabel, MenuItem, Select } from '@mui/material'
const Pricing = () => {
  const router = useRouter()
  const [grade, setGrade] = useState('')
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)
  const [cost, setCost] = useState(0)

  const WEEKS_PER_MONTH = 4

  const price = (grade) => {
    if (grade === 'KG') {
      return 375
    } else if (grade === 'COLLEGE') {
      return 500
    } else {
      const gradeNumber = parseInt(grade, 10)
      if (gradeNumber >= 1 && gradeNumber <= 5) {
        return 375
      } else if (gradeNumber >= 6 && gradeNumber <= 10) {
        return 400
      } else if (gradeNumber >= 11 && gradeNumber <= 12) {
        return 425
      } else {
        return 0
      }
    }
  }

  useEffect(() => {
    const calculatedCost = days * hours * WEEKS_PER_MONTH * price(grade)
    setCost(calculatedCost)
  }, [days, hours, grade])

  const handleDays = (event) => {
    setDays(Number(event.target.value))
  }

  const handleHours = (event) => {
    setHours(Number(event.target.value))
  }

  const handleGrade = (event) => {
    setGrade(event.target.value)
  }

  return (
    <>
      <div className="h-screen overflow-y-scroll  bg-gray-50 font-minionPro scrollbar-hide">
        <Header />
        <div className="mt-16 rounded-lg bg-gray-50 px-10 shadow-lg xl:px-16">
          <div className="my-2 gap-3 p-3 md:p-5">
            <h1 className="mt-12 text-center text-lg font-semibold text-indigo-600 md:text-3xl md:text-gray-800">
              Pricing: [UPDATED FOR 2024/25 SCHOOL YEAR]
            </h1>
            <PricingCardContainer />
          </div>

          <div className="my-6 rounded-lg bg-gray-50 p-6 shadow-md md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
              Billing Schedule
            </h2>
            <div className="mt-4 text-lg leading-relaxed text-gray-600">
              <p>
                Monthly invoices will be sent to the parent’s phone number at
                the end of each month. Payment is expected by the 7th of each
                month for the previous month’s billing invoice. Cash and check
                will be accepted.
              </p>
            </div>
          </div>

          {/* <div className="my-2 p-3 md:p-5"> */}
          <div className="my-6 rounded-lg bg-gray-50 p-6 shadow-md md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
              Price Calculator
            </h2>
            <div className="mt-4 text-lg leading-relaxed text-gray-600">
              <p>
                You can calculate your predicted bill by manipulating the number
                of hours per day and the number of days per week you want your
                child to be tutored.
              </p>
            </div>
            <Grid container p={2} rowSpacing={1} spacing={2} columnSpacing={2}>
              <Grid item xs={16} md={8} lg={3}>
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
                  value={grade}
                  label="grade"
                  fullWidth
                  onChange={(event) => handleGrade(event)}
                >
                  <MenuItem value="KG">KG</MenuItem>
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
                  <MenuItem value="COLLEGE">College</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={16} md={8} lg={3}>
                <InputLabel
                  sx={{
                    pb: 2,
                    font: 'inherit',
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
                    font: 'inherit',
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
          <div className=" md: mb-3 p-12">
            <Alert severity="info" sx={{ padding: '2' }}>
              {hours * days * 4 < 12 ? (
                <p className="m-0 font-minionPro text-lg text-red-500">
                  The total number of hours per month must not be lower than 12
                  hours for us to show tangible progress.
                </p>
              ) : (
                <p className="m-0 font-minionPro text-lg">
                  Your estimated monthly value is going to be
                  <label className="bg-[#fdd507] px-2 ">{cost}</label> birr
                </p>
              )}
            </Alert>
          </div>
          <div className="my-4 flex justify-center">
            <button
              onClick={() => router.push('/studentRegistration')}
              className="transform rounded-full bg-[#1A3765] px-10 py-3 text-lg capitalize  tracking-wide text-white transition-colors duration-200 hover:bg-blue-900  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:text-2xl"
            >
              Get Tutor
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Pricing
