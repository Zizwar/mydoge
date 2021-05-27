import React, { useEffect } from 'react'
import Head from 'next/head'
import useSWR from 'swr';
import BannerSection from './layouts/sections/music/banner'
import AlbumSection from './layouts/sections/music/album';
import CopyrightSection from './layouts/sections/music/copyright';
import dynamic from "next/dynamic";

//import Market from './elements/price/elementPrice1';
//import {AdsAuto, AdsArticle} from "./wino/ads"
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
//const urlMarket = "/api/market";
const urlMarket = "/api/market";
const urlPriceDoge = "/api/price";
//
const SOUND_DOWN = `https://freesound.org/data/previews/257/257824_3509524-lq.mp3`;
const SOUND_UP = `https://freesound.org/data/previews/273/273688_3450800-lq.mp3`
let statusPrice = 0;
let currentTextPrice = "";
let color = "#fff";
let title = "My DogeCoin";
const Doge = ({ dataMarket = [] }) => {
    const { data = dataMarket } = useSWR(urlMarket, fetcher, { refreshInterval: 65000 });
    const { data: _data = [] } = useSWR(urlPriceDoge, fetcher, { refreshInterval: 4000 });
    const { status, price = 0 } = _data;
    const [playDown] = useSound(SOUND_DOWN);
    const [playUp] = useSound(SOUND_UP);
    useEffect(() => {
        //console.log('price==', { price });
        title = price + " MyDoge"
        //if (timerSound) return;
        //timerSound++;
        //if (orders?.length)
        if (price > statusPrice) {

            color = ("green");
            playUp();
            currentTextPrice = `📈${price}↗️`;


        }
        else {
            color = ("red");
            playDown();
            currentTextPrice = `📉${price}↘️`;
        }
        statusPrice = price


    }, [price]);

    //  console.log({data})
    useEffect(() => {

        document.body.style.setProperty('--primary', '#223b7b');
        document.body.style.setProperty('--secondary', '#fff');
        document.body.style.setProperty('--light', '#2245a0');
        document.body.style.setProperty('--dark', '#000');
        if (typeof window !== 'undefined')
            (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    return (
        <div>
            <Head>

                <meta name="description" content="  Dogecoin is a cryptocurrency that started as a joke in 2013. It is a satirical homage to bitcoin, designed to serve no real purpose other than generating a few laughs
      " />
            </Head>
            <BannerSection abcdar={false} data={{ currentTextPrice, price, color }} />
            <div class="gcse-search"></div>
            <Market data={data} />
            <AlbumSection data={data} />
            <BannerSection abcdar={false} data={{ price }} />
            <CopyrightSection />

        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch("https://mydoge.us/api/market")
    const dataMarket = await res.json()

    return {
        props: { dataMarket }, // will be passed to the page component as props
    }
}
export default Doge;
