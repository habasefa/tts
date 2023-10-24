import React from 'react'
import { Button, List, Col, Row } from 'antd'

function Stats({ text, numbers }: any) {
  return (
    <Col xs={24} sm={20} md={10} xl={6}>
      <div className="mt-10 mb-5 2xl:mt-10">
        <div className="text-center font-minionPro text-6xl  font-extrabold text-white sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl ">
          {' '}
          {numbers}
        </div>
        <div className="pt-2  text-center  font-minionPro text-2xl font-semibold text-gray-400  sm:text-2xl md:text-2xl  lg:text-3xl">
          {' '}
          <span>{text}</span>{' '}
        </div>
      </div>
    </Col>
  )
}

export default Stats
