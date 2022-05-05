import { ParentComponentProps } from 'utils/types'
export default function ParentRegistration_8({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  return (
    <div>
      <div className="bg-[#FED607]">
        <div>
          <h1 className="2xl:pr-30  text-2xl font-bold text-[#1A3765] md:text-3xl">
            In what area does your child
          </h1>
          <p className=" p-2 pl-0 text-lg font-semibold  text-[#5A5A5A] md:text-2xl">
            need tutoring.
          </p>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <button className="  w-34 bg-white py-6 pl-16  pr-12 text-4xl  font-bold text-[#1A3765] shadow-lg  ">
            Academic
          </button>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <button className=" w-max bg-white py-6 pl-16 pr-24 text-4xl  font-bold text-[#1A3765] shadow-lg  ">
            Coding
          </button>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <button className=" bg-white py-6 pl-16  pr-12 text-4xl  font-bold text-[#1A3765] shadow-lg">
            Language
          </button>
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
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
