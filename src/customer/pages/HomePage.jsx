import React from 'react'
import TopCarousel from '../components/HomePageCarousel/TopCarousel'
import { HomeSectionCarousel } from '../components/HomeSectionCarousel/HomeSectionCarousel'

export const HomePage = () => {
  return (
    <div>
    <TopCarousel/> 

    <div className='space-y-10 py-10 justify-center'>
    <HomeSectionCarousel/>
    </div>
    </div>
  )
}
