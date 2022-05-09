import { ReportPostProps, TutorPostProps } from 'utils/types'

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
  const response = await fetch(`http://localhost:4000/api/v1/tutor/`, {
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
const createReport = async ({
  professionality,
  assg,
  noDays,
  feedback,
  semiTotalHour,
  quiz,
  test,
  envChallenge,
  envHelp,
  envResponse,
  yourChallenge,
  yourHelp,
  yourResponse,
  tuteeChallenge,
  tuteeHelp,
  tuteeResponse,
  subjects,
  topics,
  token,
  tutorId,
}: ReportPostProps) => {
  const response = await fetch(`http://localhost:4000/api/v1/report/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      professionality,
      assg,
      noDays,
      feedback,
      semiTotalHour,
      quiz,
      test,
      envChallenge,
      envHelp,
      envResponse,
      yourChallenge,
      yourHelp,
      yourResponse,
      tuteeChallenge,
      tuteeHelp,
      tuteeResponse,
      subjects,
      topics,
      tutorId,
    }),
  })
  return response
}

const getTutorById = async (id: any, token: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/tutor/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  return response
}

const updateTutor = async (id: any, token: string, tutorBody: any) => {
  const response = await fetch(`http://localhost:4000/api/v1/tutor/${id}`, {
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
  const response = await fetch(`http://localhost:4000/api/v1/job`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  return response
}

const linkJobAndTutor = async (token: string, id: number, tutorId: number) => {
  const response = await fetch(`http://localhost:4000/api/v1/job/${id}`, {
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
}
