import React, { useEffect } from 'react'
import Head from 'next/head'
import useSWR from 'swr';
import BannerSection from './layouts/sections/music/banner'
import AlbumSection from './layouts/sections/music/album';
import CopyrightSection from './layouts/sections/music/copyright';
import dynamic from "next/dynamic";
import TagManager from 'react-gtm-module';
//import Market from './elements/price/elementPrice1';
import useSound from 'use-sound';
const Market = dynamic(() => import('./elements/price/elementPrice1'), {
    loading: () => "Loading ...",
    ssr: false,
});
const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    //   console.log("=====",{data})
    return data;
};
const urlMarket = "/api/market";
const urlPriceDoge = "/api/price";

const Doge = () => {
    const { data = [] } = useSWR(urlMarket, fetcher, { refreshInterval: 15000 });
    const { data: price = 0 } = useSWR(urlPriceDoge, fetcher, { refreshInterval: 5000 });
    const [play] = useSound(
        `https://freesound.org/data/previews/31/31780_266482-lq.mp3`
    );
    useEffect(() => {
        console.log('price==', { price });

        //if (timerSound) return;
        //timerSound++;
        //if (orders?.length)
        play();
        // setTimeout(() => {
        //   timerSound = 0;
        // }, 5000);
    }, [price]);

    //  console.log({data})
    useEffect(() => {
        document.body.style.setProperty('--primary', '#223b7b');
        document.body.style.setProperty('--secondary', '#fff');
        document.body.style.setProperty('--light', '#2245a0');
        document.body.style.setProperty('--dark', '#000');
        TagManager.initialize({ gtmId: 'G-NHFZCGGD08' });
    }, []);

    return (
        <div>
            <Head>
                <title>My Doge </title>
            </Head>
            <BannerSection abcdar={false} />
            <Market data={data} />
            <AlbumSection data={data} />
            <BannerSection abcdar={true} />
            <CopyrightSection />

        </div>
    )
}

export default Doge;