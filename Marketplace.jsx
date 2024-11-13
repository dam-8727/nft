import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Marketplace.css";
import { Link } from "react-router-dom";
import nft1 from "../../public/images/nfts/wear_1.jpeg";
import nft2 from "../../public/images/nfts/land_1.jpeg";
import nft3 from "../../public/images/nfts/tr03.png";
import Tilt from "react-parallax-tilt";
import Footer from "../Footer";
import SlideInSection from "../Components/SlideIn";
import PopOutSection from "../Components/Popout";

const Marketplace = ({ categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Wearables");
  const secondpageRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const slides = [
    {
      id: 1,
      imageUrl: nft1,
      title: "NFT 1",
      price: "2",
      currency: "ICP",
    },
    {
      id: 2,
      imageUrl: nft2,
      title: "NFT 2",
      price: "3",
      currency: "ICP",
    },
    {
      id: 3,
      imageUrl: nft3,
      title: "NFT 3",
      price: "1.5",
      currency: "ICP",
    },
  ];

  const scrollToMarketplace = () => {
    // Scroll to the marketplace-nfts div
    if (secondpageRef.current) {
      secondpageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate(`/category/${selectedCategory}`);
  };

  return (
    <div className="marketplace-container">
      <div className="mp-first-page">
        <div className="marketplace-hero-text">
          <SlideInSection>
            <div>
              <h1>Create NFTs</h1>
            </div>
          </SlideInSection>

          <SlideInSection>
            <h1>Artwork and Sell</h1>
          </SlideInSection>
          <SlideInSection>
            <p>
              Explore exclusive art, collectibles, and assets backed by
              blockchain technology. <br />
              Start minting, trading, and building your collection on the future
              of the Internet—powered by the ICP blockchain.
            </p>
          </SlideInSection>

          <SlideInSection>
            <div className="mp-btns">
              <button onClick={scrollToMarketplace} className="mint-button">
                Explore Now ✨
              </button>
            </div>
          </SlideInSection>
        </div>

        <div className="marketplace-nfts">
          <div className="stacked-nft-cards">
            {slides.map((slide, index) => (
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#e8d2ff"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                transitionSpeed={2000}
                scale={1.1}
                speed={1000}
                tiltReverse={true}
                glareBorderRadius="10px"
                key={slide.id}
                className={`nft-card stacked-card-${index}`}
                style={{ zIndex: slides.length - index }} // zIndex controls stacking
              >
                <div className="nft-card-content">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="nft-card-image"
                  />
                  <div className="nft-card-details">
                    <h2>{slide.title}</h2>
                    <div>
                      <p>Price: </p>
                      <p>
                        {slide.price} {slide.currency}
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      <div className="mp-second-page">
        <div ref={secondpageRef} className="marketplace-content">
          <p>
            <span>Our Popular NFTs</span> <br />
            From unique Avatars that represent your digital identity, to rare
            Land that you can own in the metaverse, and trendy Accessories that
            let you personalize your avatar.
            <br />
            Click on a category below to explore the best NFTs each one has to
            offer:
          </p>
          <div className="nft-categories">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`category-button ${
                  selectedCategory === category ? "active-category" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Display NFTs based on selected category */}
          <div className="sp-nft-cards">
            {categories[selectedCategory].map((nft) => (
              <div
                key={nft.id}
                className={`sp-nft-card ${
                  nft.id === 2
                    ? "card-middle"
                    : nft.id === 1
                    ? "card-left"
                    : "card-right"
                }`}
              >
                <div className="sp-nft-image-wrapper">
                  <img
                    src={nft.imageUrl}
                    alt={nft.title}
                    className="sp-nft-image"
                  />
                </div>
                <div className="text-overlay">
                  <h3>{nft.title}</h3>
                  <p>Price: {nft.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <button className="view-more-button" onClick={handleViewMoreClick}>
            View More <ion-icon name="add-circle-sharp"></ion-icon>
          </button> */}
          <section className="grid py-6 place-content-center">
            <button
              className="group flex h-10 items-center gap-2 rounded-full bg-[#ceabff] pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
              onClick={handleViewMoreClick}
            >
              <span className="p-1 text-sm transition-colors duration-300 bg-black rounded-full group-hover:bg-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span>View More</span>
            </button>
          </section>
        </div>
      </div>

      <div className="mp-third-page">
        <div className="marketplace-content">
          <p>
            <span>Mint Your Own NFTs</span> <br />
            Create and Mint your unique NFT by clicking the button below.
          </p>
          <Link to="/mintNFT">
            <button className="mint-button">Mint NFT</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;