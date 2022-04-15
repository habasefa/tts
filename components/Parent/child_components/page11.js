const Page11 = () => {
  return (
    <div className="bg-[#FED607]">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl  md:text-3xl text-[#1A3765] font-bold 2xl:pr-30">
          In what area does your child
        </h1>
        <p className=" text-lg md:text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">
          need tutoring.
        </p>
      </div>

      <div className = "grid justify-center lg:justify-start flex-col lg:justify-left">

        <div className=" mt-8 text-center lg:text-left">
          <button className="w-full  text-4xl shadow-lg bg-white w-34  text-[#1A3765] font-bold py-6   ">
            Computer Basics
          </button>
        </div>
        <div className="  mt-8  ">
          <button className=" text-4xl shadow-lg bg-white w-max text-[#1A3765] font-bold py-6 px-3">
            Website Development
          </button>
        </div>
        <div className=" mt-8  ">
          <button className="w-full text-4xl shadow-lg bg-white  text-[#1A3765] font-bold  py-6 ">
            App Developm
          </button>
        </div>
      </div>

      <div className="mt-8 text-center lg:text-left">
        <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page11;
