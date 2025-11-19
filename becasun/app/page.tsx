import HomepageUnauthorized from '@/components/HomePageComponents/HomepageUnauthorized';
import { getCurrentUser } from '@/lib/currentUser'
import React from 'react'

export default async function HomePage() {

    const user = await getCurrentUser();

    console.log(user);


    if (user) {
        
    }

    return (
        <HomepageUnauthorized />
    )
}