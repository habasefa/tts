interface IProps {
  fullName: string
  email: string
  phone1: string
  phone2: string
  location: string
  preferredBank: string
  profilePicture: string
  token: string
}
const createParent = async ({
  fullName,
  email,
  phone1,
  phone2,
  preferredBank,
  location,
  profilePicture,
  token,
}: IProps) => {
  const response = await fetch(`http://localhost:4000/api/v1/parent/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      fullName,
      email,
      phone1,
      phone2,
      preferredBank,
      location,
      profilePicture,
    }),
  })
  return response
}

interface IProps2 {
  fullName: string
  nickName: string
  gender: string
  birthDay: any
  subjects: string[]
  grade: string
  address: string
  school: string
  prevTutored: boolean
  prevTutorExperience: string
  idealTutor: string
  workDays: number
  workHour: number
  hobby: string
  token: string
  parentId: number
}

const createStudent = async ({
  fullName,
  nickName,
  gender,
  birthDay,
  subjects,
  grade,
  school,
  address,
  hobby,
  prevTutored,
  prevTutorExperience,
  idealTutor,
  workDays,
  workHour,
  token,
  parentId,
}: IProps2) => {
  const response = await fetch(`http://localhost:4000/api/v1/student/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      fullName,
      nickName,
      gender,
      subjects,
      birthDay,
      grade,
      school,
      address,
      prevTutored,
      prevTutorExperience,
      idealTutor,
      workDays,
      workHour,
      hobby,
      parentId,
    }),
  })
  return response
}

const getParentByEmail = async (email: string, token: string) => {
  const response = await fetch(`http://localhost:4000/api/v1/parent/${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  return response
}

export { createParent, createStudent, getParentByEmail }
