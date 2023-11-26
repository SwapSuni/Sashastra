import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Header1 = () => {

  const router= useRouter();

  const handle=async()=>{
    console.log("inside handler of handle") ;
    router.push('login');
  }

  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&family=Playfair+Display&display=swap" rel="stylesheet"/>
    </Head>
        <div className=''>
            <div className=''>
                <h1 className='font-semibold tracking-wide text-5xl text-center pt-6 text-white'>SASHASTRA</h1>
            </div>
        </div>
        <div className='flex justify-end mt-5 mr-10'>
          
          <button className='border rounded-lg py-2 hover:bg-cyan-600 px-4' onClick={handle}>Please login / signup first</button>
          
        </div>
    </>
  )
}

export default Header1
