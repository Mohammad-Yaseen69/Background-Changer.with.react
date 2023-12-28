import { useState } from 'react'
import ColorDiv from './Components/ColorDiv'

function App() {
  const [color, setColor] = useState('green')

  return (
    <div className='w-full h-screen'
      style={{ backgroundColor: color }}
    >

      <div className='fixed flex justify-center flex-wrap
       inset-x-0  m-auto bg-black bottom-16 px-3'>
        <div className='fixed flex justify-center gap-10  bg-white rounded-3xl shadow-2xl p-2 px-4'>
          <ColorDiv bgColor='black' state={setColor} />
          <ColorDiv bgColor='red' state={setColor} />
          <ColorDiv bgColor='blue' state={setColor} />
          <ColorDiv bgColor='green' state={setColor} />
          <ColorDiv bgColor='purple' state={setColor} />
          <ColorDiv bgColor='orange' state={setColor} />
          <ColorDiv bgColor='brown' state={setColor} />
        </div>
      </div>
    </div>
  )
}

export default App
