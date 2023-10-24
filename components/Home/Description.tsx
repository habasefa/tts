const Description = () => {
  return (
    <section>
      <div className=" xl:mt-30 xl:mb-30 mx-9  my-0 flex flex-col py-16 sm:my-10 md:mx-20 md:mt-20 md:mb-20 2xl:mt-40 2xl:mb-40">
        <div className="prose-blue flex w-full  flex-col text-left">
          <div className=" mx-auto">
            <h1 className="font-minionPro text-3xl font-bold  text-[#1A3765] md:text-4xl xl:text-5xl 2xl:text-6xl ">
              We recruit, manage and report
            </h1>
            <h2 className="main-title font-minionPro text-3xl  font-bold text-[#FED607] md:text-4xl xl:text-5xl 2xl:text-6xl ">
              right on your phone.
            </h2>
            <p className="main-title font-minionPro text-lg font-medium md:text-xl lg:text-2xl 2xl:text-3xl ">
              {' '}
              Here at Temaribet, we combine{' '}
              <span className="font-bold text-[#1A3765]">
                careful research
              </span>{' '}
              to select the right tutor,{' '}
              <span className="font-bold text-[#1A3765]">creativity</span> to
              manage the tutor and{' '}
              <span className="font-bold text-[#1A3765]">faithfulness</span> to
              report to you the true progress of your child right at your finger
              tip.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Description
