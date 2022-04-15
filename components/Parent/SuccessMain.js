export default function SuccessMain() {
    return (<header>
        <div class="w-full hidden sm:block  bg-center max-h-screen bg-cover h-[40rem]"  style={{
                background: `url("/parents.jpg")`,
                backgroundPosition: "bottom right",
                backgroundSize: "Ccover"
                            }}>
            <div class="flex items-center justify-center w-full h-full">
                <div className="text-center p-6 mt-80" style={{
                backgroundColor: "rgba(0, 5, 1, 0.60)",
                            }}>
                    <h1 class="text-2xl text-[#FED607] font-bold text-white uppercase lg:text-5xl p-3" style={{border: "1px solid yellow"}}>ORDER SUCCESSFULL!</h1>
                    <p className="text-center text-3xl font-semibold text-[#bfbdba] ">We will contact you in two days!</p>
                    <p className="text-center font-semibold text-xl text-[#bfbdba]">Phone: +251940120591</p>
                </div>
            </div>
        </div>
        <div class=" flex  sm:hidden mt-72  mb-80 items-center justify-center w-full h-full  ">
                <div className="text-center p-11 " style={{
                backgroundColor: "rgba(0, 5, 1, 0.60)",
                            }}>
                    <h1 class="text-4xl text-[#FED607] pb-3 font-bold text-white uppercase p-3 lg:text-5xl" style={{border: "1px solid yellow"}}>ORDER SUCCESSFULL!</h1>
                    <p className="text-center text-2xl font-semibold  text-[#bfbdba] ">We will contact you in two days!</p>
                    <p className="text-center text-xl font-semibold text-[#bfbdba]">Phone: +251940120591</p>
                </div>
            </div>

        <h1 className="text-center text-lg pt-3 font-semibold">Back to Home</h1>
    </header>
    

  );
}
