import React from 'react'
import { Button, List, Col, Row } from 'antd'

function Stats({ text, numbers }: any) {
  return (
    <Col xs={24} sm={20} md={10} xl={6} style={{ justifyContent: 'center' }}>
      <div className="mb-20">
        <div className=" text-bold  text-center  text-6xl text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl ">
          {' '}
          {numbers}
        </div>
        <div className="pt-10  text-left  text-center text-lg text-gray-400 text-white sm:text-xl  md:text-2xl  lg:text-3xl">
          {' '}
          <span>{text}</span>{' '}
        </div>
      </div>
    </Col>
  )
}

export default Stats
