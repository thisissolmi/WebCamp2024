import React, { useState } from 'react';
//import ProductList from './ProductList';
import CardGrid from './CardGrid';
import ProductList from './ProductList';
import styled from 'styled-components';

//함수형 컴포넌트 (페이지 간 )
function MainContent() {
  return (
      <MainContentContainer>
       
          
          <Img src="/Img/pic1.png" />
          
          <CardGrid />
          <ProductList />
      </MainContentContainer>
  );
}
const MainContentContainer = styled.main`
  padding: 20px;
`;


const Img = styled.img`
  width : 400px;  //이미지는 보통 width 값만 할당해줌.
`;

export default MainContent;


