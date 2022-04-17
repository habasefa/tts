import Image from 'next/image'
import 'antd/dist/antd.css'

const Cover = () => {
  return (
    <div className="flex min-h-screen flex-col justify-end bg-[#FED607]">
      <div className="lg:flex">
        <div className="w-full sm:items-center  md:mb-20">
          <div className="mx-9 mt-5 pt-40 md:mx-20 md:mt-20 lg:w-full">
            <h1 className=" 3xl:text-8xl font-serif text-4xl text-[#1A3765]  lg:text-7xl">
              We prepare for life.
            </h1>
            <h1 className=" 3xl:text-8xl font-serif text-4xl font-medium text-white lg:text-7xl ">
              Not just exam!
            </h1>
            <p className="3xl:text-4xl mt-2 font-serif text-2xl text-[#1A3765] md:mb-20">
              Top tutors from all over Addis Abeba
              <br />
              managed by Temaribet
            </p>
            <button className="mb-6  mt-6 w-full transform bg-[#1A3765] px-14 py-5 font-serif text-xl font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-600 focus:outline-none md:text-3xl lg:w-auto lg:rounded-full lg:text-4xl  xl:text-5xl 2xl:text-5xl">
              Get tutor
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-end ">
          <Image
            className="w-full"
            src="/temaribet.png.png"
            alt="young girl image"
            width={'600'}
            height={'700'}
          />
        </div>
      </div>
    </div>
  )
}
export default Cover
