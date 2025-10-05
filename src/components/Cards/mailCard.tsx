'use client'
import React from 'react'

const MailCard = () => {
  return (
    <div className='max-w-150 w-full md:border rounded-lg px-4 md:px-8 py-2 md:py-4'>
        <h1 className='w-full text-center font-semibold italic text-white py-4'>Let&apos;s have a talk!</h1>
        <form className='w-full flex flex-col items-start justify-start gap-4'>
            <input className='w-full border outline-none font-medium text-md px-5 py-1 rounded-md' type="text" placeholder='Jhon doe' />
            <input className='w-full border outline-none font-medium text-md px-5 py-1 rounded-md' type="text" placeholder='demomail@gmail.com' />
            <textarea rows={10} cols={15} className='w-full border outline-none rounded-md font-medium text-md px-5 py-1' placeholder="I'm writing this mail just to say that I read your blogs and it really really helps me to understand and improve myself."></textarea>
            <button className='w-full flex items-center justify-center py-1 px-5 font-medium text-md md:text-lg text-white cursor-pointer border rounded-md ease duration-300 hover:text-black hover:bg-white'>Send</button>
        </form>
    </div>
  )
}

export default MailCard