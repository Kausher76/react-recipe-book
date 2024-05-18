import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`)
  }
  return (
    <>
      <div className="nav">
        <div className="left">
          <h1>
            <Link className="home" to={"/"}>
              React Recipe App
            </Link>
          </h1>
        </div>

        <div className="search">
        <form onSubmit={handleSubmit}>
          <input  onChange={(e)=>setInput(e.target.value)} type="text" />
        </form>
        </div>
        <div className="right">
          <Link to={`/category/indian`} className="home">
            <div>Indian</div>
          </Link> 
          <Link to={`/category/american`} className="home">
            <div>American</div>
          </Link>
          <Link to={`/category/british`} className="home">
            <div>British</div>
          </Link>
          <Link to={`/category/chinese`} className="home">
            <div>Chinese</div>
          </Link>
          <Link to={`/category/thai`} className="home">
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
