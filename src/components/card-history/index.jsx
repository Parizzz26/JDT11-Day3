import React from 'react'
import { useNavigate } from "react-router-dom";
import { History } from "../../components";

const CardHistory = ({onClick}) => {
    const navigate = useNavigate();
  return (
    <History 
    onClick={() => navigate(`/detail-product/${onClick}`)} 
    >

    </History>
  )
}

export default CardHistory