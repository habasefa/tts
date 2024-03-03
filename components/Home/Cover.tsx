import Image from 'next/image'
import 'antd/dist/antd.css'
import { useRouter } from 'next/router'
const Cover = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/studentRegistration')
  }
  return (
    <div className="flex min-h-screen flex-col justify-end bg-[#FED607] px-0">
      <div className="lg:flex">
        <div className="w-full sm:items-center md:mb-16">
          <div className="mx-9 mt-5 pt-32 md:mx-20 md:mt-16 lg:w-full 2xl:mt-16 2xl:pt-40">
            <h1 className=" 3xl:text-7xl m-0 font-minionPro text-lg text-[#1A3765] opacity-75  lg:text-2xl">
              Professional Tutoring Company
            </h1>
            <h1 className=" 3xl:text-8xl font-minionPro text-4xl font-bold text-white lg:text-6xl ">
              Are you a busy parent?
            </h1>
            <p className="3xl:text-4xl lg:text-wrap mt-14 font-minionPro text-xl   text-[#1A3765] opacity-75 md:mb-10 lg:pr-10 lg:text-2xl 2xl:mb-5">
              Hire us and witness your child succeed with no added stress on
              you!
            </p>
            <button
              onClick={handleClick}
              className="w-full transform rounded-md bg-white py-5 px-14 font-sans text-xl font-bold text-[#1A3765] transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-600 focus:outline-none lg:w-1/3 "
            >
              Get tutor
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end md:w-2/3 2xl:w-full ">
          <Image
            className="w-full"
            src="/myProject.png"
            alt="young girl image"
            width={'1000'}
            height={'900'}
          />
        </div>
      </div>
    </div>
  )
}
export default Cover
