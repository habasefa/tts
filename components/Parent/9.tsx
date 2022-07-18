import { useState } from 'react'
import { ParentComponentProps } from 'utils/types'
export default function ParentRegistration_9({
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
      <div className=" font-minionPro bg-[#FED607]">
        <div>
          <h1 className="text-3xl font-bold text-[#1A3765] ">
            In what area does your child
          </h1>
          <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
            need tutoring
          </p>
        </div>

        <div className="mt-10 text-center md:text-left">
          <input className="mr-2" type="radio" value="" name="" id="all" />

          <label
            className="p-2 pl-0  text-xl  font-semibold text-[#5A5A5A]"
            htmlFor="all"
          >
            All subjects 2 in grade 6{' '}
          </label>
          <br></br>
        </div>

        <div>
          <div className="mt-4 flex flex-row w-full">
            <button
              style={
                subjects.includes('Math')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Math')
                    ? oldArray.filter((n) => n !== 'Math')
                    : [...oldArray, 'Math']
                )
              }
              className=" mr-2  flex-1 bg-white py-3 w-1/2 text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              Math
            </button>

            <button
              style={
                subjects.includes('Phyiscs')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Phyiscs')
                    ? oldArray.filter((n) => n !== 'Phyiscs')
                    : [...oldArray, 'Phyiscs']
                )
              }
              className="mr-2  flex-1 bg-white py-3 w-1/2 text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              Phyiscs
            </button>

            <button
              style={
                subjects.includes('Chemistry')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Chemistry')
                    ? oldArray.filter((n) => n !== 'Chemistry')
                    : [...oldArray, 'Chemistry']
                )
              }
              className="mr-2  flex-1 bg-white py-3 w-1/2 text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              Chemistry
            </button>
          </div>

          <div className="my-4 flex flex-row w-full">
            <button
              style={
                subjects.includes('Biology')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Biology')
                    ? oldArray.filter((n) => n !== 'Biology')
                    : [...oldArray, 'Biology']
                )
              }
              className=" mr-2  flex-1 bg-white py-3 w-1/2 text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              Biology
            </button>

            <button
              style={
                subjects.includes('History')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('History')
                    ? oldArray.filter((n) => n !== 'History')
                    : [...oldArray, 'History']
                )
              }
              className="mr-2  flex-1 bg-white py-3 w-1/2 text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              History
            </button>

            <button
              style={
                subjects.includes('Geography')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Geography')
                    ? oldArray.filter((n) => n !== 'Geography')
                    : [...oldArray, 'Geography']
                )
              }
              className="mr-2  flex-1 bg-white py-3 w-1/2 text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              Geography
            </button>
          </div>

          <div className="my-4 flex flex-row w-full">
            <button
              style={
                subjects.includes('Economics')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Economics')
                    ? oldArray.filter((n) => n !== 'Economics')
                    : [...oldArray, 'Economics']
                )
              }
              className=" mr-2 flex-1 w-1/2 bg-white py-3  text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              Economics
            </button>

            <button
              style={
                subjects.includes('Civics')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('Civics')
                    ? oldArray.filter((n) => n !== 'Civics')
                    : [...oldArray, 'Civics']
                )
              }
              className="mr-2  flex-1 w-1/2 bg-white py-3  text-lg font-bold  hover:bg-blue-700 hover:text-black "
            >
              Civics
            </button>

            <button
              style={
                subjects.includes('SAT')
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: 'white' }
              }
              onClick={() =>
                setSubjects((oldArray) =>
                  oldArray.includes('SAT')
                    ? oldArray.filter((n) => n !== 'SAT')
                    : [...oldArray, 'SAT']
                )
              }
              className=" mr-2  flex-1 bg-white w-1/2 py-3  text-lg font-bold text-blue-900 hover:bg-blue-700 hover:text-black "
            >
              SAT
            </button>
          </div>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <button  className="bg-[#1A3765] py-1 px-3 text-xl font-semibold text-white hover:bg-blue-700 "
            >
            + Add subject
          </button>
        </div>

        <div className="mt-6 text-center lg:text-left">
          <button
            onClick={handleClick}
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-6 text-center lg:text-left">
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
