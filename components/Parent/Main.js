function Main(props) {
  return (
    <div
      class="font-miniPro flex w-full rounded-lg bg-white h-full shadow-lg sm:mx-0"
      
    >
      <div class="flex w-full  flex-col  bg-[#FED607] py-6 px-4 md:px-14 lg:w-1/2 xl:w-3/5">
        <div class="flex flex-1 flex-col">
          <div className="w-full ">{props.children}</div>
        </div>
      </div>
      <div
        class="hidden rounded-r-lg md:w-4/6 lg:block  "
        style={{
          background: `url("/parents4.jpg")`,
          backgroundPosition: 'top right',
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}
      ></div>
    </div>
  )
}

export default Main
