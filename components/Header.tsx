import { Dropdown, Menu } from 'antd'
import { useRouter } from 'next/router'
import { logout, selectUser } from 'redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../backend-utils/user-utils'
function Header() {
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
    
    var name = user.user.email.match(/^([^@]*)@/)[1]
    var role = user.user.role
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
        <a target="_blank" rel="noopener noreferrer" href="/profile">
          Profile
        </a>
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
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="border-gray-200 bg-white px-2 py-2.5  sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/word_logo.png"
              className="mr-3 h-6 sm:h-10"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span> */}
          </a>
          <div className="flex items-center md:order-2">
            {user == null && (
              <button
                onClick={() => router.push('/signup')}
                type="button"
                className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
              >
                Get started
              </button>
            )}
            {user == null && (
              <button
                onClick={() => router.push('/login')}
                type="button"
                className="ml-3 mr-3 rounded-lg border-2 border-blue-700 bg-white px-5 py-2.5 text-center text-sm 
              font-medium text-black hover:border-blue-800 hover:text-blue-700 hover:ring-blue-300 
               focus:ring-4 md:mr-0 "
              >
                Log in
              </button>
            )}
            {user && (
              <Dropdown overlay={menu} placement="bottom" arrow>
                <button
                  type="button"
                  className="dark:focus:ring-orange-300-600 mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-1 focus:ring-orange-300 md:mr-0"
                  id="user-menu-button"
                  aria-expanded="false"
                  onClick={() => router.push('/signup')}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/pp-1.png"
                    alt="user photo"
                  />
                </button>
              </Dropdown>
            )}

            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-4"
          >
            <ul className="mt-4 flex flex-col pt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <a
                  href="/"
                  className="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {role == 'PARENT' && (
                <>
                  <li>
                    <a
                      href="/add-students"
                      className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-black"
                    >
                      Register Student
                    </a>
                  </li>
                  <li>
                    <a
                      href="/report"
                      className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-black"
                    >
                      Report
                    </a>
                  </li>
                </>
              )}
              {role == 'TUTOR' && (
                <>
                  <li>
                    <a
                      href="/find-job"
                      className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-black"
                    >
                      Find Job
                    </a>
                  </li>
                  <li>
                    <a
                      href="/create-report"
                      className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-black"
                    >
                      Report
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
