import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'


import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Box,
  Item,
  Button,
  Tabs,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Tab,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
} from '@mui/material'
const About = () => {
  const router = useRouter()

  return (
    <>
      <div className="h-screen overflow-y-scroll bg-gray-50   font-minionPro scrollbar-hide">
        <Header />
        <div className="mt-16  xl:px-16">
          <div className="my-2 p-3 md:p-5">
            <h1 className="mt-12 text-center text-lg md:text-3xl ">About</h1>
            <h2 className="text-lg md:py-2 md:text-2xl">Our Story</h2>
            <div>
              <p>
                Our pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hour Our pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hourOur pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hourOur pricing based on an hourly
                rate.The opportunity of a lifetime passed before him as he tried
                to decide between a cone or a cup.Our Pricing rate per
                hourhourOur pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hourhourOur pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hourhourOur pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hourhourOur pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hourhourOur pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hour
              </p>
            </div>
          </div>

          <div className="my-2 p-3 md:p-5">
            <h2 className="text-lg md:text-2xl">Our Values</h2>
            <div>
              <p>
                Our pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hour Our pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hour
              </p>
              <div className="flex-col space-y-1 md:flex md:flex-row md:space-x-1">
                <div className="md:flex-1 ">
                  <button
                    disabled
                    className="h-full w-full transform rounded-full  bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  focus:outline-none focus:ring  focus:ring-opacity-80"
                  >
                    The fear of the Creater is the beginning of Knowledge
                  </button>
                </div>
                <div className="md:flex-1">
                  <button
                    disabled
                    className="h-full w-full transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  focus:outline-none focus:ring  focus:ring-opacity-80"
                  >
                    Teach as a scientist-artist
                  </button>
                </div>

                <div className="flex-1">
                  <button
                    disabled
                    className="h-full w-full transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  focus:outline-none focus:ring  focus:ring-opacity-80"
                  >
                    Incite the right questions
                  </button>
                </div>
                <div className="flex-1">
                  <button
                    disabled
                    className="h-full w-full transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  focus:outline-none focus:ring  focus:ring-opacity-80"
                  >
                    Serve wholeheartedly as you would want to be served
                  </button>
                </div>
                <div className="flex-1">
                  <button
                    disabled
                    className="h-full w-full transform rounded-full bg-[#1A3765] px-10 py-3  capitalize tracking-wide text-white transition-colors duration-200  focus:outline-none focus:ring  focus:ring-opacity-80"
                  >
                    Cherish exellence an detest averageness
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 p-3 md:p-5">
            <h2 className="text-lg md:text-2xl">Our Customer</h2>
            <div>
              <p>
                Our pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hour Our pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hour Our pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hour Our pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hour Our pricing based on an hourly rate.The opportunity of a
                lifetime passed before him as he tried to decide between a cone
                or a cup.Our Pricing rate per hour Our pricing based on an
                hourly rate.The opportunity of a lifetime passed before him as
                he tried to decide between a cone or a cup.Our Pricing rate per
                hour
              </p>
            </div>
          </div>

          <div className="my-2 p-3 md:p-5">
            <h2 className="text-lg md:text-2xl">Our Staff</h2>
            <div className="flex-col space-y-1 md:flex md:flex-row md:space-x-1">
              <div className="md:flex-1">
                <div className="flex flex-col space-y-1">
                <div className="flex justify-center">
                    <Avatar
                      src={'/pp-1.png'}
                      sx={{
                        height: 64,
                        mb: 2,
                        width: 64,
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">
                      Habtamu Asefa
                    </h2>{' '}
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">CEO</h2>
                  </div>
                 
                </div>
              </div>
              <div className="md:flex-1">
                <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                    <Avatar
                      src={'/pp-1.png'}
                      sx={{
                        height: 64,
                        mb: 2,
                        width: 64,
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">
                      Boaz Tamiru
                    </h2>{' '}
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">HR</h2>
                  </div>
                 
                </div>
              </div>
              <div className="md:flex-1">
                <div className="flex flex-col space-y-1">
                <div className="flex justify-center">
                    <Avatar
                      src={'/pp-1.png'}
                      sx={{
                        height: 64,
                        mb: 2,
                        width: 64,
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">
                      Mintesinot Asefa
                    </h2>{' '}
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">Customer Service</h2>
                  </div>
                 
                </div>
              </div>
              <div className="md:flex-1">
                <div className="flex flex-col space-y-1">
                <div className="flex justify-center">
                    <Avatar
                      src={'/pp-1.png'}
                      sx={{
                        height: 64,
                        mb: 2,
                        width: 64,
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">
                      Bereket Tilahun
                    </h2>{' '}
                  </div>
                  <div>
                    <h2 className="text-center text-lg md:text-2xl">Developer</h2>
                  </div>
                 
                </div>
              </div>
             
            </div>
          </div>
          <div className="flex justify-center my-3">
          <button
              
              onClick={()=>router.push("/studentRegistration")
              }
              
            
              
             
              
              className="transform rounded-full bg-[#1A3765] px-10 py-3 text-lg md:text-2xl  capitalize tracking-wide text-white transition-colors duration-200  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Get Tutor
               
                  
              </button>
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default About
