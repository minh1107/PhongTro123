import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation'

const Home = () => {
  return (
    <div className='w-full m-auto h-full border-red-500'>
          <Header />
          <Navigation /> 
        <div className='w-full flex flex-col items-center justify-start my-[10px]'>
          <Outlet />
        </div>
    </div>
  )
}

export default Home