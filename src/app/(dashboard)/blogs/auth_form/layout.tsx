import React from 'react'
import { Metadata } from 'next';

export const metadata : Metadata = {
title: 'How to build login form in react.js',
description: 'How to build login form using men stack, mern stack project, login registration from in react.js, How to register user id, how to register username and password, login form mern stack project, full stack project ideas, full stack projects, full stack mern, login and registration form in react js with database, login and registration form in react js with validation, simple login and registration form in next js, next js project'
}

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>{children}</>
  )
}

export default layout