import { useState } from 'react'
import { ParentComponentProps } from 'utils/types'
export default function ParentRegistration_10({
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
      <div className="font-minionPro bg-[#FED607]">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#1A3765] ">
            In what area does your child
          </h1>
          <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
            need tutoring
          </p>
        </div>

        <div className="mt-10 flex flex-row pt-12 ">
          <button
            style={
              subjects.includes('English')
                ? { backgroundColor: 'blue' }
                : { backgroundColor: 'white' }
            }
            onClick={() =>
              setSubjects((oldArray) =>
                oldArray.includes('English')
                  ? oldArray.filter((n) => n !== 'English')
                  : [...oldArray, 'English']
              )
            }
            className=" mr-2 flex-1 bg-white py-3 px-6 text-xl font-bold text-blue-900 shadow-lg hover:bg-blue-700 "
          >
            English
          </button>

          <button
            style={
              subjects.includes('Amharic')
                ? { backgroundColor: 'blue' }
                : { backgroundColor: 'white' }
            }
            onClick={() =>
              setSubjects((oldArray) =>
                oldArray.includes('Amharic')
                  ? oldArray.filter((n) => n !== 'Amharic')
                  : [...oldArray, 'Amharic']
              )
            }
            className=" mr-2 flex-1 bg-white py-3 px-6 text-xl font-bold text-blue-900 shadow-lg hover:bg-blue-700 "
          >
            Amharic
          </button>

          <button
            style={
              subjects.includes('Afan Oromo')
                ? { backgroundColor: 'blue' }
                : { backgroundColor: 'white' }
            }
            onClick={() =>
              setSubjects((oldArray) =>
                oldArray.includes('Afan Oromo')
                  ? oldArray.filter((n) => n !== 'Afan Oromo')
                  : [...oldArray, 'Afan Oromo']
              )
            }
            className=" mr-2 flex-1 bg-white py-3 px-6 text-xl text-xl font-bold text-blue-900 shadow-lg hover:bg-blue-700 "
          >
            Afan Oromo
          </button>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <button
            onClick={handleClick}
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
