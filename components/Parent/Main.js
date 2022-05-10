function Main(props) {
  return (
    <div
      class="font-miniPro flex w-full rounded-lg bg-white  shadow-lg sm:mx-0"
      style={{ height: '680px' }}
    >
      <div class="flex w-full flex-col  bg-[#FED607] py-16  px-14 lg:w-1/2 xl:w-3/5">
        <div class="mb-8 flex flex-1 flex-col">
          <div class="w-full ">{props.children}</div>
        </div>
      </div>
      <div
        class="hidden rounded-r-lg md:w-4/5 lg:block  "
        style={{
          background: `url("/parents4.jpg")`,
          backgroundPosition: 'top right',
        }}
      ></div>
    </div>
  )
}

export default Main
