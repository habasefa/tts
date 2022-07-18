import { ParentComponentProps } from 'utils/types'

export default function ParentRegistration_2({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  return (
    <div>
      <div className="bg-[#FED607] font-minionPro">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-[#1A3765] ">I AM YONATAN.</h1>
          <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
            I am coordinator at Temaribet
          </p>
        </div>

        <div className="mt-36 text-center lg:text-left">
          <label
            className="text-2xl font-semibold tracking-wide"
            htmlFor="phoneN"
          >
            What is your name?
          </label>
          <br></br>
          <input
            className="mt-4 w-full py-5"
            type="text"
            id="name"
            placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;First name&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;Last name "
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="mt-8 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage + 1)
            }}
            className=" bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  )
}
