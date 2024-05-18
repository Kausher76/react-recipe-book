import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
import { useParams, Link } from 'react-router-dom';

const Search = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        );
        const data = await api.json();

        setData(data.meals || []); // Set data to an empty array if there are no meals
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError(true); // Set error to true if there's an error fetching data
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchData();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  if (error || !data.length) {
    return <div>No results found. Please try a different search key.</div>; // Render error message if there's an error or no data
  }

  return (
    <>
      <Navbar />
      <div className="grid">
        {data.map((d) => (
          <div key={d.idMeal} className="grid-item">
            <Link to={`/${d.idMeal}`}>
              <div className="img">
                <img src={d.strMealThumb} alt="img" />
              </div>
            </Link>
            <h2>{d.strMeal}</h2>
          </div>
        ))}
      </div>
      <TrendingSlider />
    </>
  );
};

export default Search;
