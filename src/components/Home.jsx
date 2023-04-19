import React from 'react'
import Homephoto from '../assets/1.JPEG'
import Line from '../assets/pngwing.com.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-[#f5f4f0] text-[#534636]'>
        <div className='md:container md:mx-auto px-8 flex flex-col justify-center pt-0 md:pt-[64px]'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-15 border-y-[1px] border-[#534636] py-8'>
              <img className='hidden xl:block w-[100px] mr-[32px] 2xl:mr-[200px]' src={Line} alt="#" />
                <img className='max-w-[300px] md:max-w-[350px]' src={Homephoto} alt="#" />
                
                <div className='md:max-w-[400px] pl-4 sm:pl-10' > <p className='text-2xl font-bold pb-8'>Welcome to a world where taste and beauty are one!</p>  <p className='text-xl italic'>And now I invite you to plunge into a real paradise of sweets, where each dessert is a real genuine work of art, created with love and attention to every detail.  Embark on an unforgettable journey into the world of delicate creams, crispy cakes and impeccable taste that will delight you!</p> </div>
                <img className='hidden xl:block w-[100px] ml-[32px] 2xl:ml-[200px]' src={Line} alt="#" />
            </div>
        </div>
    </div>
  )
}

export default Home