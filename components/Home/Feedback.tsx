import { Col, Row } from 'antd'
const Feedback = () => {
  return (
    <section className="mt-20 min-h-screen bg-yellow-50 font-serif md:bg-[#ECF2FB]">
      <div className="  mx-5 h-full py-12 md:mx-16 md:mr-12">
        <div className="mx-auto mt-7">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-[#1A3765] font-bold font-minionPro text-[#1A3765]">
            Why parents love <span className="text-yellow-300">temaribet</span>
          </h2>
        </div>

        <div className="mt-20 mb-36 w-full">
          <div className="mt-7 text-[#1A3765] lg:flex lg:justify-between">
            <div className="w-full  lg:w-1/2">
              <div className="p-8 lg:p-12">
                <div>
                  <p className="font-bold font-minionPro text-lg lg:text-xl 2xl:text-3xl">
                    Abinet Legesse
                  </p>
                  <p className="-mt-6 lg:-mt-4  font-minionPro text-lg lg:text-xl 2xl:text-3xl text-black opacity-30">
                    Father
                  </p>
                </div>

                <p className="mt-10 opacity-70  font-minionPro text-lg lg:text-xl 2xl:text-3xl">
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

            <div className="mt-1 border-gray-500 lg:mt-0 lg:flex-1 lg:border-l">
              <div className="p-8 lg:ml-5 lg:p-12">
                <div>
                  <p className="font-bold font-minionPro text-lg lg:text-xl 2xl:text-3xl">
                    Hananel Girma
                  </p>
                  <p className="-mt-6 lg:-mt-4  font-minionPro text-lg lg:text-xl 2xl:text-3xl text-black opacity-30">
                    Student
                  </p>
                </div>

                <p className="mt-10 w-2/3 opacity-70  font-minionPro text-lg lg:text-xl 2xl:text-3xl">
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
