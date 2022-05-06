import { ReportComponentProps } from 'utils/types'
export default function ReportRegistration_7({
  formData,
  setFormData,
  page,
  setPage,
}: ReportComponentProps) {
  return (
    <div>
      <div className="bg-[#FED607]">
        <div className="text-center lg:text-left">
          <h1 className="2xl:pr-30  text-2xl font-bold text-[#1A3765] md:text-3xl">
            Any Quiz, Assignment,Test Result
          </h1>
        </div>

        <div className="flex flex-col ">
          <div className=" mt-4  lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Quiz
            </h1>
            <input
              value={formData.quiz}
              onChange={(e) =>
                setFormData({ ...formData, quiz: e.target.value })
              }
              className="mb-4 w-full py-5"
              type="text"
              id="quiz"
              placeholder=""
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Assignment
            </h1>
            <input
              value={formData.assg}
              onChange={(e) =>
                setFormData({ ...formData, assg: e.target.value })
              }
              className="mb-4 w-full py-5"
              type="text"
              id="assg"
              placeholder=" "
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Test
            </h1>
            <input
              value={formData.test}
              onChange={(e) =>
                setFormData({ ...formData, test: e.target.value })
              }
              className="mb-4 w-full py-5"
              type="text"
              id="test"
              placeholder=""
            ></input>
          </div>
        </div>

        <div className="mt-4 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage + 1)
            }}
            className=" bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-4 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
            className=" bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
