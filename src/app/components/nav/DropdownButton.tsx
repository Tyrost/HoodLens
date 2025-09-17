'use client';

import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


const DropdownButton = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { signOut } = useClerk();
    const { isSignedIn, user } = useUser();


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    const handleLogout = () => {
        console.log("This was pressed.")
        setDropdownOpen(false)
        signOut(() => {router.push("/")})
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <Image
                src={isSignedIn ? user.imageUrl : "/user_logged_img.png"}
                alt="Sign in User"
                width={36}
                height={36}
                className="h-[36px] w-[36px] rounded-full border border-white hover:cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {dropdownOpen && (
                isSignedIn ? (
                    <div className="absolute right-0 mt-2 w-[12vw] bg-white shadow-lg rounded-md border border-black text-black z-10">
                        <ul className="py-1">
                            <li>
                                <Link
                                    href="/account"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dashboard?page=general"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ai"
                                    className="group flex items-center px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    AI <Sparkles className="mx-[10px] w-4 h-4 group-hover:scale-125 group-hover:animate-pulse transition-all duration-500 ease-out group-hover:text-purple-500 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ai"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Inbox
                                </Link>
                            </li>
                            <div className="w-full h-[1px] border border-black/20 my-2"></div>
                            <li>
                                <Link
                                    href="/dashboard?page=general"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ai"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Privacy & Policy
                                </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                            onClick={() => {handleLogout()}}>
                                    Sign Out
                            </li>
                            
                        </ul>
                    </div>
                ) : (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-black text-black z-10">
                        <ul className="py-1">
                            <li>
                                <Link
                                    href="/auth/login"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Sign In
                                </Link>
                            </li>
                            <div className="w-full h-[1px] border border-black/20 my-2"></div>
                            <li>
                                <Link
                                    href="/dashboard?page=general"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ai"
                                    className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Privacy & Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            )}
        </div>
    );
}

export default DropdownButton;