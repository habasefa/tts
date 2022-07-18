import { useState } from 'react'
import { ParentComponentProps } from 'utils/types'

export default function ParentRegistration_11({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  const [subjects, setSubjects] = useState(formData.st_subject)
  const handleClick = () => {
    setFormData({ ...formData, st_subject: subjects })
    setPage((currentPage) => currentPage + 1)
  }
  return (
    <div>
      <div className="bg-[#FED607] font-minionPro h-full">
        <div className="text-center lg:text-left">
          <h1 className="2xl:pr-30  text-2xl font-bold text-[#1A3765] md:text-3xl">
            In what area does your child
          </h1>
          <p className=" p-2 pl-0 text-lg font-semibold  text-[#5A5A5A] md:text-2xl">
            need tutoring.
          </p>
        </div>

        <div className="lg:justify-left grid flex-col justify-center lg:justify-start">
          <div className=" mt-4 text-center lg:text-left w-full">
            <button
              style={
                subjects.includes('Computer Basics')
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Computer Basics')
                    ? oldArray.filter((n) => n !== 'Computer Basics')
                    : [...oldArray, 'Computer Basics']
                )
              }
              className="w-34  w-full bg-white py-3 text-2xl  font-bold text-[#1A3765] shadow-lg   "
            >
              Computer Basics
            </button>
          </div>
          <div className="  mt-4  ">
            <button
              style={
                subjects.includes('Website Development')
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Website Development')
                    ? oldArray.filter((n) => n !== 'Website Development')
                    : [...oldArray, 'Website Development']
                )
              }
              className=" w-max bg-white py-3 px-3 text-2xl font-bold text-[#1A3765] shadow-lg"
            >
              Website Development
            </button>
          </div>
          <div className=" mt-4  ">
            <button
              style={
                subjects.includes('App Development')
                  ? { backgroundColor: 'blue' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('App Development')
                    ? oldArray.filter((n) => n !== 'App Development')
                    : [...oldArray, 'App Development']
                )
              }
              className="w-full bg-white py-3 text-2xl  font-bold text-[#1A3765]  shadow-lg "
            >
              App Development
            </button>
          </div>
        </div>

        <div className="mt-4 text-center lg:text-left">
          <button
            onClick={handleClick}
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-4 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
            className="bg-[#1A3765] py-1 px-3 text-xl font-semibold text-white hover:bg-blue-700 "
            >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
