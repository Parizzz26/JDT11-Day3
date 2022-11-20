import React from "react";
//import { Banner, ProductCard } from "@components";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import { Navbar, History, CardHistory } from "../../components";
import { AiFillCaretLeft } from "react-icons/ai";
//import { CaretLeftFilled } from "@ant-design/icons";
//import { useNavigate } from "react-router-dom";
//import { Button } from "antd";

const HomePage = () => {
  //const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
//  const navigate = useNavigate();

  const fetchCities = async () => {
    try {
      const url = "/users";
      const response = await api.get(url);
      const payload = [...response?.data];
      console.log(payload);
    //  setCities(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const url = "/users";
      const response = await api.get(url);
      const payload = [...response?.data];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20"></div>
      
          <CardHistory
            key={products?.id}
            onClick={products.id}
          />
  
      
    </>
  );
};

export default HomePage;
