import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const Body = () => {

    return (
        <>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&family=Playfair+Display&display=swap" rel="stylesheet"/>
        </Head>
            <div className='flex items-center w-full h-3/4 text-slate-300 justify-center'>
                <div className='h-full w-3/6 border-2 mx-16 my-5 rounded-lg border-none'>
                    <div className='my-3 mx-5'>
                        <h2 className='font-bold text-3xl text-slate-100'>Add a new task :</h2>
                        <div>
                            <h2 className='mt-5 mb-2'>Title :</h2>
                            <input type='text' placeholder='enter the title' className='h-10 w-80 rounded-md text-black p-2' onChange={(e)=> setTitle(e.target.value)}></input>
                            <h2 className='mt-5 mb-2'>Description :</h2>
                            <textarea rows={5} cols={50} name='des' className='rounded-md text-black p-2' onChange={(e)=> setDesc(e.target.value)}></textarea>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-md mt-10 text-slate-400'>Please Login or Sign-up first to start / resume your journey</p>
                        </div>
                    </div>
                </div>
                <div className='h-3/5 w-3/6 border-2 m-16 rounded-lg border-none'>
                    <div className='my-10 mx-8'>
                        <h2 className='font-bold text-3xl mb-8 text-slate-100'>What's your plan ?</h2>
                        <p className='font-semibold text-xl my-10'>Create your tasks, list them in your personal space and track your journey...</p>
                        <h3 className='font-bold text-2xl'>Everything in One Place..</h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body
