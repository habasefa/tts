import { ParentComponentProps } from 'utils/types'
export default function ParentRegistration_5({
  formData,
  setPage,
}: ParentComponentProps) {
  return (
    <div>
      <div className="flex flex-col justify-between font-minionPro">
        <div className="bg-[#FED607]">
          <div className="text-center lg:text-left">
            <h1 className="2xl:pr-30  text-2xl font-semibold text-[#1A3765] md:text-3xl">
              Now! Tell us about your child's need
            </h1>
            <p className=" p-2 pl-0 text-lg font-semibold  text-[#5A5A5A] md:text-2xl">
              So that we provide a tailor made solution
            </p>
          </div>

          <div className="flex justify-center pt-16">
            <button
              onClick={() => {
                setPage((currentPage) => currentPage + 1)
              }}
              className="rounded-full bg-[#1A3765] px-20 py-36 text-5xl font-semibold text-white hover:bg-blue-700 "
            >
              READY?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
