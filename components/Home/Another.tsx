import { Button, Col, Row } from 'antd'
import 'antd/dist/antd.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Another = () => {
  const router = useRouter()
  return (
    <section className="bg-[#EAEDF1] font-minionPro">
      <div className=" mx-9 py-6 md:mx-20">
        <div className="items-center lg:flex">
          <div className="mt-6 flex w-full items-center justify-center border-gray-500 px-4 lg:mt-0 lg:mr-8 lg:w-1/2 lg:border-r lg:px-12 ">
            <Image
              className="w-full rounded-full"
              src="/another.jpg"
              alt="young girl image"
              width="650"
              height={'650'}
              objectFit={'cover'}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className=" mt-5 lg:mt-0">
              <h3 className="text-center font-minionPro text-3xl font-bold text-[#1A3765] md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
                Get the perfect tutor
              </h3>

              <h3 className="-mt-3 text-center font-minionPro text-3xl font-bold  text-yellow-400 md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
                for your child
              </h3>

              <p className="text-center text-xl text-[#1A3765] md:text-2xl lg:text-left xl:text-3xl 2xl:text-4xl">
                Ready To Help Your Child Reach New Heights? Hire a Professional
                Home Tutor Now!
              </p>
              <div className="text-center lg:text-left">
                <button
                  onClick={() => router.push('/studentRegistration')}
                  className=" mt-0 transform rounded-full bg-[#1A3765] px-12 py-3 text-4xl font-bold text-white  transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-600 focus:outline-none lg:w-auto  xl:py-5 2xl:px-14"
                >
                  Get tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Another
