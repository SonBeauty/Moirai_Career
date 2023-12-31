import '../public/assets/css/app.2afad0c.bundle.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import 'react-modal-video/css/modal-video.css';

interface MyAppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
  }

  declare global {
    interface Window {
      WOW: any;
    }
  }
  
  const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      if (typeof window !== "undefined") {
        window.WOW = require("wowjs");
      }
      new window.WOW.WOW().init();
    }, []);
  
    return (
      <>
        {!loading ? <Component {...pageProps} /> : <Preloader />}
      </>
    );
  };
  
  export default MyApp;