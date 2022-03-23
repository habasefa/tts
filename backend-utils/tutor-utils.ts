interface IProps {
  fullName: string
  email: string
  phone: string
  gender: string
  subjects: string[]
  birthDay: any
  acadStatus: string
  UEE: number
  cGPA: string
  field: string
  college: string
  volenteerism: string
  prevTutored: boolean
  prevTutorGrades: string
  prevTutorExperience: string
  idealTutor: string
  preferredBank: string
  bankAccountNo: string
  contactName: string
  contactPhone1: string
  contactPhone2: string | null
  contactEmail: string
  workDays: number
  workHour: number
  location: string
  essay: string
  hobby: string
  profilePicture: string
  token: string
}
const createTutor = async ({
  fullName,
  email,
  phone,
  gender,
  subjects,
  birthDay,
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
}: IProps) => {
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
      birthDay,
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
    }),
  })
  return response
}

const getTutorByEmail = async (email: string, token: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/tutor/email`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
    }),
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

export { createTutor, getTutorByEmail, getJobs }
