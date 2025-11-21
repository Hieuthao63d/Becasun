
'use client';
import React from 'react'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Benefits from './Benefits'
import StatsSection from './StatsSection'
import Information from './Information'
import FAQ from './FAQ'
import ProfitCalculator from '../ProfitCalculator/ProfitCalculator'

function HomepageUnauthorized() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />
            <HowItWorks />
            <Benefits />
            <StatsSection />
            <Information />
            <FAQ />
            <ProfitCalculator />
        </div>
    )
}

export default HomepageUnauthorized