import { Col, Row } from 'antd'
const Feedback = () => {
  return (
    <section className="bg-[#FFEF00]font-minionPro mt-20 min-h-screen md:bg-[#ECF2FB]">
      <div className="  mx-9 my-0 h-full py-0 md:mx-20 md:mr-16">
        <div className="mx-auto mt-0">
          <h2 className="text-3xl font-bold text-[#1A3765] md:text-4xl xl:text-5xl  2xl:text-6xl">
            Our parents say this about{' '}
            <span className="text-[#FFEF00]">Us</span>
          </h2>
        </div>

        <div className="mb-30 mt-10 w-full">
          <div className="mt-7 text-[#1A3765] lg:flex lg:justify-between">
            <div className="w-full  lg:w-1/2">
              <div className="px-2 lg:p-12">
                <div>
                  <p className="text-lg  font-bold lg:text-xl 2xl:text-3xl">
                    Abinet Legesse
                  </p>
                  <p className="-mt-6 font-minionPro  text-lg text-black opacity-30 lg:-mt-4 lg:text-xl 2xl:text-3xl">
                    Mother
                  </p>
                </div>

                <p className="mt-5 font-minionPro  text-lg opacity-70 lg:text-xl 2xl:text-3xl">
                  We have found the approach of tutors at Temaribet to be
                  student-centered. We had the opportunity to observe her
                  tutorial session and it has been a great relief for us to see
                  her enjoy learning with active participation throughtout her
                  session. This helped Hananel to show significant improvement
                  not only in her academic achievement but also her change of
                  perspective to spend ample time working on her school
                  activities.
                </p>
              </div>
            </div>

            <div className="mt-5 border-gray-500 lg:mt-0 lg:flex-1 lg:border-l">
              <div className="p-3 lg:ml-5 lg:p-12">
                <div>
                  <p className="font-minionPro text-lg font-bold lg:text-xl 2xl:text-3xl">
                    Hananel Girma
                  </p>
                  <p className="-mt-6 font-minionPro  text-lg text-black opacity-30 lg:-mt-4 lg:text-xl 2xl:text-3xl">
                    Student
                  </p>
                </div>

                <p className="mt-3 font-minionPro  text-lg opacity-70 lg:text-xl 2xl:text-3xl">
                  The tutorial helped me to improve my chemistry assessment. It
                  become interesting and made me want to study more on my own.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  )
}
export default Feedback
