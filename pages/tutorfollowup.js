import React ,  { useEffect, useState }  from 'react'
import NextHead from 'next/head'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  InputLabel,
} from '@mui/material'

import { getUserById } from '../backend-utils/user-utils'

import Header from '../components/historyComponents/header'
import { createTutorFollowUp } from '../backend-utils/tutor-utils'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const TutorStandupPage = () => {
  const user = useSelector(selectUser)
  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }
  const date = new Date()
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMonth, setMonth] = useState('')
  const handleMonth = (event) => {
    setMonth(event.target.value)
  }
  const [isSending , setIsSending]= useState(false)
  const year = date.getFullYear()
  const [strength, setStrength] = useState('')
  const handleStrength = (event) => {
    setStrength(event.target.value)
  }
  const [weakness, setWeakness] = useState('')
  const handleWeakness = (event) => {
    setWeakness(event.target.value)
  }
  const [opportunity, setopportunity] = useState('')
  const handleOpportunity = (event) => {
    setopportunity(event.target.value)
  }
  const [threat, setThreat] = useState('')
  const handleThreat = (event) => {
    setThreat(event.target.value)
  }
  const [userData, setUserData] = useState(null)
  const [assesment, setAssesment] = useState('')
  const handleAssesment = (event) => {
    setAssesment(event.target.value)
  }
  const [satisfaction, setSatisfaction] = useState('')
  const handleSatisfaction = (event) => {
    setSatisfaction(event.target.value)
  }
  const [status, setStatus] = useState('')
  const handleStatus = (event) => {
    setStatus(event.target.value)
  }
  const [authenticity, setAuthenticity] = useState('')
  const handleAuthenticity = (event) => {
    setAuthenticity(event.target.value)
  }

  useEffect(() => {
    getUserById(id, token)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
        setIsLoading(false)
      })
      .catch((_) => {
        console.log(_)
      })
  }, [])
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
  const handleSubmit = () => {
    event.preventDefault()
    console.log("hi")
    setIsSending(true)
    createTutorFollowUp({
      tutorId: userData?.tutor.id,
      month: Number(selectedMonth),
      year: Number(year),
      strength: strength,
      weakness: weakness,
      opportunity: opportunity,
      threat: threat,
      assesment: assesment,
      satisfaction: satisfaction,
      status: status,
      authenticity: authenticity,
      token: token,
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => {


        setIsSending(false)
      })
  }
  return (
    <div className="h-screen">
      <Header />
      <NextHead>
        <title>Tutor Monthly Standup</title>
      </NextHead>
      <Backdrop
      sx={{ color: '#fff', backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="info" />
      </Backdrop>
      <div className="flex justify-center ">
        <div className=" mt-1 font-minionPro">
          <h1 className="text-lg text-[#000000] md:text-2xl">
            Tutor Monthly Standup
          </h1>
        </div>
      </div>

      <form
      method='post'
        onSubmit={handleSubmit}
        className="justify-center px-10 font-minionPro  md:px-20 "
      >
        <Grid container p={4} rowSpacing={1} columnSpacing={2}>
          <Grid item xs={16} md={8} lg={3}>
            <InputLabel id="demo-select-small">Tutee Name</InputLabel>
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
            <Select
              fullWidth
              required={true}
              value={selectedMonth}
              onChange={(event) => handleMonth(event)}
              SelectDisplayProps={{ style: styles.input }}
            >
              {months.map((month, index) => (
                <MenuItem key={month} value={index}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <InputLabel id="demo-select-small">Strength</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
              multiline
              rows={4}
              value={strength}
              onChange={(event) => handleStrength(event)}
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <InputLabel id="demo-select-small">Weakness</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
              multiline
              rows={4}
              value={weakness}
              onChange={(event) => handleWeakness(event)}
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <InputLabel id="demo-select-small">Opportunity</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
              multiline
              rows={4}
              value={opportunity}
              onChange={(event) => handleOpportunity(event)}
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <InputLabel id="demo-select-small">Threat</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
              multiline
              rows={4}
              value={threat}
              onChange={(event) => handleThreat(event)}
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <InputLabel id="demo-select-small">Assesment</InputLabel>
            <TextField
              fullWidth
              required={true}
              margin="normal"
              InputProps={{ style: styles.input }}
              multiline
              rows={4}
              value={assesment}
              onChange={(event) => handleAssesment(event)}
            />
          </Grid>
          <Grid item xs={16} md={4} lg={4}>
            <InputLabel id="demo-select-small" sx={{ marginBottom: 2 }}>
              Satisfaction
            </InputLabel>
            <Select
              required={true}
              fullWidth
              SelectDisplayProps={{ style: styles.input }}
              value={satisfaction}
              onChange={(event) => handleSatisfaction(event)}
            >
              <MenuItem value="Satisfied">Satisfied</MenuItem>
              <MenuItem value="Neutral">Neutral</MenuItem>
              <MenuItem value="Dissatisfied">Dissatisfied</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={16} md={4} lg={4}>
            <InputLabel id="demo-select-small" sx={{ marginBottom: 2 }}>
              Status
            </InputLabel>
            <Select
              value={status}
              onChange={(event) => handleStatus(event)}
              required={true}
              fullWidth
              SelectDisplayProps={{ style: styles.input }}
            >
              <MenuItem value="On Track">On Track</MenuItem>
              <MenuItem value="Needs Improvement">Needs Improvement</MenuItem>
              <MenuItem value="Behind Schedule">Behind Schedule</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={16} md={4} lg={4}>
            <InputLabel id="demo-select-small" sx={{ marginBottom: 2 }}>
              Authenticity
            </InputLabel>
            <Select
              value={authenticity}
              onChange={(event) => handleAuthenticity(event)}
              required={true}
              fullWidth
              SelectDisplayProps={{ style: styles.input }}
            >
              <MenuItem value="Authentic">Authentic</MenuItem>
              <MenuItem value="Inauthentic">Inauthentic</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <br />
        <br />
        <div className="my-2 mx-2 mb-4 flex justify-center md:my-2 ">
          <button
            class=" focus:shadow-outline my-1 w-1/2 rounded-xl bg-[#1A3765] py-2 px-4 font-bold text-white hover:bg-[#6793d9] focus:outline-none disabled:bg-[#6793d9] md:w-1/6 md:text-xl"
            type="submit"
            disabled={isSending}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default TutorStandupPage
