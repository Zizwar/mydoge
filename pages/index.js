import React, { useEffect } from 'react'
import Head from 'next/head'

import BannerSection from './layouts/sections/music/banner'
import SideSection from './layouts/sections/music/sideSection'
import AlbumSection from './layouts/sections/music/album';
import CopyrightSection from './layouts/sections/music/copyright';
import Market from './elements/price/elementPrice1';

const Doge = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#223b7b')
        document.body.style.setProperty('--secondary', '#fff')
        document.body.style.setProperty('--light', '#2245a0')
        document.body.style.setProperty('--dark', '#000')
    })

    return (
        <div>
            <Head>
                <title>My Doge </title>
            </Head>
            <BannerSection />
            <SideSection />
            <Market />
            <AlbumSection />
            <CopyrightSection />
        </div>
    )
}

export default Doge;