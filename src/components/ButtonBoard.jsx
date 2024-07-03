import React from 'react'

export default function ButtonBoard({resetButton}) {
  return (
    <button className='buttonReset' onClick={resetButton}>Reset?</button>
  )
}
