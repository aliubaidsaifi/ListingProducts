import React from 'react';

const Product = ({ name, price, imageUrl, description }) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name}  />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Product;
