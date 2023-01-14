import { createParent } from 'backend-utils/parent-utils'
import { useEffect, useState } from 'react'
import { ParentComponentProps } from 'utils/types'

export default function ParentRegistration_4({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  const [data, setData] = useState<any>(null)
  const [err, setErr] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await createParent({
        fullName: formData.name,
        location: formData.location,
        phone1: formData.phone,
        email: null,
        phone2: null,
        preferredBank: null,
        profilePicture: null,
        userId: null,
      })
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
      setPage((currentPage) => currentPage + 1)
    } catch (error: any) {
      setErr(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    setFormData({ ...formData, pt_id: data?.parent.id })
  }, [data])

  return (
    <div>
      <div className="bg-[#FED607] font-minionPro">
        <div>
          <h1 className="text-center text-3xl font-bold text-[#1A3765] lg:text-left ">
            Our office is located at
          </h1>
          <p className="p-2 pl-0 text-center text-2xl font-semibold  text-[#5A5A5A] lg:text-left">
            Office number, 206 Dream bldg, CMC
          </p>
        </div>

        <div className="mt-24 text-center lg:text-left">
          <label
            className="text-2xl  font-semibold tracking-wide text-[#1A3765] "
            htmlFor="phoneN"
          >
            Your location
          </label>
          <br></br>
          <input
            className="mt-4 w-full py-5"
            type="text"
            id="location"
            placeholder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Addis Ababa&nbsp;  &nbsp; &nbsp; &nbsp; &#124; &nbsp; &nbsp;Address "
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>

        <div className="mt-8 text-center lg:text-left">
          <button
            onClick={handleClick}
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            CONTINUE
          </button>
        </div>
        <div className="mt-4 text-center lg:text-left">
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
