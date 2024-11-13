import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/GetStarted.css";
import {
  ConnectButton,
  ConnectDialog,
  Connect2ICProvider,
} from "@connect2ic/react";
import "../assets/css/connect2ic.css";

export default function Login() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="get-started-container">
      <div className="get-started-content">
        <h1>Get Started</h1>
        <h4>Welcome</h4>
        <h4>Explore virtual worlds, express yourself with custom avatars, and collect digital creations that are truly yours</h4>
        <h4>Login via Web3 wallet.</h4>

        <div className="login-options">
          <label className="login-option">Web3 Wallet</label>
          <ConnectButton />
        </div>

        <div className="web3-form">
          <div>
            <Link to="/marketplace">
              NFT Marketplace <ion-icon name="arrow-forward-sharp"></ion-icon>
            </Link>
            <Link to="/avatar">
              3D Avatar <ion-icon name="arrow-forward-sharp"></ion-icon>
            </Link>
            <Link to="/spaces">
              3D Spaces <ion-icon name="arrow-forward-sharp"></ion-icon>
            </Link>
          </div>
        </div>
        <ConnectDialog />
      </div>
    </div>
  );
}
