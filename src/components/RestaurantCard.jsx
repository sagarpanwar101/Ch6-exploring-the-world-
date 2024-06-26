// import imgCdn 
import React from "react";
import {IMG_CDN} from "../components/config";


const RestaurantCard = ({data}) => {
    return (
      <div className="card">
        <img src={ IMG_CDN + data?.info?.cloudinaryImageId } alt={data?.info} />
        <span className="card-title">{data?.info?.name}</span>
        <span className="card-tags">{data?.info.cuisines.join(", ")}</span>
        <span className="card-rating">{data?.info?.avgRating}</span>
        {/* <h4>{data?.info} minutes</h4> */}
      </div>
    );
  };

export default RestaurantCard;