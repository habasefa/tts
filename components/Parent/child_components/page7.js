const Page7 = () => {
  return (
    <div className = " bg-[#FED607] ">
      <div>
        <h1 className="text-3xl text-[#1A3765] font-bold ">Now let me know the details</h1>
        <p  className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">So that we give the sweetest service</p>
      </div>
      <div className=" flex justify-start md:text-center">
        <button className=" text-4xl bg-white text-white text-[#707070] font-bold mr-4 my-6 px-10 py-6">
          Age
        </button>

        <button className=" text-4xl bg-white text-white text-[#707070] font-bold mr-4 my-6 px-10 py-6">
          Grade
        </button>
      </div>
      <div className = "mt-12 text-center lg:text-left">
        <label className = "tracking-wide font-bold text-2xl" for="name">What is your child's school?</label>
        <br></br>
        <input className="mt-4 py-5 w-full" type="text" id="name" placeHolder=" &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;School &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; "></input>
        </div>

      <div className = "mt-8 text-center lg:text-left">
        <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page7;
