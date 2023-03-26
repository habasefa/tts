import { Dispatch, SetStateAction } from 'react'
import { string } from 'yup'
export interface ParentFormProps {
  name: string
  phone: string
  location: string
  pt_id: string
  st_name: string
  st_gender: string
  st_age: number
  st_grade: string
  st_school: string
  st_subject: string[]
  days: number
  hours: number
}
export interface ReportFormProps {
  professionality: string
  semiTotalHour: string
  noDays: string
  feedback: string
  envChallenge: string
  tuteeChallenge: string
  yourChallenge: string
  envResponse: string
  tuteeResponse: string
  yourResponse: string
  envHelp: string
  tuteeHelp: string
  yourHelp: string
  quiz: string
  assg: string
  test: string
  subjects: string
  topics: string
}
export interface ParentComponentProps {
  formData: ParentFormProps
  setFormData: Dispatch<SetStateAction<ParentFormProps>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
}
export interface ReportComponentProps {
  formData: ReportFormProps
  setFormData: Dispatch<SetStateAction<ReportFormProps>>
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
  userId: string | null
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
  parentId: string
  tutorId : string | null
}

export interface ReportPostProps {

  // professionality: string | null
  // assg: string | null
  // noDays: string
  // feedback: string | null
  // semiTotalHour: string | null
  // quiz: string | null
  // test: string | null
  // envChallenge: string | null
  // envHelp: string | null
  // envResponse: string | null
  // yourChallenge: string | null
  // yourHelp: string | null
  // yourResponse: string | null
  // tuteeChallenge: string | null
  // tuteeHelp: string | null
  // tuteeResponse: string | null
  // subjects: string | null
  // topics: string | null
  totalDays: String | null
  totalHours: String | null
  month: String | null
  week: String | null
  feedback: String | null
  pastChallenge: String | null
  futureChallenge: String | null
  helpChallenge: String | null
  dressing: String | null
  grooming: String | null
  hygiene: String | null
  punctuality: String | null
  manner: String | null
  elequence: String | null
  reports: object | null
  token: string
  tutorId: string
  tutorName:String | null
  reportDate: number
  reportMonth : number
  reportYear: number
}
export interface TimeSheetProps {
  tutorId : string
  listStudent: object
  parentId : String
  month : String
  image : Blob
  token: String
  year : String

}
export interface TutorFollowup {
  tutorId : string
  month :  String
  year : String
  strength: String
  weakness : String
  opportunity : String
  threat:String
  assesment:String
  satisfaction: String
  status: String
  authenticity: String
  token:String
}

export interface ParentFollowup {
  parentId : string
  month :  String
  year : String
  comment: String
  satisfaction: String
  status: String
  token:String
}
export interface TutorPostProps {
  fullName: string
  email: string
  phone: string
  gender: string
  subjects: string[]
  age: number
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
  telegramUsername:string
  hobby: string
  profilePicture: string
  token: string
  userId: string
}
