import { Dispatch, SetStateAction } from 'react'
export interface ParentFormProps {
  name: string
  phone: string
  location: string
  pt_id: number
  st_name: string
  st_gender: string
  st_age: number
  st_grade: string
  st_school: string
  st_subject: string[]
  days: number
  hours: number
}
export interface ParentComponentProps {
  formData: ParentFormProps
  setFormData: Dispatch<SetStateAction<ParentFormProps>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
}
export interface ParentPostProps {
  fullName: string
  email: string | null
  phone1: string
  phone2: string | null
  location: string
  preferredBank: string | null
  profilePicture: string | null
  userId: number | null
}

export interface StudentPostProps {
  fullName: string
  nickName: string | null
  gender: string
  age: number | null
  subjects: string[]
  grade: string
  address: string | null
  school: string | null
  prevTutored: boolean | null
  prevTutorExperience: string | null
  idealTutor: string | null
  workDays: number | null
  workHour: number | null
  hobby: string | null
  parentId: number
}
