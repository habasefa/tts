import { ReportPostProps, TutorPostProps } from 'utils/types'
import { API_URL } from 'utils/url'

const createTutor = async ({
  fullName,
  email,
  phone,
  gender,
  subjects,
  age,
  acadStatus,
  UEE,
  cGPA,
  field,
  college,
  volenteerism,
  prevTutored,
  prevTutorGrades,
  prevTutorExperience,
  idealTutor,
  preferredBank,
  bankAccountNo,
  contactName,
  contactPhone1,
  contactPhone2,
  contactEmail,
  workDays,
  workHour,
  location,
  essay,
  hobby,
  profilePicture,
  token,
  userId,
}: TutorPostProps) => {
  const response = await fetch(`${API_URL}api/v1/tutor/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      fullName,
      email,
      phone,
      gender,
      subjects,
      age,
      acadStatus,
      UEE,
      cGPA,
      field,
      college,
      volenteerism,
      prevTutored,
      prevTutorGrades,
      prevTutorExperience,
      idealTutor,
      preferredBank,
      bankAccountNo,
      contactName,
      contactPhone1,
      contactPhone2,
      contactEmail,
      workDays,
      workHour,
      location,
      essay,
      hobby,
      profilePicture,
      userId,
    }),
  })
  return response
}

const fetchReport = async (  tutorId :number , token: string)=>{
  console.log(tutorId)
  const response = await fetch(`${API_URL}api/v1/report/${tutorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  
  return response

}
const createReport = async ({            
  reports,         
  token,       
  tutorId ,
  totalDays       ,
  totalHours      ,
  month        ,
  week          ,
  feedback        ,
  pastChallenge   ,
  futureChallenge ,
  helpChallenge  ,
  dressing        ,
  grooming        ,
  hygiene        ,
  punctuality     ,
  manner        ,
  elequence ,
  tutorName,
  reportDate ,
  reportMonth ,
  reportYear    
}: ReportPostProps) => {
  console.log(reports)
  console.log(week)
  console.log(month)
  console.log(totalDays)
  const response = await fetch(`${API_URL}api/v1/report/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      reports,
      tutorId,
      totalDays       ,
  totalHours      ,
  month        ,
  week          ,
  feedback        ,
  pastChallenge   ,
  futureChallenge ,
  helpChallenge  ,
  dressing        ,
  grooming        ,
  hygiene        ,
  punctuality     ,
  manner        ,
  elequence ,
  tutorName,
  reportDate ,
  reportMonth   ,
  reportYear      
    }),
  })
  console.log(response)
  return response
}

const getTutorById = async (id: any, token: string) => {
  const response = await fetch(`${API_URL}api/v1/tutor/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  return response
}

const updateTutor = async (id: any, token: string, tutorBody: any) => {
  const response = await fetch(`${API_URL}api/v1/tutor/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...tutorBody }),
  })
  return response
}

const getJobs = async (token: string) => {
  const response = await fetch(`${API_URL}api/v1/job`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  return response
}

const linkJobAndTutor = async (token: string, id: number, tutorId: number) => {
  const response = await fetch(`${API_URL}api/v1/job/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      tutorId,
    }),
  })
  return response
}

export {
  createTutor,
  getTutorById,
  getJobs,
  linkJobAndTutor,
  createReport,
  updateTutor,
  fetchReport
}
