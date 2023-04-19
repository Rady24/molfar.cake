import React from 'react'
import Slider from './Aboutslider'
import Photo1 from '../assets/IMG_6670.JPEG'
import Photo2 from '../assets/IMG_6672.JPEG'



const images = [
  Photo1,
  Photo2,
];

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#f5f4f0] text-[#534636]'>
    <div className='md:container md:mx-auto  flex flex-col py-0 pt-[32px] '>

    <div className='w-full '>
        <div className='h-full p-10 flex flex-col md:flex-row items-center gap-4 lg:gap-8 border-b-[1px] border-[#534636] pb-[64px] '>
          <Slider images={images} intervalTime={1000} />
          <div className='w-full md:w-1/2'>
          <p className='text-3xl pb-8'>Hi, Im Molfarka</p>
          <p className='italic text-xl'>Molfars are the bearers of ancient wisdom and guardians of the Carpathian reserves in Ukrainian mythology. By preserving their ancient traditions, they infuse their creations with positive energy and forest gifts.

On meadows and in forests at any time of the year, I gather medicinal plants to reveal their properties and give them to people.

For each cake and pastry, I have an individual approach. From the selection of ingredients and proportions to the decoration and packaging, everything stands out with a unique style that will help you transport yourself into the magic of the Carpathian reserves.</p>
          </div>
        </div>

    </div>
    </div>
    </div>
  )
}
  

export default About