'use client'

import React, { useEffect, useState } from 'react';
import fullLogo from "@/public/assets/fullLogo.png";
import { navigation } from '@/constants';
import Image from 'next/image';
import Button from './Button';

function Header() {
    const [activeLink, setActiveLink] = useState('#hero'); // default to hero

    return (
        <div className='fixed top-0 left-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-bg-n-8/90 lg:backdrop-blur-sm'>
            <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                <a className='block w-[12rem] xl:mr-8' href="#hero" onClick={() => setActiveLink('#hero')}>
                    <Image src={fullLogo} alt="Full Logo" width={190} height={40} />
                </a>

                <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {
                            navigation.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    onClick={(e) => {
                                        const href = e.currentTarget.getAttribute("href");
                                        if (href) setActiveLink(href);
                                    }}
                                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                     
                    px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                    ${item.url === activeLink ? "z-2 lg:text-n-1"
                                            : "lg:text-n-1/50"
                                        } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                >
                                    {item.title}
                                </a>
                            ))
                        }
                    </div>
                </nav>

                <Button className='hidden lg:flex' href='#contactUs'>
                    Contact Us
                </Button>
            </div>
        </div>
    );
}

export default Header;
