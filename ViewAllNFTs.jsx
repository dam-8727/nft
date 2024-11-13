import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/ViewAllNFTs.css";
import { Link } from "react-router-dom";

const ViewAllNFTs = ({ categories }) => {
  const { category } = useParams();
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const sortedNFTs = [...categories[category]].sort((a, b) => {
    return sortOrder === "lowToHigh"
      ? parseFloat(a.price) - parseFloat(b.price)
      : parseFloat(b.price) - parseFloat(a.price);
  });

  const filteredNFTs = sortedNFTs.filter((nft) =>
    nft.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category-nft-page">
      <h2>{category} NFTs</h2>
      <h3 className="text-lg text-white ">@TheZori</h3>
      <hr className="my-4 text-slate-300" />

      <div className="search-and-sort">
        <div className="filter-text">
          <ion-icon name="filter-sharp"></ion-icon> Filters
        </div>
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <ion-icon name="search-sharp"></ion-icon>
        </div>

        {/* Sort Buttons */}
        <div className="sort-dropdown">
          <select
            value={sortOrder}
            onChange={(e) => handleSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="van-nft-cards">
        {filteredNFTs.length > 0 ? (
          filteredNFTs.map((nft) => (
            <Link
              key={nft.id}
              to={`/category/${category}/${nft.id}`}
              className="van-nft-card"
            >
              <div className="van-nft-image-wrapper">
                <img
                  src={nft.imageUrl}
                  alt={nft.title}
                  className="van-nft-image"
                />
              </div>
              <div className="van-text-overlay">
                <h3>{nft.title}</h3>
                <p>
                  {nft.price} {nft.currency}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>No NFTs found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default ViewAllNFTs;