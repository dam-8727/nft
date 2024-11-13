import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/viewNFT.css";

const ViewNFT = ({ categories }) => {
  const { category, nftId } = useParams();
  const nft = categories[category].find((nft) => nft.id === parseInt(nftId));

  const handlePurchase = () => {
    console.log(`Purchasing NFT: ${nft.title}`);
    alert("Purchase successful!");
  };

  if (!nft) {
    return <p>NFT not found</p>;
  }

  return (
    <div className="nft-details-page">
      <div className="nft-details-wrapper">
        <div className="nft-details">
          <img src={nft.imageUrl} alt={nft.title} className="nft-image" />
        </div>
        <div className="nft-info">
          <h2>{nft.title}</h2>
          <p>Description: Add any extra details here if available</p>
          <p>
            Price:{" "}
            <span>
              {nft.price} {nft.currency}
            </span>
          </p>
          <section class="grid place-content-center py-6">
            <button
              class="group flex h-10 items-center gap-2 rounded-full bg-[#c753bd] pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
              onClick={handlePurchase}
            >
              <span class="rounded-full bg-[#480442] p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span>Buy Now</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ViewNFT;