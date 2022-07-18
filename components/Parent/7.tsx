import { ParentComponentProps } from 'utils/types'
export default function ParentRegistration_7({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  return (
    <div>
      <div className=" bg-[#FED607] font-minionPro">
        <div>
          <h1 className="text-3xl font-bold text-[#1A3765] ">
            Now let me know the details
          </h1>
          <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
            So that we give the sweetest service
          </p>
        </div>
        <div className=" flex justify-start md:text-center">
          <div className="flex-1">
            <input
              className="mt-4 w-full py-5"
              type="number"
              id="age"
              value={formData.st_age}
              onChange={(e) =>
                setFormData({ ...formData, st_age: parseInt(e.target.value) })
              }
              placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; Age&nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; "
            ></input>
          </div>
          <div className="flex-1">
            <input
              className="mt-4 w-full py-5"
              type="text"
              id="grade"
              value={formData.st_grade}
              onChange={(e) =>
                setFormData({ ...formData, st_grade: e.target.value })
              }
              placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Grade &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; "
            ></input>
          </div>
        </div>
        <div className="mt-12 text-center lg:text-left">
          <label className="text-2xl font-bold tracking-wide" htmlFor="name">
            What is your child's school?
          </label>
          <br></br>
          <input
            className="mt-4 w-full py-5"
            type="text"
            id="school"
            value={formData.st_school}
            onChange={(e) =>
              setFormData({ ...formData, st_school: e.target.value })
            }
            placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;School &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; "
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
        <div className="mt-8 text-center lg:text-left">
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
