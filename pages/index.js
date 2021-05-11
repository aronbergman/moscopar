import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress';
import getConfig from 'next/config'
import styles from '../styles/Home.module.scss'
import Main from "../components/Main";
import Header from "../components/Header";
import About from "../components/About";
import Speakers from "../components/Speakers";
import { useEffect, useState } from "react";
import Events from "../components/Events";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Information from "../components/Information";
import Question from "../components/Question";
import Footer from "../components/Footer";

const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

export default function Home() {
    const [loader, setLoader] = useState(true)
    const [goingUp, setGoingUp] = useState(false)

    useEffect(() => {
        // Page Loader
        setTimeout(() => {
            setLoader(false)
        }, 1500)

        // Tap to Top Scroll
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 500)
                setGoingUp(true);
            else
                setGoingUp(false);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    const tapToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>MOSCO PAR 2021</title>
                <meta name="description" content="русско-французская научно-практическая конференция"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>

            {loader &&
            <div className={styles.LoaderWrapper}>
                <div className={styles.Loader}>
                    <img src="/logo.png" alt=""/>
                </div>
            </div>}

            <main className={styles.main}>
                <Header/>
                <Main/>
                <About/>
                <Speakers/>
                <Events/>
                <Partners/>
                <Banner/>
                <Information/>
                <Question/>
                <Footer/>
            </main>

            <div className={[styles.TapTop, 'tap-top'].join(' ')} style={goingUp ? { display: 'block' } : { display: 'none' }}
                 onClick={tapToTop}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     className="svg-inline--fa fa-arrow-up fa-w-14 fa-9x">
                    <path fill="currentColor"
                          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                          className=""></path>
                </svg>
            </div>

        </div>
    )
}
