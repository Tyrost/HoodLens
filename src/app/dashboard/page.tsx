'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import DashboardSlide from '../components/dashboard/DashboardSlide';

const Dashboard = () => {
    const { isSignedIn, user, isLoaded } = useUser()
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return 

        if (!isSignedIn) {
            router.push("/auth/login")
        }
    }, [isSignedIn, router]) 

    return (
        !isLoaded ? (
            <div className='flex w-full min-h-screen justify-center items-center text-[3vw] text-black'>Redirecting...</div>
        ): (
            <DashboardSlide user={user}/>
        )
    )
}

export default Dashboard;