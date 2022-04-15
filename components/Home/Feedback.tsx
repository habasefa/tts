import { Col, Row } from 'antd'
const Feedback = () => {
  return (
    <section className="mt-20 min-h-screen bg-yellow-50 font-serif md:bg-[#ECF2FB]">
      <div className="  mx-5 h-full py-12 md:mx-16 md:mr-12">
        <div className="mx-auto mt-7">
          <h2 className="lg:text-6px text-4xl  font-semibold text-[#1A3765] md:text-5xl 2xl:text-7xl">
            Why parents love <span className="text-yellow-300">temaribet</span>
          </h2>
        </div>

        <div className="mt-20 mb-36 w-full">
          <div className="mt-7 text-blue-900 lg:flex lg:justify-between">
            <div className="w-full  lg:w-1/2">
              <div className="p-8 lg:p-12">
                <div>
                  <p className="text-2xl font-bold lg:text-3xl 2xl:text-5xl">
                    Abinet Legesse
                  </p>
                  <p className="-mt-6 text-xl text-black opacity-30 lg:-mt-4 lg:text-2xl 2xl:text-4xl">
                    Father
                  </p>
                </div>

                <p className="mt-10 text-2xl 2xl:text-4xl">
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
                  <p className="text-2xl font-bold lg:text-3xl 2xl:text-5xl">
                    Hananel Girma
                  </p>
                  <p className="-mt-6 text-xl text-black opacity-30 lg:-mt-4 lg:text-2xl 2xl:text-4xl">
                    Student
                  </p>
                </div>

                <p className="mt-10 text-2xl 2xl:text-4xl">
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
