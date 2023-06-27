import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t} = useTranslation();
  return (
    
    <div name='contact' className='w-full h-full bg-[#f5f4f0] text-[#534636] flex justify-center items-center p-4 py-[32px]'>

        <form method='POST' action="https://getform.io/f/fe951989-7977-4dea-bd38-38195bca87c8" className='flex flex-col justify-center max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#534636] '>{t('contact')}</p>
            <p className=' py-4 italic'>{t('submit')}</p>
          </div>
          <input className='bg-gray-200 p-2' type="text" placeholder= {t('name')} name='name' />
          <input className='my-4 p-2 bg-gray-200' type="text" placeholder={t('email')} name='email' />
          <textarea className='bg-gray-200 p-2' name="message" rows="10" placeholder={t('Message')}></textarea>
          <button className='text-[#534636] border-2 border-[#534636] hover:bg-[#534636] hover:[#534636] hover:text-white px-4 py-3 my-8 mx-auto flex items-center italic'>{t('lets')}</button>
        </form>
    </div>
    
  )
}

export default Contact