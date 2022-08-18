import { ReportComponentProps } from 'utils/types'
export default function ReportRegistration_3({
  formData,
  setFormData,
  page,
  setPage,
}: ReportComponentProps) {
  return (
    <div>
      <div className="bg-[#FED607]">
        <div className=" text-center lg:text-left">
          <h1 className="mt-10 text-center text-3xl font-bold text-[#1A3765] lg:text-left ">
            What subject do you tutor?
          </h1>
          <input
            className="mt-4 w-full py-3"
            type="text"
            id="subjects"
            placeholder=" &nbsp;eg. Maths Physics English &nbsp;"
            value={formData.subjects}
            onChange={(e) =>
              setFormData({ ...formData, subjects: e.target.value })
            }
          ></input>
        </div>

        <div className="mt-10 text-center lg:text-left">
          <h1 className="mt-10 text-center text-3xl font-bold text-[#1A3765] lg:text-left ">
            What topics did you cover?
          </h1>
          <textarea
            value={formData.topics}
            onChange={(e) =>
              setFormData({ ...formData, topics: e.target.value })
            }
            className="mt-4  w-full resize-none py-3"
            id="topics"
            placeholder=" &nbsp;eg. Linear Algebra  Second Law&nbsp;"
          ></textarea>
        </div>

        <div className="mt-1 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage + 1)
            }}
            className=" bg-[#1A3765] py-1 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-1 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
            className=" bg-[#1A3765] py-1 px-6 text-xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
