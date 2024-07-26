import React from 'react'
// import { resolve } from 'styled-jsx/css'


async function takeTime(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000)
    })
}

const page = async() => {
    await takeTime();

  return (
    <div>this is about page</div>
  )
}

export default page