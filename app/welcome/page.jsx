"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react';

function Welcome() {
    const {data:session} =useSession();
    const router = useRouter();
    useEffect(()=>{
        if(!session){
            router.push('/')
        }
    },[session,router])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-600 text-white">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
                <div className="text-center">
                    <p className="text-lg font-medium">Username:</p>
                    <h2 className="text-xl font-semibold mt-2">{session?.user?.username || "Guest"}</h2>
                </div>
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={signOut}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Welcome