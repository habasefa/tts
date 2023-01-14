import React from 'react'
import { Row, Col } from 'antd'
import BottomCard from './childComponents/BottomCard'
import 'antd/dist/antd.css'

const BottomRow = (props: any) => {
  return (
    <section className="container mx-auto text-black">
      <div className="flex w-full items-center justify-center">
        <div className="xs:grid-cols-1 mt-8 grid w-full justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="w-full max-w-xs">
            <BottomCard title="Available in" type="available" />
          </div>

          <div className="w-full max-w-xs">
            <BottomCard
              title="Best At"
              type="bestat"
              subjects={props.userData?.subjects}
            />
          </div>

          <div className="w-full max-w-xs">
            <BottomCard title="Fluency" type="fluency" />
          </div>

          <div className="w-full max-w-xs">
            <BottomCard
              title="Hobby"
              type="hobby"
              hobby={props.userData?.hobby}
            />
          </div>

          <div className="w-full max-w-xs">
            <BottomCard title="Vision" type="vision" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BottomRow
