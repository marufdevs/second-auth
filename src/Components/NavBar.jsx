
"use client"
import { signOut } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client"

const NavBar = () => {

    const { data: session, isPending } = authClient.useSession()
    const normallinks = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/services'>Services</Link></li>
        <li><Link href='/dashboard'>Dashboard</Link></li>
    </>
    const profileLinks = <>
        <li>
            <Link href='/user/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
            </Link>
        </li>
        <li><Link href='/user/settings'>Settings</Link></li>
        <Button onClick={async () => await signOut()}>
            <Link href="/"><li>Logout</li></Link>
        </Button>
    </>
    if(isPending){
        return <span className="loading loading-spinner text-accent"></span>
    }



    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {normallinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {normallinks}
                </ul>
            </div>
            {
                session?.user ?

                    <div className="navbar-end flex gap-3">
                        <div>
                            <p>Welcome, {session?.user?.name} 👋</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={-1}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {profileLinks}
                                </ul>
                            </div>
                        </div>
                    </div> :
                    <div className="navbar-end flex gap-3">
                        <Link href='/sign-in'><button className="btn btn-success">Sign In</button></Link>
                        <Link href='/sign-up'><button className="btn btn-dash btn-secondary">Sign Up</button> </Link>
                    </div>
            }
        </div>
    );
};

export default NavBar;