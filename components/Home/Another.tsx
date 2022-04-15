import { Button, Col, Row } from 'antd'
import 'antd/dist/antd.css'
import Image from 'next/image'

const Another = () => {
  return (
    <section className="bg-white font-serif">
      <div className=" mx-5 py-16 md:mx-16">
        <div className="items-center lg:flex">
          <div className="mt-6 flex w-full items-center justify-center border-gray-500 px-4 lg:mt-0 lg:mr-8 lg:w-2/5 lg:border-r ">
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
            <div className=" mt-20 lg:mt-0">
              <h3 className="text-center text-5xl font-bold text-[#1A3765] lg:text-left 2xl:text-7xl">
                Get the perfect tutor
              </h3>

              <h3 className="-mt-3 text-center text-5xl font-bold text-yellow-400 lg:text-left 2xl:text-7xl">
                for your child
              </h3>

              <p className="text-center text-2xl text-[#1A3765] lg:text-left 2xl:text-4xl">
                Top tutors from all over Addis Ababa managed by Temaribet.
              </p>
              <div className="text-center lg:text-left">
                <button className=" mt-20 transform rounded-full bg-[#1A3765] px-12 py-3 text-4xl font-bold text-white  transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-600 focus:outline-none lg:w-auto  xl:py-5 2xl:px-14">
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
