"use client"

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession()
    return (
        <div>
            Your Name:  {session?.user?.name} <br />
            Your Email:  {session?.user?.email}<br />
            <Link href="/user/profile/edit"><Button>Update Profile</Button></Link>
        </div>
    );
};

export default ProfilePage;