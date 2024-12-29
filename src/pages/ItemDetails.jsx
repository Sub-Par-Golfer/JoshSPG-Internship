import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import EthImage from "../images/ethereum.svg";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [nftData, setNftData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNftDetails = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
        );
        setNftData(response.data);
      } catch (error) {
        console.error("Error fetching NFT details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNftDetails();
  }, [nftId]);

  if (loading) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div data-aos="fade-up" data-aos-duration="3000">
            <div id="top"></div>
            <section aria-label="section" className="mt90 sm-mt-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <Skeleton height={300} width={300} />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>
                        <Skeleton width={200} />
                      </h2>
                      <div className="item_info_counts">
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          <Skeleton width={50} />
                        </div>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          <Skeleton width={50} />
                        </div>
                      </div>
                      <p>
                        <Skeleton count={3} />
                      </p>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp_de">
                              <Skeleton circle width={50} height={50} />
                            </div>
                            <div className="author_list_info">
                              <Skeleton width={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp_de">
                          <Skeleton circle width={50} height={50} />
                        </div>
                        <div className="author_list_info">
                          <Skeleton width={100} />
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <Skeleton width={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (!nftData) {
    return <div>Error loading NFT details.</div>;
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div data-aos="fade-up" data-aos-duration="3000">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={nftData.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt={nftData.title}
                  />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{nftData.title}</h2>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {nftData.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {nftData.likes}
                      </div>
                    </div>
                    <p>{nftData.description}</p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp_de">
                            <Link to={`/author/${nftData.ownerId}`}>
                              <img
                                className="lazy"
                                src={nftData.ownerImage}
                                alt={nftData.ownerName}
                              />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to={`/author/${nftData.ownerId}`}>
                              {nftData.ownerName}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Creator</h6>
                    <div className="item_author">
                      <div className="author_list_pp_de">
                        <Link to={`/author/${nftData.creatorId}`}>
                          <img
                            className="lazy"
                            src={nftData.creatorImage}
                            alt={nftData.creatorName}
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to={`/author/${nftData.creatorId}`}>
                          {nftData.creatorName}
                        </Link>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="Ethereum" />
                      <span>{nftData.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;