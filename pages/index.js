import Body from "@/components/Body";
import Header1 from "@/components/Header1";
import Head from "next/head";

import React from 'react'

const index = () => {
  return (
    <>
    <Head>
      <title>SASHASTRA | TO-DO MANAGER</title>
    </Head>
      <div className="h-screen w-screen bg-gradient-to-b from-cyan-400 to-cyan-800">
        <Header1></Header1>
        <Body></Body>
      </div>
    </>
  )
}

export default index

