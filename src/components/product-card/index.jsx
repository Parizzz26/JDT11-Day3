import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({
  random,
  productName,
  productPrice,
  productCatagory,
  onClick
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="product-card"
        hoverable
        cover={
          <img
            alt="example"
            src={`https://picsum.photos/200?random=${random}`}
          />
        }
      >
        <Meta
          title={productName}
          description={
            <div>
              <div className="ant-card-meta-category">{productCatagory}</div>
              <div className="ant-card-meta-price">
                Rp.{productPrice}
                {/* Rp. {Math.random(1000).toString().substring(2, 10)} */}
              </div>
            </div>
          }
        />
      </Card>
      <Button
        type="primary"
        onClick={() => navigate(`/detail-product/${onClick}`)}
      >
        Detail Product
      </Button>
    </>
  );
};

export default ProductCard;
