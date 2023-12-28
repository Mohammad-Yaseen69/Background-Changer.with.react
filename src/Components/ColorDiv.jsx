import React from 'react'

function ColorDiv({bgColor , state}) {
  return (
    <div onClick={() => state(bgColor)}  className=' text-white px-3 p-1  rounded-xl cursor-pointer'
    style={{backgroundColor:bgColor}}>{bgColor}</div>
  )
}

export default ColorDiv