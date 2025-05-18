import React from 'react'
import Section from './Section'
import Button from './Button'
import { curve } from '@/public/assets'
import yc from '@/public/y_combinator.webp'
import Image from 'next/image'
function Hero() {
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero">
            <div className='container relative'>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-xl text-n-2">Backed by</span>
                        <Image
                            src={yc}
                            alt="Y Combinator"
                            width={100}
                            height={50}
                            className="h-8   w-auto"
                        />
                    </div>
                    <h1 className="h1 mb-6">
                        Explore the Future of&nbsp;AI&nbsp;Agents and Research with {` `}
                        <span className="inline-block relative">
                            AfterQuery{" "}
                            <Image
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Uncover the true potential of foundational models. Build, deploy, and advance AI through rigorous experimentation at AfterQuery.
                    </p>
                    <Button href="/pricing" white className="text-n-8">
                        Get started
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default Hero