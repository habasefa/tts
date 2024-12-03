import React from 'react'

interface PricingCardProps {
  title: string
  price: string
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price }) => {
  return (
    <div className="flex h-48 w-full max-w-xs flex-col justify-evenly rounded-lg bg-white p-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl md:h-56 md:w-72">
      {/* <h3 className="text-xl font-extrabold text-yellow-500 md:text-2xl"> */}
      <h3 className="text-2xl font-extrabold text-[#1A3765] md:text-2xl">
        {title}
      </h3>
      <p className=" text-xl font-semibold text-[#1A3765] md:text-xl">
        {price} ETB per hour
      </p>
    </div>
  )
}

export default PricingCard
