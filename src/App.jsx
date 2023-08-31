import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deCrementCount, inCrementCount, resetCount } from './Redux/counActions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(inCrementCount())
  }

  const handleDecrement = () => {
    dispatch(deCrementCount())
  }
  const handleRsetCount = ()=>{
      dispatch(resetCount())
  }
  return (
    <div className='text-center mt-16'>

      <h1 className='text-5xl mb-10 '>Count :{count}</h1>
      <button onClick={handleIncrement} className='py-1 px-3 text-lg bg-slate-600 rounded-sm mt-3 m-5 text-white'>Increment</button>
      <button onClick={handleRsetCount} className='py-1 px-3 text-lg bg-slate-600 rounded-sm mt-3 m-5 text-white'>Reset</button>
      <button onClick={handleDecrement} className='py-1 px-3 text-lg bg-slate-600 rounded-sm mt-3 m-5 text-white'>Decrement</button>
    </div>
  )
}

export default App