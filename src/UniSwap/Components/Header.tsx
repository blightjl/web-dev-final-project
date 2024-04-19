import React, { useEffect, useState } from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import mag_glass from "../Images/magnifying_glass_icon.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Header(
) {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const HomeIcon = (
    <Link to="/home">
      <div 
        className="home-icon"
      >
        <img src={marketPlace} className="home-icon-image"/>
      </div>
    </Link>
  );

  const AccountButton = () => { 
    // TODO get user ID
    let userID = 1
    return(
    <Link to={`/profile/?userID=${userID}`}>
      <div className="account-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>Account</h2>
      </div>
    </Link>)
  };
  

  const onSubmit = (value: string) => {
    navigate(`/product/?productName=${value}`)
  }
  
  const SearchBar = (
    <div>
      <input 
        className="searchbar" 
        type="text" 
        id="searchBar" 
        placeholder="Search for a Product..." 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            onSubmit(target.value);
          }
        }}
      />
      {/* <button onClick={() => onSubmit((document.getElementById('searchBar') as HTMLInputElement)?.value || '')}>Search</button> */}
    </div>
  );

  return(
    <div className="row" style={{ alignItems: 'center', flexWrap:'nowrap', height: 96 }}>
      {HomeIcon}
      <AccountButton />
      {SearchBar}
      {width > 1150 && <h3 className="adjustedFont uniswapLogoMini titleColor">UniSwap</h3>}
    </div>
  )
}