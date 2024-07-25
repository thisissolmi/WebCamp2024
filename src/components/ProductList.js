import React from 'react';
import './MainContent';
import styled from 'styled-components';

const ProductList = () => {
  const products = [
    { id: 1, name: '브라이튼캐리어', price: '49,900원' },
    { id: 2, name: 'CHMPS 바람막이 자켓 네이비', price: '45,490원' },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Img src="/Img/picshoe.png" />
          <h2>{product.name}</h2>
          
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

const Img = styled.img`
  width : 150px;  //이미지는 보통 width 값만 할당해줌.
`;

export default ProductList;
