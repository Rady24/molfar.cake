import React from 'react'
import Slider from './Aboutslider'
import Photo1 from '../assets/IMG_6670.JPEG'
import Photo2 from '../assets/IMG_6672.JPEG'
import { useTranslation } from 'react-i18next';



const images = [
  Photo1,
  Photo2,
];

const About = () => {
  const {t} = useTranslation();
  return (
    <div name='about' className='w-full h-full bg-[#f5f4f0] text-[#534636]'>
    <div className='md:container md:mx-auto  flex flex-col py-0 pt-[32px] '>

    <div className='w-full '>
        <div className='h-full p-10 flex flex-col md:flex-row items-center gap-4 lg:gap-8 border-b-[1px] border-[#534636] pb-[64px] '>
          <Slider images={images} intervalTime={1000} />
          <div className='w-full md:w-1/2'>
          <p className='text-3xl pb-8'>{t('hi')} </p>
          <p className='italic text-xl'>{t('molfars')}</p>
          </div>
        </div>

    </div>
    </div>
    </div>
  )
}
  

export default About