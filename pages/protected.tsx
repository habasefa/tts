import Header from '@/components/Header'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'

function Protected() {
  const user = useSelector(selectUser)
  const [tutors, setTutors] = useState([])
  return (
    <div>
      <Header />
      Hey
    </div>
  )
}

export default Protected
