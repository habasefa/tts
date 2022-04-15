import React from 'react'
import { Button, List, Col, Row } from 'antd'
import 'antd/dist/antd.css'
import GradeLevel from './childComponents/GradeLevel'
import CardView from './CardView'
import Search from './childComponents/Search'

const Body = () => {
  return (
    <div className="mx-12 mt-40">
      <Row gutter={[8, 8]} justify={'space-between'} className="">
        <Col xs={6} xl={5} md={6}>
          <div className="flex flex-col">
            <GradeLevel />
          </div>
        </Col>

        <Col xs={18} xl={19} md={18}>
          <Search />
          <CardView />
        </Col>
      </Row>
    </div>
  )
}

export default Body
