import HomepageUnauthorized from '@/components/HomePageComponents/HomepageUnauthorized';
import ProfitCalculator from '@/components/ProfitCalculator/ProfitCalculator';
import { useUser } from '@/context/UserContext';
import React from 'react'

export default async function HomePage() {
    const user = useUser();

    if (user) {
        return (    
            <ProfitCalculator />
        )
    }

    return (
        <HomepageUnauthorized />
    )
}