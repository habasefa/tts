import React from 'react'

const PricingCard = (props: any) => {
  const { title, price } = props
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-white hover:shadow-xl"
      style={{ width: '250px', height: '200px' }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-lg font-medium">{price} ETB</p>
    </div>
  )
}

export default PricingCard
