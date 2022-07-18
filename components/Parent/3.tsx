import { ParentComponentProps } from 'utils/types'

export default function ParentRegistration_3({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  return (
    <div>
      <div className=" bg-[#FED607] font-minionPro">
        <div>
          <h1 className="text-center text-3xl font-bold text-[#1A3765] lg:text-left ">
            This is our phone number.
          </h1>
          <p className="p-2 pl-0 text-center text-2xl font-semibold  text-[#5A5A5A] lg:text-left">
            +251940120591
          </p>
        </div>

        <div className="mt-28 text-center lg:text-left">
          <label
            className="text-2xl font-semibold tracking-wide "
            htmlFor="phoneN"
          >
            Your phone number?
          </label>
          <br></br>
          <input
            className="mt-4 w-full py-5"
            type="text"
            id="phone"
            placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;+251&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;Phone number "
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
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
            className="bg-[#1A3765] py-1 px-3 text-xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}
