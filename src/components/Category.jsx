import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TrendingSlider from "./TrendingSlider";

const Category = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();

      setData(data.meals);
      // console.log(data);
    };
    fetchData();
  }, [name]);
  return (
    <>
    <div style={{overflowX:"hidden"}}>
    <Navbar className="myclass" />
    <div className="grid">
      {data.map((d) => (
        <div key={d.idMeal} className="grid-item">
        <Link to={`/${d.idMeal}`} >
          <div className="img">
            <img src={d.strMealThumb} alt="img" />
          </div>
          </Link>
          <h2>{d.strMeal}</h2>
        </div>
      ))}
    </div>
    <TrendingSlider className="myclass" />
    </div>
  </>
  );
};

export default Category;
