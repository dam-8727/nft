import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/DisplayNFT.css";
import Tilt from "react-parallax-tilt";

const DisplayNFT = () => {
  const location = useLocation();
  const { mintedNFTPrincipal, base64Image, nftName, description, price } =
    location.state || {};

  if (!mintedNFTPrincipal || !base64Image) {
    return <p>No NFT data available. Please mint an NFT first.</p>;
  }

  return (
    <div className="display-nft-container">
      <div className="nft-details-wrapper">
        <div className="nft-img-wrapper">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.36}
            glareColor="#f0e4ff"
            glarePosition="all"
            glareBorderRadius="12px"
            scale="1.02"
            transitionSpeed="2000"
            tiltMaxAngleX="10"
            tiltMaxAngleY="10"
            tiltReverse={true}
          >
            <img
              src={`data:image/png;base64,${base64Image}`}
              alt="Minted NFT"
             className="nft-image"
            />
          </Tilt>
        </div>
        <div className="nft-info">
          <h1>Minted NFT Details</h1>
          <table>
            <tr>
              <th>NFT Name:</th>
              <td> {nftName}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td> {description}</td>
            </tr>
            <tr>
              <th>Price:</th>
              <td> {price} ICP</td>
            </tr>
            <tr>
              <th>Minted NFT Principal:</th>
              <td> {mintedNFTPrincipal}</td>
            </tr>
          </table>
        </div>
      </div>
      {/* 
      <div className="minted-img-wrapper">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.36}
          glareColor="#f0e4ff"
          glarePosition="all"
          glareBorderRadius="12px"
          scale="1.02"
          transitionSpeed="2000"
          tiltMaxAngleX="10"
          tiltMaxAngleY="10"
          tiltReverse={true}
        >
          <img src={`data:image/png;base64,${base64Image}`} alt="Minted NFT" />
        </Tilt>
      </div> */}
    </div>
  );
};

export default DisplayNFT;