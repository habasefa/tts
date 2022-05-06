import { ReportComponentProps } from 'utils/types'

export default function ReportRegistration_2({
  formData,
  setFormData,
  page,
  setPage,
}: ReportComponentProps) {
  return (
    <div>
      <div className="bg-[#FED607]">
        <div className="lg:justify-left grid flex-col justify-center lg:justify-start">
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Professionality (10%)
            </h1>
            <input
              value={formData.professionality}
              onChange={(e) =>
                setFormData({ ...formData, professionality: e.target.value })
              }
              className="w-34 h-1/4 w-3/4  bg-white py-6 text-2xl font-bold  text-[#1A3765] shadow-lg md:text-3xl   "
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Semi Total Hour
            </h1>
            <input
              value={formData.semiTotalHour}
              onChange={(e) =>
                setFormData({ ...formData, semiTotalHour: e.target.value })
              }
              className="w-34 h-1/4 w-3/4  bg-white py-6 text-2xl font-bold  text-[#1A3765] shadow-lg md:text-3xl   "
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Number of Days
            </h1>
            <input
              value={formData.noDays}
              onChange={(e) =>
                setFormData({ ...formData, noDays: e.target.value })
              }
              className="w-34 h-1/4 w-3/4  bg-white py-6 text-2xl font-bold  text-[#1A3765] shadow-lg md:text-3xl   "
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
