import React from 'react'

interface PricingCardProps {
  title: string
  price: string
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price }) => {
  return (
    <div className="flex h-56 w-full max-w-xs flex-col justify-evenly rounded-lg bg-white p-6 text-center shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-yellow-50 hover:shadow-2xl md:h-64 md:w-80">
      <h3 className="mb-4 text-3xl font-extrabold text-[#1A3765] md:text-4xl">
        {title}
      </h3>
      <p className="mb-4 text-2xl font-semibold text-[#1A3765] md:text-3xl">
        {price} ETB per hour
      </p>
      {/* <div className="mt-auto">
        <span className="text-sm font-semibold text-yellow-500">
          Limited Offer
        </span>
      </div> */}
    </div>
  )
}

export default PricingCard
