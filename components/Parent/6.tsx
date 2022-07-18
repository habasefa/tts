import { ParentComponentProps } from 'utils/types'
import { useState } from 'react'
export default function ParentRegistration_6({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  const [gender, setGender] = useState(formData.st_gender)
  const handleClick = () => {
    setFormData({ ...formData, st_gender: gender })
    setPage((currentPage) => currentPage + 1)
  }
  return (
    <div>
      <div className="bg-[#FED607] font-minionPro">
        <div>
          <h1 className="text-3xl font-bold text-[#1A3765] ">I AM YONATAN.</h1>
          <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
            I am coordinator at Temaribet
          </p>
        </div>
        <div className=" flex justify-start">
          <button
            onClick={() => setGender('Female')}
            style={
              gender == 'Female'
                ? { backgroundColor: 'gray' , color:"white"}
                : { backgroundColor: 'white'  }
            }
            className="  mr-4  bg-white px-10 py-4 text-3xl font-bold text-blue-900"
          >
            Girl
          </button>

          <button
            onClick={() => setGender('Male')}
            style={
              gender == 'Male'
                ? { backgroundColor: 'gray', color:"white" }
                : { backgroundColor: 'white' }
            }
            className=" ml-4 bg-white px-10 py-4 text-3xl  font-bold text-blue-900"
          >
            Boy
          </button>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <label className="text-2xl font-bold tracking-wide" htmlFor="phoneN">
            What is child's name?
          </label>
          <br></br>
          <input
            className="mt-4 w-full py-5"
            type="text"
            id="child_name"
            value={formData.st_name}
            onChange={(e) =>
              setFormData({ ...formData, st_name: e.target.value })
            }
            placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;FirstName&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;LastName "
          ></input>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <button
             onClick={() => {
              setPage((currentPage) => currentPage + 1)
            }}
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
