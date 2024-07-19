import React, { useState } from 'react';
//import ProductList from './ProductList';
import CardGrid from './CardGrid';
import ProductList from './ProductList';
import styled from 'styled-components';

//함수형 컴포넌트 (페이지 간 )
function MainContent() {
  const [count, setCount] = useState(100); //count는 변수임 
  const addCount = () => { //handler (addCount) 선언을 해주고, 아래 코드에 리턴값으로 반환 해줌 
      setCount(count * 3);
  }
  return (
      <MainContentContainer>
       
          <Title>사진들 추가하기!</Title>
          {/* 
           */
          }
          <Img src="/Img/pic1.png" />
          {count} 번 
          <button onClick={() =>  addCount()}>버튼</button>
          <CardGrid />
          <ProductList />
      </MainContentContainer>
  );
}
const MainContentContainer = styled.main`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width : 400px;  //이미지는 보통 width 값만 할당해줌.
`;

export default MainContent;


