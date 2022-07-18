import { ParentComponentProps } from 'utils/types'

export default function ParentRegistration_1({
  setPage,
}: ParentComponentProps) {
  return (
    <div>
      <div className="flex font-minionPro flex-col justify-between ">
        <div className="bg-[#FED607]">
          <div className="text-center lg:text-left">
            <h1 className="2xl:pr-30  text-2xl font-semibold text-[#1A3765] md:text-3xl">
              Let us know you a little bit.
            </h1>
            <p className=" p-2 pl-0 text-lg font-semibold  text-[#5A5A5A] md:text-2xl">
              so that we give you the service you deserve.
            </p>
          </div>

          <div className="flex justify-center pt-16">
            <button
              onClick={() => {
                setPage((currentPage) => currentPage + 1)
              }}
              className=" rounded-full  bg-[#1A3765] px-12 py-28 text-5xl   font-semibold text-white hover:bg-blue-700 "
            >
              READY?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
