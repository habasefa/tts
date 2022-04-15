import React from 'react'

const Search = () => {
  return (
    <div className="sticky top-36 z-50 w-full bg-white shadow-sm">
      <form>
        <input
          type={'search'}
          name="search"
          placeholder="Search by location"
          style={{ border: '1px solid lightgray' }}
          className="w-3/4 rounded-lg py-4 px-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] focus:shadow-[2px_2px_2px_2px_rgba(0,0,0,0.3)] focus:outline-none md:text-lg lg:w-3/5"
        />
      </form>
      <div className="mt-4 text-right">
        <p className="mr-20 text-base font-bold opacity-70 md:text-lg">
          Sort by last period
        </p>
      </div>
    </div>
  )
}

export default Search
