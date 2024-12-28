import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const AuthorItems = ({ loading, nftCollection }) => {
  return (
    <div>
      <h3 className="mb-3 ml-3">Author's NFT Items</h3>
      <div data-aos="zoom-out-down" data-aos-delay="1800">
        <div className="row">
          {loading
            ? [...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                >
                  <div className="nft__item">
                    <Skeleton height={200} />
                    <Skeleton width={`80%`} height={20} className="mt-2" />
                    <Skeleton width={60} />
                  </div>
                </div>
              ))
            : nftCollection.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                >
                  <div className="nft__item">
                    <div className="nft__item_wrap">
                      <Link to={`/item-details/${item.nftId}`}>
                        <img
                          src={item.nftImage}
                          alt={item.title}
                          className="lazy nft__item_preview"
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info text-center mt-2">
                      <h4>{item.title || "Unnamed Item"}</h4>
                      <div className="nft__item_price">
                        {item.price || "0.00"} ETH
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{item.likes || 0}</span>
                      </div>
                      {/* Buy Now Button */}
                      <div className="mt-2 ml-4 d-flex justify-content-center">
                        <button className="btn-connect-wallet">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;