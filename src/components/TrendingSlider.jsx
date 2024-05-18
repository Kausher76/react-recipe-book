import React, { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TrendingSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const data = await api.json();

      setData(data.meals);
      // console.log(data);
    };
    fetchData();
  }, []);
  const settings = {
    // dots: true,
    
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };

  return (
    <>
      <div className="trending-container">
        <Slider {...settings}>
        {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`}key={d.idMeal}>
              <div className="trendingslider" >
                <img src={d.strMealThumb} alt="img" />
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>

      
    </>
  );
};

export default TrendingSlider;
