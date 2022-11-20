import React from 'react';
import api from "../../services/api";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from 'antd';

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/users/${id}`;
      const response = await api.get(url);
      const payload = {...response?.data?.data?.product};
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if(params.id){
      fetchProduct(params.id)
    }
  },[params.id])

  return (
    <>
    <div className='text-center text-2xl bg-primary text-white font-sans md:font-serif'>Detail Product</div>
    <p className='text-base font-serif m-5'>Nama Produk &nbsp;: {product?.name}</p>
    <p className='text-base font-serif m-5 leading-3'>Harga Produk &nbsp;: {product?.id}</p>
    <p className='text-base font-serif m-5'>Penjual &emsp; &emsp; &ensp;: {product?.email}</p>
    <Button type='primary' onClick={() => navigate(-1)}>Home</Button>
    </>
  )
}

export default DetailProduct