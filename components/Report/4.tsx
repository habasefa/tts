import { ReportComponentProps } from 'utils/types'
export default function ReportRegistration_4({
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
            Did you face any Challanges
          </h1>
        </div>

        <div className="flex flex-col ">
          <div className=" mt-4  lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              Environmentals
            </h1>
            <input
              value={formData.envChallenge}
              onChange={(e) =>
                setFormData({ ...formData, envChallenge: e.target.value })
              }
              className="mt-3 w-full py-3"
              type="text"
              id="envChallenge"
              placeholder=" &nbsp;eg. There was a lot of noise coming from &nbsp;"
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              On the Tutee side
            </h1>
            <input
              value={formData.tuteeChallenge}
              onChange={(e) =>
                setFormData({ ...formData, tuteeChallenge: e.target.value })
              }
              className="mt-3 w-full py-3"
              type="text"
              id="tuteeChallenge"
              placeholder=" &nbsp;eg.  She was very sleepy &nbsp;"
            ></input>
          </div>
          <div className=" mt-4 text-center lg:text-left">
            <h1 className="2xl:pr-30  text-xl font-bold text-[#1A3765] md:text-2xl">
              On your Side
            </h1>
            <input
              value={formData.yourChallenge}
              onChange={(e) =>
                setFormData({ ...formData, yourChallenge: e.target.value })
              }
              className="mt-3 w-full py-3"
              type="text"
              id="yourChallenge"
              placeholder=" &nbsp;eg.  I was very obessed with work issue &nbsp;"
            ></input>
          </div>
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
