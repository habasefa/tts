import { ReportComponentProps } from 'utils/types'
export default function ReportRegistration_5({
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
            What are you going to do about it?
          </h1>
        </div>

        <div className="flex flex-col ">
          <div className=" mt-4  lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Environmentals
            </h1>
            <input
              value={formData.envResponse}
              onChange={(e) =>
                setFormData({ ...formData, envResponse: e.target.value })
              }
              className="mt-4 w-full py-5"
              type="text"
              id="envResponse"
              placeholder=" &nbsp;eg. There was a lot of noise coming from &nbsp;"
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              On the Tutee side
            </h1>
            <input
              value={formData.tuteeResponse}
              onChange={(e) =>
                setFormData({ ...formData, tuteeResponse: e.target.value })
              }
              className="mt-4 w-full py-5"
              type="text"
              id="tuteeResponse"
              placeholder=" &nbsp;eg.  She was very sleepy &nbsp;"
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              On your Side
            </h1>
            <input
              value={formData.yourResponse}
              onChange={(e) =>
                setFormData({ ...formData, yourResponse: e.target.value })
              }
              className="mt-4 w-full py-5"
              type="text"
              id="yourResponse"
              placeholder=" &nbsp;eg.  I was very obessed with work issue &nbsp;"
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
