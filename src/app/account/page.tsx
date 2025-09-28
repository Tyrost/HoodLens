'use client';

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AccountMainPanel from "../components/core/AccountMainPanel";

const AccountPage = () => {
    const { isSignedIn, user, isLoaded } = useUser()
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return 

        if (!isSignedIn) {
            router.push("/auth/login")
        }
    }, [isSignedIn, router]) 
    
    return (
        <>
        <AccountMainPanel userData={user}/>

        
        </>
    )
}

export default AccountPage;