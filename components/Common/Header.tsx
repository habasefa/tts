import { Dropdown, Menu } from 'antd'
import { signout } from 'backend-utils/user-utils'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'redux/userSlice'
const Header = () => {
  const user = useSelector(selectUser)
  const router = useRouter()
  const dispatch = useDispatch()
  const handleLogout = (e: any) => {
    e.preventDefault()
    signout(user.accessToken, user.refreshToken)
    dispatch(logout())
    router.push('/')
  }
  if (user) {
    var name = user.user.email?.match(/^([^@]*)@/)[1]
    var role = user.user.role
    var hiredJobId = user.user.tutor?.hiredJobId
    var profilePicture = user.user.tutor?.profilePicture
  }
  const menu = (
    <Menu>
      <div className="py-3 px-4">
        <span className="block text-sm capitalize text-gray-900 dark:text-gray-900">
          {user && name}
        </span>
        <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
          {user && user.user.email}
        </span>
      </div>
      <Menu.Item key={1}>
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href="/"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </a>
      </Menu.Item>
    </Menu>
  )
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className=" font-minionPro fixed top-0 left-0 right-0 z-50 flex items-center justify-between  overflow-x-hidden bg-[#FED607]  py-0 opacity-100">
      <div className="mx-9 flex w-full flex-wrap items-center justify-between md:mx-20">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <a
            className="font-typograhica mr-4 inline-block  whitespace-nowrap  px-0  text-3xl font-thin leading-relaxed text-white md:py-5 md:text-5xl  2xl:py-6  2xl:text-6xl"
            href="/"
          >
            temaribet
          </a>
          <button
            className=" block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-gray-500 outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={
            'flex-grow items-center justify-center lg:flex' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <ul className="mb-0 flex list-none flex-col items-center justify-center text-lg  lg:ml-auto lg:flex-row 2xl:text-2xl">
            <li className="nav-item h-full md:mx-5">
              <a
                className="flex items-center  px-3 py-1   font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item h-full md:mx-5">
              <a
                className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="nav-item h-full md:mx-5">
              <a
                className="flex items-center px-3 py-1   font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                href="#"
              >
                Pricing
              </a>
            </li>
            {user == null && (
              <li className="nav-item h-full md:mx-5">
                <a
                  className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                  href="#"
                  onClick={() => router.push('/login')}
                >
                  Log In
                </a>
              </li>
            )}
            {user == null && (
              <li className="nav-item  h-full pl-2">
                <button
                  onClick={() => router.push('/signup')}
                  className="transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Register
                </button>
              </li>
            )}
            {user && user.user.role === 'TUTOR' && user.user.tutor !== null && (
              <li className="nav-item h-full md:mx-5">
                <a
                  className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                  href="#"
                  onClick={() => router.push('/jobs-list')}
                >
                  Find Jobs
                </a>
              </li>
            )}
            {hiredJobId && (
              <li className="nav-item h-full md:mx-5">
                <a
                  className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                  href="#"
                  onClick={() => router.push('/tutorReport')}
                >
                  Report
                </a>
              </li>
            )}
            {user && (
              <Dropdown overlay={menu} placement="bottom" arrow>
                <button
                  type="button"
                  className="dark:focus:ring-orange-300-600 mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-1 focus:ring-orange-300 md:mr-0"
                  id="user-menu-button"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open user menu</span>
                  {profilePicture ? (
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={profilePicture}
                      alt="user photo"
                    />
                  ) : (
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/pp-1.png"
                      alt="user photo"
                    />
                  )}
                </button>
              </Dropdown>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
