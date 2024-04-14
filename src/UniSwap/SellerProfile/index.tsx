import { CiShop } from 'react-icons/ci';
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


import "./index.css"
import "../ColorScheme.css";
import { SetStateAction, useState } from "react";
import { Product } from "./product";
import ProductListingTile from "./ProductListingTile";

function SellerProfile() {
    // const [savedProducts, setSavedProducts] = useState<Product[]>([]);
    const [profileInfo, setProfileInfo] = useState({
        name: "John Doe",
        bio: "Hi, I’m a seller. I love selling things! Things such as shoes, shirts, and pants.",
        profilePicture: "https://example.com/profile-image.jpg",
    });
    const navigate = useNavigate();

    const handleProfileUpdate = (updatedInfo: SetStateAction<{ name: string; bio: string; profilePicture: string; }>) => {
        setProfileInfo(updatedInfo);
        navigate('/seller/profile'); // Navigate back to the SellerProfile page after updating
    };


    const [someState, setSomeState] = useState(false);
    const [savedProducts, setSavedProducts] = useState<Product[]>([

    ]);

    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <div className="headerContainer">
            <button className="circularPinkButton">
                <CiShop className="bigger-icon" />
            </button>
            <button className="profileButton">
                <h1 className="adjustedFont profile titleColor">Profile</h1>
            </button>
            <input type="text" placeholder="Search For a Product..." className="searchBar" />
            <h1 className="adjustedFont uniswapLogo titleColor">UniSwap</h1>



            {/* <div className="profile-icon-wrapper">
                <div className="profile-icon">
                    <img
                        src="https://example.com/profile-image.jpg"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="edit-icon">
                        <FaEdit className="edit-button" />
                    </div>
                </div>

            </div>
            <div className="text-area-wrapper">
                <p
                    className="transparent-textarea"

                > Hi I’m seller, I love seller things! Things such as shoes, shirts, and pants. This is my profile where I can view things that I want to sell! If I click on one of the product listings it takes me to the product page.</p>
            </div> */}


            <div className="profile-icon-wrapper">
                <div className="profile-icon">
                    <img
                        src={profileInfo.profilePicture}
                        alt="Profile"
                        className="profile-image"
                    />
                    <Link to="../../ProfileEdit/index.tsx" 
                    className="edit-icon">
                        <FaEdit className="edit-button" />
                    </Link>
                </div>
            </div>


            <div className="text-area-wrapper">

                <p className="transparent-textarea">
                    <h2 className="profile-name adjustedFont">{profileInfo.name}</h2>
                    {profileInfo.bio}
                </p>
            </div>



            <div className="products-wrapper">
                <div> <h1 className="adjustedFont" style={{ color: 'grey' }}>Product Listing</h1>
                    <div className="products-container" style={{ backgroundColor: '#D0B783', padding: '20px' }}>
                        {savedProducts.map((product, index) => (
                            <ProductListingTile product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>


        </div>





    );
}

export default SellerProfile;