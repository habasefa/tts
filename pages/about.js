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
import { sendMessage } from '../backend-utils/tutor-utils'
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
            <p className="text-lg">
              Three years ago, our founder was volunteering at Meriam Beza Library in Addis Ababa near Menelik Hospital – a small library in a village of financial disadvantaged people. Through the after school program there, he got to realize how many students find it difficult and challenging to keep up with traditional learning environments and thrive towards achieving their goals. This motivated him to establish a home tutoring startup, which would help these students achieve academic success through sparking and nurturing their curiosity. 

<br></br> Our team of expert tutors has been positively impacting the learning journey of various students since then. We cater to each student’s individual needs, talents, and interests and continuously use data-driven approach to hone our services. Our tutors provide personalized instruction tailored-fit for each student’s strengths as well as weaknesses supported by engaging digital tools as well as resources designed especially to optimize their learning process in every way possible. As a result of our continuous hard work and innovation, we have now over 50 customers who trust us for continued guidance on their paths towards excellence in academics. 

<br></br> At our core purpose lies the strong belief that everyone should have the opportunity to pursue academic excellence. Hence, we proudly strive to offer our services paying great attention that no one is left behind from progressive opportunities which education provides us all with. 

<br></br> We are inspired by the individuals pursuing educational excellence daily. Join us on this journey; experience world-class education from your own comfort by signing up for enthusiastic home professional tutoring sessions with us!
              </p>
            </div>
          </div>

          <div className="my-2 p-3 md:p-5">
            <h2 className="text-lg md:text-2xl">Our Values</h2>
            <div>
              
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
            <p className="text-lg">
              Are you a busy parent in Addis Ababa? Looking for quality home tutoring services for your child? Worry no more. Our home tutoring startup provides the perfect solution for you.We are committed to finding caring and brilliantly educated tutors who understand the needs of your kids. With our tailored teaching plans guaranteed to help your kids enhance their learning experience, you can be confident that your child's academic well-being is cared for!
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
                      src={'/habtamu.jpg'}
                      sx={{
                        height: 128,
                        mb: 2,
                        width: 128,
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
                        height: 128,
                        mb: 2,
                        width: 128,
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
                      src={'/minte.jpg'}
                      sx={{
                        height: 128,
                        mb: 2,
                        width: 128,
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
                        height: 128,
                        mb: 2,
                        width: 128,
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
        <div className="flex justify-center my-4">
          <button
              
              onClick={()=>sendMessage()
              }
              
            
              
             
              
              className="transform rounded-full bg-[#1A3765] px-10 py-3 text-lg md:text-2xl  capitalize tracking-wide text-white transition-colors duration-200  hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
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
