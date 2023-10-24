import {
  Badge,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  List,
  Rating,
} from '@mui/material'
import { Avatar, Dropdown, Menu } from 'antd'
import { getUserById, signout } from 'backend-utils/user-utils'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'redux/userSlice'
import { useRef } from 'react'
import {
  FetchAnImage,
  UpdateAReport,
  UpdateAnImage,
  fetchRejectedReport,
  fetchRejectedTimesheet,
} from 'backend-utils/tutor-utils'
import WorkIcon from '@mui/icons-material/Work'
import Typography from '@mui/material/Typography'
import MailIcon from '@mui/icons-material/Mail'
import RedoIcon from '@mui/icons-material/Redo'
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined'
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined'
const Header = () => {
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const user = useSelector(selectUser)
  const router = useRouter()
  const registerMenu = useRef(null)
  const [notify, setNot] = useState<any[]>([])
  const [timNotify, setTimNot] = useState<any[]>([])
  const [isLoading, setisLoading] = useState(false)
  const handleClose = () => {
    setisLoading(false)
  }
  const [reportCount, setReportCount] = useState(0)
  const [timesheetCount, setTimeSheetCount] = useState(0)

  const [tutorData, setTutorData] = useState<any>(null)

  if (user) {
    var token = user.accessToken
    var id = user.user.id
  }

  useEffect(() => {
    if (user) {
      getUserById(id, token)
        .then((data) => {
          console.log(data)
          if (data.status == 403) {
            throw new Error('no valid Token')
          }
          return data
        })
        .then((res) => res.json())
        .then((data) => {
          setTutorData(data)
          let count = 0
          fetchRejectedReport(data.tutor.id, token)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              let temp: any[] = []
              if (data.success) {
                data.reports?.map((report: any) => {
                  console.log(report, 'report')
                  if (
                    report?.view === 'PENDING' ||
                    report?.status === 'REJECTED'
                  ) {
                    count = Number(count) + 1
                  }
                  temp.push(report)
                })
              }
              setReportCount(count)
              setNot(temp)
            })
          let couTime = 0
          fetchRejectedTimesheet(data.tutor.id, token)
            .then((res) => res.json())
            .then((data) => {
              console.log(data, 'i really need to see')
              let temp: any[] = []
              if (data.success) {
                data.timeSheets?.map((timesheet: any) => {
                  if (
                    timesheet?.view === 'PENDING' ||
                    timesheet?.statusOfAcceptance == 'REJECTED'
                  ) {
                    console.log(timesheet, 'seen')
                    couTime = Number(couTime) + 1
                  }
                  FetchAnImage(token, timesheet.id)
                    .then((data) => data.json())
                    .then((data) => console.log(data, 'wanted'))
                  temp.push(timesheet)
                })

                setTimNot(temp)
                setTimeSheetCount(couTime)
              }
            })
        })
        .catch((error) => {
          setisLoading(false)
          dispatch(logout())
          router.push('/login')
        })
    }
  }, [isLoading])

  const dispatch = useDispatch()
  const handleLogout = (e: any) => {
    e.preventDefault()
    signout(user.accessToken, user.refreshToken)
    dispatch(logout())
    router.push('/')
  }
  useEffect(() => {
    console.log(user)
    const closeDropDown = (e: any) => {
      console.log(e, registerMenu.current)
      if (e.srcElement !== registerMenu.current) {
        setDropDown(false)
      }
    }
    document.body.addEventListener('click', closeDropDown)
    return () => document.body.removeEventListener('click', closeDropDown)
  })
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

      {user &&
        user.user.role === 'TUTOR' &&
        tutorData?.tutor?.status === 'SUCCESS' && (
          <Menu.Item key={2}>
            <a href="/tryerror">Report</a>
          </Menu.Item>
        )}
      {user &&
        user.user.role === 'TUTOR' &&
        tutorData?.tutor?.status === 'SUCCESS' && (
          <Menu.Item key={3}>
            <a href="/timesheet">Monthly TimeSheet</a>
          </Menu.Item>
        )}

      {user && user.user.role === 'TUTOR' && (
        <Menu.Item key={4}>
          <a href="/changePassword">Change Password</a>
        </Menu.Item>
      )}
      <Menu.Item key={5}>
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
  const [dropdownOpen, setDropDown] = React.useState(false)
  useEffect(() => {
    const closeDropDown = (e: any) => {
      console.log(e, registerMenu.current)
      if (e.srcElement !== registerMenu.current) {
        setDropDown(false)
      }
    }
    document.body.addEventListener('click', closeDropDown)
    return () => document.body.removeEventListener('click', closeDropDown)
  })
  return (
    <nav className=" fixed left-0 top-0  right-0 z-50 flex items-center justify-between overflow-x-hidden bg-[#FED607] py-2 font-minionPro  opacity-100 lg:my-0 lg:py-0">
      <div className="mx-9 flex w-full flex-wrap items-center justify-between md:mx-20">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <a
            className="mr-4 inline-block whitespace-nowrap  px-0  font-typograhica  text-3xl font-thin leading-relaxed text-white md:py-5 md:text-5xl  2xl:py-6  2xl:text-6xl"
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
            ' lg: flex-grow items-center justify-center rounded-lg py-3 ring-1 lg:flex lg:rounded-none lg:ring-0' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <ul className="justify-centerxl mb-0 flex list-none flex-col items-center text-lg  lg:ml-auto lg:flex-row 2xl:text-2xl">
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
                onClick={() => router.push('/about')}
              >
                About Us
              </a>
            </li>

            {user == null && (
              <li className="nav-item h-full md:mx-5">
                <a
                  className="flex items-center px-3 py-1   font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                  onClick={() => router.push('/pricing')}
                >
                  Pricing
                </a>
              </li>
            )}
            {user == null && (
              <li className="nav-item h-full md:mx-5">
                <a
                  className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                  onClick={() => router.push('/login')}
                >
                  Log In
                </a>
              </li>
            )}
            {user == null && (
              <>
                <li className="nav-item  h-full pl-2 ">
                  <button
                    ref={registerMenu}
                    onClick={() => setDropDown(!dropdownOpen)}
                    className="transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  >
                    Register
                  </button>

                  {dropdownOpen ? (
                    <div
                      className={`fixed  mt-1 divide-y divide-gray-100  rounded-sm border-black bg-white  px-6 py-3  shadow ${
                        dropdownOpen ? 'block' : 'hidden'
                      }`}
                    >
                      <a
                        onClick={() => router.push('/studentRegistration')}
                        className="block py-3 text-base font-semibold text-slate-500 dark:hover:text-white"
                      >
                        Enroll a Student
                      </a>
                      <a
                        onClick={() => router.push('/signup')}
                        className="block w-full py-3 text-base font-semibold text-slate-500  dark:hover:text-white"
                      >
                        Become a Tutor
                      </a>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {/* <button
                  onClick={() => router.push('/signup')}
                  className="transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Register
                  
                </button> */}
                </li>
              </>
            )}
            {/* {user && user.user.role === 'TUTOR' && user.user.tutor !== null && (
              <li className="nav-item h-full md:mx-5">
                <a
                  className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                  href="#"
                  onClick={() => router.push('/jobs-list')}
                >
                  Find Jobs
                </a>
              </li>
            )} */}
            {user &&
              user.user.role === 'TUTOR' &&
              tutorData?.tutor?.status === 'SUCCESS' && (
                <li className="nav-item h-full md:mx-5">
                  <a
                    className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                    onClick={() => router.push('/training')}
                  >
                    Training
                  </a>
                </li>
              )}
            {user && user.user.role === 'TUTOR' && (
              <a
                className="flex items-center px-3 py-1    font-semibold leading-snug text-blue-900 opacity-60  hover:opacity-75"
                onClick={() => {
                  setisLoading(true)
                  if (timNotify.length > 0) {
                    console.log('hidd')
                    timNotify.map((val) => {
                      console.log(val, 'hidd')
                      if (val.statusOfAcceptance == 'SUCCESS') {
                        UpdateAnImage(user.accessToken, val.id, {
                          view: 'SEEN',
                        })
                          .then((data) => console.log(data, 'updated'))
                          .catch((error) => {
                            console.log(error)
                          })
                      }
                    })
                  }
                  if (notify.length > 0) {
                    notify.map((val) => {
                      if (val.status == 'SUCCESS') {
                        UpdateAReport(user.accessToken, val.id, {
                          view: 'SEEN',
                        })
                          .then((data) => console.log(data))
                          .catch((error) => {
                            console.log(error)
                          })
                      }
                    })
                  }
                }}
              >
                Notification
                <Badge
                  badgeContent={timesheetCount + reportCount}
                  color="secondary"
                >
                  <MailIcon color="action" />
                </Badge>
              </a>
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

      <Dialog onClose={handleClose} open={isLoading}>
        <DialogTitle align="center">Notification</DialogTitle>
        <List sx={{ width: '100%', padding: 2, bgcolor: 'background.paper' }}>
          {notify.length > 0 && (
            <Typography variant="h6" mb={2}>
              Reports
            </Typography>
          )}
          {notify?.map((report) => (
            <ListItem
              sx={{
                borderRadius: 2,
                boxShadow: 4,
                p: 2,
                borderBottom: '1px solid #ccc',
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              {report?.status === 'REJECTED' && (
                <>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Your report in which you submitted in{' '}
                        {monthName[report.reportMonth - 1]} {report.reportDate},{' '}
                        {report.reportYear} is Rejected. Because of this reasons
                        listed: {report.comment}
                      </Typography>
                    }
                    secondary={
                      <Button
                        variant="contained"
                        onClick={() => {
                          setisLoading(false)
                          router.push('/report/' + report.id)
                        }}
                      >
                        Retry
                      </Button>
                    }
                  />
                </>
              )}
              {report?.status === 'SUCCESS' && (
                <>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Your report in which you submitted in{' '}
                        {monthName[report.reportMonth - 1]} {report.reportDate},{' '}
                        {report.reportYear} is Accepted. And here are the
                        comments: {report.comment}
                      </Typography>
                    }
                    secondary={
                      <Rating
                        name="size-small"
                        disabled={true}
                        defaultValue={report.rate}
                        size="small"
                      />
                    }
                  />
                </>
              )}
            </ListItem>
          ))}

          {timNotify.length > 0 && (
            <Typography variant="h6" mt={2} mb={2}>
              Timesheets
            </Typography>
          )}
          {timNotify?.map((timesheet) => (
            <ListItem
              sx={{
                borderRadius: 2,
                boxShadow: 4,
                p: 2,
                borderBottom: '1px solid #ccc',
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <FilePresentOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              {timesheet.statusOfAcceptance == 'REJECTED' && (
                <>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Your Timesheet in which you submitted regarding your
                        tutee's parent {timesheet.parent.fullName} in{' '}
                        {monthName[timesheet.month - 1]}, {timesheet.year} is
                        Rejected
                      </Typography>
                    }
                    secondary={
                      <Button
                        variant="contained"
                        onClick={() => {
                          setisLoading(false)
                          router.push('/timesheet/' + timesheet.id)
                        }}
                      >
                        Retry
                      </Button>
                    }
                  />
                </>
              )}

              {timesheet.statusOfAcceptance == 'SUCCESS' && (
                <>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Your Timesheet in which you submitted regarding your
                        tutee's parent {timesheet?.parent?.fullName} in{' '}
                        {monthName[timesheet?.month - 1]}, {timesheet.year} is
                        Accepted
                      </Typography>
                    }
                  />
                </>
              )}
            </ListItem>
          ))}
          {tutorData?.tutor?.status === 'SUCCESS' && (
            <Typography variant="h6" mb={2}>
              Status
            </Typography>
          )}

          {tutorData?.tutor?.status === 'SUCCESS' && (
            <Typography variant="subtitle1">
              Your are active tutor Now
            </Typography>
          )}
        </List>

        {notify.length == 0 &&
          timNotify.length == 0 &&
          tutorData?.tutor?.status != 'SUCCESS' && (
            <Typography align="center" p={2}>
              NO NOTIFICATION FOR TODAY
            </Typography>
          )}
      </Dialog>
    </nav>
  )
}
export default Header
