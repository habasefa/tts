const Page10 = () => {
  return (
    <div className = "font-minionPro bg-[#FED607]">
      <div className="mb-10">
        <h1 className="text-3xl text-[#1A3765] font-bold ">In what area does your child</h1>
        <p className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2" >need tutoring</p>
      </div>

      <div className="flex flex-row mt-10 pt-12 ">
        <button className=" flex-1 shadow-lg mr-2 text-xl bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
          English
        </button>

        <button className=" flex-1 shadow-lg mr-2 text-xl bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
          Amharic
        </button>

        <button className=" flex-1 shadow-lg text-xl mr-2 text-xl bg-white hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-3 px-6 ">
          Afan Oromo
        </button>
      </div>

      <div className = "mt-8 text-center lg:text-left">
        <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
          CONTINUE
        </button>
      </div>

    </div>
  );
};

export default Page10;
