import React, { useEffect } from 'react'
import Head from 'next/head'
import useSWR from 'swr';
import BannerSection from './layouts/sections/music/banner'
import AlbumSection from './layouts/sections/music/album';
import CopyrightSection from './layouts/sections/music/copyright';
import dynamic from "next/dynamic";
//import Market from './elements/price/elementPrice1';
const Market= dynamic(() => import('./elements/price/elementPrice1'), {
    loading: () => "Loading ...",
    ssr: false,
});
const fetcher = async () => {
    const res = await fetch("/api/market");
     const data = await res.json();
    console.log("=====",{data})
    return data;
};

const Doge = () => {
    const { data=[] } = useSWR('apiMarket', fetcher,{ refreshInterval: 15000 });
  console.log({data})
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
            <Market data={data} />
            <AlbumSection data={data} />
            <CopyrightSection />
        </div>
    )
}

export default Doge;