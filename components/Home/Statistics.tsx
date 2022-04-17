import React from 'react'
import { Button, List, Col, Row } from 'antd'

function Stats({ text, numbers }: any) {
  return (
    <Col xs={24} sm={20} md={10} xl={6} style={{ justifyContent: 'center' }}>
      <div className="mb-20 mt-20 2xl:mt-40">
        <div className="text-3xl font-minionPro sm:text-3xl  md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center font-extrabold text-white ">
          {' '}
          {numbers}
        </div>
        <div className="text-lg  sm:text-xl  md:text-2xl lg:text-3xl text-center pt-10 text-left font-minioPro text-gray-400  text-white">
          {' '}
          <span>{text}</span>{' '}
        </div>
      </div>
    </Col>
  )
}

export default Stats
