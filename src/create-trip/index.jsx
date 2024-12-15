import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { FileInput, Inbox } from 'lucide-react'
import { Input } from 'postcss'
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';


function CreateTrip() {
  const [place,setPlace]=useState();

  const [formData,setFormData]=useState([]);
  const [openDialog,setOpenDialog]=useState(false);

  const handleInputChange=(name,value)=>{


    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const OnGenerateTrip=()=>{

    const user=localStorage.getItem('user');

    if(!user){
      setOpenDialog(true);
      return;
    }
    if(formData?.noOfDays>5)
    {
      return;
    }
  }
  const login=useGoogleLogin({
    onSuccess:(codeResp=>console.log(codeResp)),
    onError:(error)=>console.log(error)
  })
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
       <h2 className='font-bold text-3xl'>Tell us your travel preference🏕️</h2>
       <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information,and our trip planner will generate a customized itinerary based on your preference.</p>

      <div className='mt-20'>
        <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
        <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange:(v)=>{setPlace(v);handleInputChange('location',v)}
            }}
        />
      </div> 
      <div className='mt-20 flex flex-col gap-9 '>
      <h2 className='text-xl my-3 font-medium'>How many days you are planning for?</h2>
        <input placeholder='Ex.3'
          onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
        />
      </div>
      <div>
      <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {SelectBudgetOptions.map((item,index)=>(
          <div key={index} 
             onChange={()=>handleInputChange('budget',item.title)}
              className={`p-4 border rounded-lg 
                 hover:shadow-lg cursor-pointer
                ${formData?.budget==item.title&&'shadow-lg border-black'}
                 `}>
            <h2 className='text-4xl'>{item.id}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
      </div>
      </div>

      <div>
      <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {SelectTravelesList.map((item,index)=>(
          <div key={index} 
           onChange={()=>handleInputChange('traveller',item.people)}
          className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
            ${formData?.traveler==item.title&&'shadow-lg border-black'}
          `}>
            <h2 className='text-4xl'>{item.id}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
      </div>
      </div>
      <div className='my-10 justify-end flex'>
        <button onClick={OnGenerateTrip}>Generate trip</button>
      </div> 
      <Dialog open={openDialog}>
        
        <DialogContent>
          <DialogHeader>
            
            <DialogDescription>
              
              <h2 className='font-bold text-lg'>Sign in with Google</h2>
              <p className='mt-2'>Sign in to app with Google auth securely!</p>

              <button 
              onClick={login}
              className='w-full mt-5 flex gap-5 align-middle'>
              <FcGoogle className='h-7 w-7' />Sign in with Google</button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
 
    </div>


  )
}

export default CreateTrip
