import React from "react";
import Slider from "react-slick";
import useFetch from "../useFetch";

const HotCollections = () => {
  const { data, loading, error } = useFetch(
    "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Slider settings
  const settings = {
    infinite: true, // Loop slides
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll on arrow click
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Auto-slide interval
    arrows: true, // Show arrows for navigation
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <Slider {...settings}>
              {data.map((collection) => (
                <div className="nft_coll" key={collection.id}>
                  <div className="nft_wrap">
                    <img
                      src={collection.nftImage}
                      className="lazy img-fluid"
                      alt={collection.name}
                    />
                  </div>
                  <div className="nft_coll_pp">
                    <img
                      className="lazy pp-coll"
                      src={collection.authorImage}
                      alt={collection.author}
                    />
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <h4>{collection.title}</h4>
                    <span>ERC - {collection.code}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;