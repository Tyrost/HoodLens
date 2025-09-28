'use client';
import { UserResource } from '@clerk/types';
import Image from 'next/image';

import PersonalForm from './forms/PersonalForm';
import RadialBar from './widgets/RadialBar';
import PersonalizedWelcome from './widgets/PersonalizedWelcome';
import PreviewPlanCards from './widgets/PreviewPlanCards';

import GoBackHomeButton from '../misc/BackHomeButton';
import Logo from '../misc/Logo';
import Footer from '../main/Footer';
import React from 'react';

const AccountMainPanel = ({userData} : {userData : UserResource | null | undefined}) => {


    // TODO
    const handleEditPhoto = () => {

    };

    const data = {
        firstName: "Daniel",
        location: { city: "Eugene", state: "OR" },
        preferences: [
          { label: "Walkability", value: 80 },
          { label: "Quiet Streets", value: 70 },
          { label: "Access to Parks", value: 90 },
          { label: "Modern Interiors", value: 65 },
          { label: "Public Transit", value: 55 },
          { label: "Nightlife", value: 35 },
        ],
      }

    return (
        <>
        {/* Custom Background */}

        {/* Top Bar */}
        <GoBackHomeButton theme='light'/>
        <div className='w-full flex justify-center'>
            <Logo path='/logo/BoxesBlack.png' cursor={false}/>
        </div>

        {/* Content */}
        <div className="flex flex-col mx-[2vw] bg-[url('/homes/model.png')] bg-no-repeat bg-cover bg-center rounded-md">

            <div className={`flex justify-center items-center w-full gap-x-[5vw] py-[5vh]`}>

                {/* User Image */}
                <div className='relative group cursor-pointer flex-shrink-0 w-[25vw] h-[25vw] transition-all duration-300'
                onClick={handleEditPhoto}>
                    <Image 
                        src={userData?.imageUrl ?? "/user_logged_img.png"}
                        alt={"user: " + userData?.firstName + " image"}
                        width={1000}
                        height={1000}
                        className='w-full h-full border-2 border-white rounded-full object-cover'/>
                    {/* Hover */}
                    <div className='absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='text-white text-lg font-medium'>Edit Photo</span>
                    </div>
                </div>
                {/* Form */}
                <PersonalForm userData={userData}/>
        
            </div>
        </div>
        <div className='flex flex-col mx-[2vw]'>
            {/* Other Section */}
            <div className='py-[5vh]'>
                <h1 className="text-black text-[28px] font-outfit">Profile</h1>
                <div className="flex justify-center w-[80%] border-2 border-black rounded-md"></div> 
            </div>
            
            <div className='flex justify-between gap-x-[2%] bg-[url("/images/happyLife.jpg")] bg-no-repeat bg-cover bg-center h-[100vh] rounded-md'>
                {/* Completion half */}
                <div className='w-[50%]'>
                    <div className='flex h-full w-full items-center justify-center'>
                        <RadialBar/>   
                    </div>
                </div>
                {/* Summary Half */}
                <div className='w-[50%]'>
                    <div className='flex h-full w-full items-center justify-center'>
                        <PersonalizedWelcome userData={data}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col mx-[2vw] pb-[50px]'>
            <div className='py-[5vh]'>
                <h1 className="text-black text-[28px] font-outfit">Plans</h1>
                <div className="flex justify-center w-[80%] border-2 border-black rounded-md"></div> 
            </div>
            <div className='flex justify-center items-center w-full'>
                <PreviewPlanCards />
            </div>
        </div>

        <Footer theme='light' />
        {/* <Footer /> */}
        </>
    )
}

export default AccountMainPanel;