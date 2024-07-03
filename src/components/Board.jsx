import React from 'react'

export default function Board({putContent}) {
  return (
   <>
        <div className="box 1" onClick={putContent}>1</div>
        <div className="box 2" onClick={putContent}>2</div>
        <div className="box 3" onClick={putContent}>3</div>
        <div className="box 4" onClick={putContent}>4</div>
        <div className="box 5" onClick={putContent}>5</div>
        <div className="box 6" onClick={putContent}>6</div>
        <div className="box 7" onClick={putContent}>7</div>
        <div className="box 8" onClick={putContent}>8</div>
        <div className="box 9" onClick={putContent}>9</div>
   </>
  )
}
