import React from 'react'

const GradeLevel = () => {
  return (
    <div className="fixed z-50">
      <h1 className="fixed font-serif text-xl opacity-60">Details</h1>
      <h1 className="mt-24 pt-10 font-serif text-base opacity-30 md:text-2xl">
        Grade Level
      </h1>
      <form>
        <input type={'checkbox'} name="KG" id="kg" />
        <label htmlFor="kg" className="ml-3 font-serif font-bold opacity-70">
          KG
        </label>
        <br />
        <input type={'checkbox'} name="1to5" id="1to5" className="" />
        <label htmlFor="1to5" className="ml-3 font-serif font-bold opacity-70">
          1 - 5
        </label>
        <br />
        <input type={'checkbox'} name="6to8" id="6to8" />
        <label htmlFor="6to8" className="ml-3 font-serif font-bold opacity-70">
          6 - 8
        </label>
        <br />
        <input type={'checkbox'} name="9to10" id="9to10" />
        <label htmlFor="9to10" className="ml-3 font-serif font-bold opacity-70">
          9 - 10
        </label>
        <br />
        <input type={'checkbox'} name="11to12" id="11to12" />
        <label
          htmlFor="11to12"
          className="ml-3 font-serif font-bold opacity-70"
        >
          11 - 12
        </label>
        <br />
      </form>
    </div>
  )
}

export default GradeLevel
