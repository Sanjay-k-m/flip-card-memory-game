import React from 'react'
import { PATH_DASHBOARD } from "../routes/paths";
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(PATH_DASHBOARD.test("asdf"))
    console.log('test')
  }
  return (
    <div className='bg-red-500 w-screen flex'>
      testttt11111111

      <button onClick={handleClick}>test</button>
    </div>
  )
}

export default Test
