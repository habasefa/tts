import Image from 'next/image'
import 'antd/dist/antd.css'
import { useRouter } from 'next/router'
const Cover = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/studentRegistration")
  }
  return (
    <div className="flex min-h-screen flex-col justify-end bg-[#FED607]">
      <div className="lg:flex">
        <div className="w-full sm:items-center">
          <div className="mx-9 mt-5 pt-32 2xl:pt-40 md:mx-20 md:mt-16 2xl:mt-20 lg:w-full">
            <h1 className=" 3xl:text-8xl font-minionPro text-4xl text-[#1A3765]  lg:text-7xl">
              We prepare for life.
            </h1>
            <h1 className=" 3xl:text-8xl font-minionPro text-4xl font-medium text-white lg:text-7xl ">
              Not just exam!
            </h1>
            <p className="3xl:text-4xl mt-2 font-minionPro text-xl lg:text-2xl text-[#1A3765] md:mb-10 2xl:mb-20">
              Top tutors from all over Addis Abeba
              <br />
              managed by Temaribet
            </p>
            <button 
            onClick={handleClick}
            className="mb-6 w-full bg-white text-[#1A3765] lg:text-white transform lg:bg-[#1A3765] px-14 py-5 font-serif text-xl font-medium transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-600 focus:outline-none md:text-3xl lg:w-auto lg:rounded-full lg:text-3xl  xl:text-4xl">
              Get tutor
            </button>
          </div>
        </div>

        <div className="flex items-center md:w-2/3 2xl:w-full flex-col justify-end ">
          <Image
            className="w-full"
            src="/temaribet.png.png"
            alt="young girl image"
            width={'400'}
            height={'500'}
          />
        </div>
      </div>
    </div>
  )
}
export default Cover
