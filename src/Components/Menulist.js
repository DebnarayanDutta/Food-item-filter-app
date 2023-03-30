import React, { useState } from "react";
import Menu from "../Menu";
import './Menulist.css';

function Menulist({list, setItemData}){

  const{image,name, price, description} = list

    return(
        <>
         
            
            <div className="item-list">

            <div className="img-div">
                <img className="img" src={image} alt="menu-pic" />
            </div>
            
            <div className="info-div">
                <h1>{name}</h1>
                <p>{description}</p>

                <span className="price">Price: {price}</span>
                <span className="order-btn"><button>Order Me</button></span>
            </div>

            </div>
         
        </>
    )
}

export default Menulist;