import Benefits from '@/components/HomePageComponents/Benefits'
import FAQ from '@/components/HomePageComponents/FAQ'
import Hero from '@/components/HomePageComponents/Hero'
import HowItWorks from '@/components/HomePageComponents/HowItWorks'
import Information from '@/components/HomePageComponents/Information'
import StatsSection from '@/components/HomePageComponents/StatsSection'
import React from 'react'

export default function HomePage() {
    return (
        <div>
            <div className="min-h-screen bg-gray-50">
                <Hero />
                <HowItWorks />
                <Benefits />
                <StatsSection />
                <Information/>
                <FAQ />
            </div>
        </div>
    )
}