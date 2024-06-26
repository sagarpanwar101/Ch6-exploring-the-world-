import React, { useEffect, useState } from "react";
import { GET_RES_API_URL, restaurantList } from "../components/config";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");

// Whenever react state updates, react triggers reconcilation cycle (re-renders the component)
const filterData = (searchText, restaurants) => {
  return restaurants.filter(restaurant =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(GET_RES_API_URL);
      const json = await data.json();
      const restList = []
      // console.log(json.data);
      json?.data?.cards.forEach((value) => {
        if (value?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          value?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((val) => {
            restList.push(val);
          });
        }
      }); 
      // const restaurant = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restList) {
        setListOfRestaurant(restList);
        setFilteredList(restList);
      }
    } catch (error) {
      console.error("Fetching errror::", error);
    }
  }

  if (listOfRestaurant.length ===0) {
    return <Shimmer/>
  }

  const handleSearch = (e) => {
    const filteredRestaurants = filterData(searchText, listOfRestaurant);
    setFilteredList(filteredRestaurants);
    setSearchText(e.target.value);
  }

  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter(
      (data) => data?.info?.avgRating >= 3.0
    );
    setFilteredList(filteredList);
  }

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search restaurants" value={searchText} className="search-input" onChange={handleSearch} />
      </div>
      <div className="filtercontainer">
        <button
          className="filter-btn"
          onClick={handleFilter}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurant.length > 0 ? (
          listOfRestaurant.map((restaurant,index) => (
            <RestaurantCard data={restaurant}
              key={index} />

          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </>
  );
};

export default Body;
