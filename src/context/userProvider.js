"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { existingUser } from '@/services/signup'

const UserProvider = ({children}) => {
    const [user, setUser] = useState(undefined)

    useEffect(()=>{
        async function load(){
            try{
                const response = await existingUser();
                console.log("response :",response)
                setUser({...response})
            }catch(err){
                console.error(err)
                setUser(undefined)
            }
        }
        load()
    },[])


  return (
   <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserProvider