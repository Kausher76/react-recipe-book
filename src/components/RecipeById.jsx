import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";

const RecipeById = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState(null);
  const [showIngredients, setShowIngredients] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
       
        const data = await api.json();
        setData(data.meals[0]);
      
    };
    fetchData();
  }, [idMeal]);

  const handleShowIngredients = () => {
    setShowIngredients(true);
  };

  const handleShowRecipe = () => {
    setShowIngredients(false);
  };

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Navbar />
        {data && (
          <div className="meal">
            <center>
              <h1>{data.strMeal}</h1>
            </center>
            <div className="flex">
              <div className="image">
                <img src={data.strMealThumb} alt={data.strMeal} />
              </div>
              <div className="content">
                <button className="button-btn" onClick={handleShowIngredients}>
                  Ingredients
                </button>
                <button className="button-btn" onClick={handleShowRecipe}>
                  Recipe
                </button>
                {showIngredients ? (
                  <div>
                    <ul style={{ listStyle: "none" }}>
                      {getIngredients(data).map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p>{data.strInstructions}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <TrendingSlider />
      </div>
    </>
  );
};

const getIngredients = (data) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

export default RecipeById;
