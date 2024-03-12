import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./product.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(`Error fetching dat ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>products</h1>
      <ul className="list-of-products-container">
        {data.map((product, index) => (
          <Link className="link" to={`/products/${product.id}`}>
            <li key={index} className="list-item">
              <h3>{product.title}</h3>
              <img className="image" src={product.image} alt="image_url" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Products;
