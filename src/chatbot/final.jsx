import React from 'react'
import { useSelector } from 'react-redux';

const Final = () => {
  const count = useSelector((state) => state.counter.value)
  // const count = 88

  return (
    <div className='final'>Your name is Gowtham aged {count} has been added to student system. You may now exit.</div>
    
  )
}
export default Final;