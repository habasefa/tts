const Page12 = () => {
  return (
    <div className="font-minionPro bg-[#FED607]">
      <div>
        <h1 className="text-3xl font-bold text-[#1A3765] ">
          Tell us how much hour do you{' '}
        </h1>
        <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
          want your child to be tutored
        </p>
      </div>

      <div className="mt-10 mb-16 flex flex-row">
        <div>
          <label
            className="text-md block py-2 pl-0  font-semibold text-[#5A5A5A]"
            for="price"
          >
            How many days per week
          </label>
          <input
            className="h-12 w-full  text-xl"
            type="text"
            id="days"
            placeHolder="&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;   &nbsp;    &nbsp; Days &nbsp;  &nbsp;  &nbsp;   &nbsp; "
          ></input>
          <label
            className=" p-2 pl-24 text-sm  font-semibold text-[#5A5A5A]"
            for="price"
          >
            {' '}
            Recommended: 3 days
          </label>
        </div>

        <div className="mx-5">
          <label
            className="text-md block py-2 pl-0  font-semibold text-[#5A5A5A]"
            for="price"
          >
            How many hours per day
          </label>
          <input
            className="h-12 w-full  text-xl"
            type="text"
            id="price"
            placeHolder="&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;   &nbsp;    &nbsp; Hour &nbsp;  &nbsp;  &nbsp;   &nbsp; "
          ></input>
          <label
            className=" p-2  pl-24   text-sm  font-semibold text-[#5A5A5A]"
            for="price"
          >
            Recommended: 1:30 hr
          </label>
        </div>
      </div>

      <div className=" mt-32 flex flex-row">
        <div className="mr-8">
          <button className=" bg-[#1A3765] py-2 px-6 text-2xl font-semibold text-white hover:bg-blue-700 ">
            Show Price
          </button>
        </div>
        <div className="mr-6">
          <input className="block h-12" type="text" id="price"></input>
          <label className="text-sm text-[#5A5A5A]" for="price">
            Registration fee: 500 ETB
          </label>
        </div>
      </div>

      <div className="mt-8 text-center md:text-left">
        <button className=" bg-[#1A3765] py-3 px-10 text-3xl font-semibold text-white hover:bg-blue-700 ">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Page12
