import React from 'react'
import NextHead from 'next/head'
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  InputLabel,
} from '@mui/material'

import Header from '../components/historyComponents/header'

const ParentFollowupPage = () => {
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
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div className="h-screen">
      <Header />
      <NextHead>
        <title>Parent Follow Up </title>
      </NextHead>
      <div className="flex justify-center ">
        <div className=" mt-1 font-minionPro">
          <h1 className="text-lg text-[#000000] md:text-2xl">
            Parent Follow Up
          </h1>
        </div>
      </div>

      <form className="justify-center px-10 font-minionPro  md:px-20 ">
        <Grid container p={4} rowSpacing={1} columnSpacing={2}>
          <Grid item xs={16} md={8} lg={3}>
            <InputLabel id="demo-select-small">Parent Name</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
            />
          </Grid>
          <Grid item xs={16} md={8} lg={3}>
            <InputLabel id="demo-select-small" sx={{ marginBottom: 2 }}>
              Month
            </InputLabel>
            <Select fullWidth SelectDisplayProps={{ style: styles.input }}>
              {months.map((month, index) => (
                <MenuItem key={month} value={index}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <InputLabel id="demo-select-small">Comment</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
              multiline
              rows={8}
            />
          </Grid>

          <Grid item xs={16} md={4} lg={4}>
            <InputLabel id="demo-select-small" sx={{ marginBottom: 2 }}>
              Satisfaction
            </InputLabel>
            <Select fullWidth SelectDisplayProps={{ style: styles.input }}>
              <MenuItem value="Satisfied">Satisfied</MenuItem>
              <MenuItem value="Neutral">Neutral</MenuItem>
              <MenuItem value="Dissatisfied">Dissatisfied</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={16} md={4} lg={4}>
            <InputLabel id="demo-select-small" sx={{ marginBottom: 2 }}>
              Status
            </InputLabel>
            <Select fullWidth SelectDisplayProps={{ style: styles.input }}>
              <MenuItem value="On Track">On Track</MenuItem>
              <MenuItem value="Needs Improvement">Needs Improvement</MenuItem>
              <MenuItem value="Behind Schedule">Behind Schedule</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <div className="my-2 mx-2 mb-4 flex justify-center md:my-2 ">
          <button
            class=" focus:shadow-outline my-1 w-1/2 rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none disabled:bg-[#6793d9] md:w-1/6 md:text-xl"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default ParentFollowupPage
