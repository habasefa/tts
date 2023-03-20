import { useState } from 'react'

function App() {
  const [title, setTitle] = useState(0)
  const [number, setNumber] = useState(1)
  const titles = ['AURA program Go for it', 'Michigan Go for it']
  const changeTitle = (event) => {
    event.preventDefault()
    setTitle((title + 1) % 2)
  }
  const incrementNumber = (event) => {
    event.preventDefault()
    setNumber(number + 1)
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>{titles[title]}</h1>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            marginRight: '2px',
          }}
          onClick={(e) => changeTitle(e)}
        >
          Change title
        </button>
        <button
          style={{
            marginRight: '2px',
          }}
          onClick={(e) => incrementNumber(e)}
        >
          Increment Number
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {number}
      </div>
    </div>
  )
}
export default App
