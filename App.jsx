import React, { useEffect } from "react";
import Navbar from "./Navbar";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FifthPage from "./FifthPage";
import FourthPage from "./FourthPage";
import nft1 from "../public/images/nfts/land_1.jpeg";
import nft2 from "../public/images/nfts/land_2.jpeg";
import nft3 from "../public/images/nfts/land_3.jpeg";
import wear_1 from "../public/images/nfts/wear_1.jpeg";
import wear_2 from "../public/images/nfts/wear_2.jpeg";
import wear_3 from "../public/images/nfts/wear_3.jpeg";
import avt_1 from "../public/images/nfts/zubi.jpeg";
import avt_2 from "../public/images/nfts/zubi_2.jpeg";
import avt_3 from "../public/images/nfts/zubi_3.jpeg";
import Footer from "./Footer";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Marketplace from "./Pages/Marketplace";
import Avatar from "./Pages/Avatar";
import Spaces from "./Pages/Spaces";
import AvatarCreation from "./Pages/AvatarCreation";
import WebGLComponent from "./Pages/WebGLComponent";
import Login from "./Pages/Login";
import ViewAllNFTs from "./Pages/ViewAllNFTs";
import ViewNFT from "./Pages/viewNFT";
import CustomCursor from "./CustomCursor";
import ProfilePage from "./Pages/ProfilePage";
import DisplayNFT from "./Pages/DisplayNFT";

import JoinWaitlist from "./Pages/JoinWaitlist";
import AvatarDisplay from "./Pages/AvatarDisplay";
import MintForm from "./Pages/MintForm";
import * as the_zori_backend from "../../declarations/the_zori_backend";
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import Collection from "./Pages/Collection";
import Features from "./Features";


import {
  Connect2ICProvider
} from "@connect2ic/react";


const client = createClient({
  canisters:{
    the_zori_backend
  },
  providers: defaultProviders,
});

function LandingPage() {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Features />
      <FifthPage />
      <FourthPage />
      <Footer />
    </>
  );
}


function Layout({ children }) {
  const location = useLocation();

  const excludeNavbarPaths = ["/avatar-creation", "/zori-avatar"];

  return (
    <>
      {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const categories = {
    Avatars: [
      { id: 1, imageUrl: avt_1, title: "Avatar 1", price: "2", currency: "ICP" },
      { id: 2, imageUrl: avt_2, title: "Avatar 2", price: "3", currency: "ICP" },
      {
        id: 3,
        imageUrl: avt_3,
        title: "Avatar 3",
        price: "2.5",
        currency: "ICP",
      },
    ],
    Land: [
      { id: 1, imageUrl: nft1, title: "Land 1", price: "5", currency: "ICP" },
      { id: 2, imageUrl: nft2, title: "Land 2", price: "8", currency: "ICP" },
      { id: 3, imageUrl: nft3, title: "Land 3", price: "5", currency: "ICP" },
    ],
    Wearables: [
      {
        id: 1,
        imageUrl: wear_1,
        title: "Wearable 1",
        price: "1",
        currency: "ICP",
      },
      {
        id: 2,
        imageUrl: wear_2,
        title: "Wearable 2",
        price: "1.5",
        currency: "ICP",
      },
      {
        id: 3,
        imageUrl: wear_3,
        title: "Wearable 3",
        price: "1",
        currency: "ICP",
      },
    ],
  };

  return (
    <Connect2ICProvider client={client}>
    <Router>
    <CustomCursor /> 
      <Layout>
        <Routes>
        
          <Route path="/" element={<LandingPage />} />

          
          <Route path="/about" element={<AboutUs />} />
          <Route path="/marketplace" element={<Marketplace categories={categories} />} /> 
           <Route path="/avatar" element={<Avatar />} /> 
           <Route path="/spaces" element={<Spaces />} />
          <Route path="/avatar-creation" element={<AvatarCreation />} />
          <Route path="/zori-avatar" element={<WebGLComponent />} />       
           <Route path="/avatar-display" element={<AvatarDisplay />} />
           <Route path="/mintNFT" element={<MintForm />} />
           <Route path="/display-nft" element={<DisplayNFT />} />  
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/join-waitlist" element={<JoinWaitlist />} />
          <Route path="/login" element={<Login />} />
           <Route path="/category/:category" element={<ViewAllNFTs categories={categories} />} /> 
           <Route path="/collection" element={<Collection />} /> 
           <Route
            path="/category/:category/:nftId"
            element={
                <ViewNFT categories={categories} />
            }
          />

        

        </Routes>
      </Layout>
    </Router>
     </Connect2ICProvider>
  );
}

export default App;
