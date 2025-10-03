'use client'
import { DayContext } from '@/src/utils/Providor/Context'
import Link from 'next/link'
import React, { useContext } from 'react'

interface IProps {
    date: string,
    title: string,
    description: string,
    link: string
}

const BlogListCard = ({date, title, description, link}: IProps) => {
    const Day = useContext(DayContext)
  return (
      <div className={`w-full h-22 px-2 py-1 border-b-[1px] border-neutral-500`}>
            <Link className='w-full' href={link}>
            <div className='w-full flex items-center justify-between'>
                <h1 className={`font-bold text-lg md:text-xl ${Day && Day? 'text-black' : 'text-white'}`}>{title}</h1>
                <span className={`font-medium text-xs md:text-sm ${Day && Day? 'text-black' : 'text-neutral-400'}`}>{date}</span>
            </div>
            <div className='w-full'>
                <p className={`font-medium text-sm md:text-md text-start max-w-100 h-10 overflow-hidden ${Day && Day? 'text-black' : 'text-neutral-400'}`}>{description}</p>
            </div>
    </Link>
        </div>
  )
}

export default BlogListCard