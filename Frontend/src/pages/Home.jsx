import React from 'react'
import BannerSlider from '../components/shared/BannerSlider'
import Recommended from '../components/Recommended'
import { movies } from '../utils/constants'
import LiveEvents from '../components/LiveEvents'

const Home = () => {
  return (
    <div className=' bg-gray-900'>
        <BannerSlider/>
        <Recommended movies={movies}/>
        <LiveEvents/>
    </div>
  )
}

export default Home