import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <NavContainer>
      <NavButton className="active">무탠다드</NavButton>
      <NavButton>추천</NavButton>
      <NavButton>뷰티</NavButton>
      <NavButton>랭킹</NavButton>
      <NavButton>
        세일
        <SaleTime>
          <SaleText>매일 14시</SaleText>
        </SaleTime>
      </NavButton>
      <NavButton>스타일</NavButton>
      <NavButton>이벤트</NavButton>
    </NavContainer>
  </Nav>
);

const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  padding: 5px 10px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 13px;
  color: #999;

  &.active {
    color: #007aff;
    font-weight: bold;
  }
`;

const SaleTime = styled.span`
  margin-left: 5px;
`;

const SaleText = styled.span`
  color: #999;
  font-size: 12px;
`;

export default Navbar;
