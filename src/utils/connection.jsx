import React, { useEffect } from 'react'
import Connectioncard from './connectioncard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addconnections } from './connectionslice'
import toast from 'react-hot-toast'

const connection = () => {
  
  const dispatch = useDispatch();
  const url =  import.meta.env.VITE_BASE_URL;
  
  const getdata = async()=>{
    try{
    const id = toast.loading("Loading Your Connections")
    const data = await axios.get(url+"connections",{
        withCredentials:true
    })
    toast.success("Your Connections has been Loaded!",{id:id})
    dispatch(addconnections(data.data));
   }catch(err){
    console.log(err);
   }

   }


   useEffect(() => {
       getdata();
    }, [])
    
    const dataconnections = useSelector(store=>store.connection);

    if(dataconnections?.length==0)return <h1 className='text-center text-xl font-bold'>You Have No Connections!</h1>
    
  return (
    <div className='flex flex-col gap-3 md:flex-row  '>
      <h1 className='text-center text-2xl fornt-bold p-5'>Connections</h1>
      {dataconnections?.map((ele)=>{
       
       return <Connectioncard data={ele}/>

      })

      }

    </div>
  )
}

export default connection