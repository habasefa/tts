import { ReportComponentProps } from 'utils/types'
export default function ReportRegistration_6({
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
            What can we help you?
          </h1>
        </div>

        <div className="flex flex-col ">
          <div className=" mt-4  lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Environmentals
            </h1>
            <input
              value={formData.envHelp}
              onChange={(e) =>
                setFormData({ ...formData, envHelp: e.target.value })
              }
              className="mb-4 w-full py-5"
              type="text"
              id="envHelp"
              placeholder=""
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              On the Tutee side
            </h1>
            <input
              value={formData.tuteeHelp}
              onChange={(e) =>
                setFormData({ ...formData, tuteeHelp: e.target.value })
              }
              className="mb-4 w-full py-5"
              type="text"
              id="tuteeHelp"
              placeholder=" "
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              On your Side
            </h1>
            <input
              value={formData.yourHelp}
              onChange={(e) =>
                setFormData({ ...formData, yourHelp: e.target.value })
              }
              className="mb-4 w-full py-5"
              type="text"
              id="yourHelp"
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
