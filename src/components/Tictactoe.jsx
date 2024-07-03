import React from 'react'
import Board from './Board'
import ButtonBoard from './ButtonBoard'

export default function Tictactoe({putContent,resetButton}) {
  return (
    <>
        <div className="tictactoe">
            <h3 className='tittle'>Welcome To Our Challenge</h3>
            <div className="tictactoeBox">
                <Board putContent={putContent}/>
            </div>
            <ButtonBoard resetButton={resetButton}/>
        </div>
    </>
  )
}
