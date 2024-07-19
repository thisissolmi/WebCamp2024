import React from 'react';
// import './Header.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => (
  <HeaderContainer className="header">
    <HeaderLocation1 className="header__left">
      <HeaderButton className="header__button" aria-label="알림 페이지로 이동">
        <HeaderButtonSvg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M9.96706 18.2001V19.9334C9.96706 21.6087 11.3251 22.9668 13.0004 22.9668C14.6757 22.9668 16.0337 21.6087 16.0337 19.9334V18.2001M6.69736 8.90313C6.69736 5.42206 9.51932 2.6001 13.0004 2.6001C16.4815 2.6001 19.3034 5.42206 19.3034 8.90313V13.0001L22.1004 15.6001V18.6334H3.90039V15.6001L6.69736 13.0001V8.90313Z" stroke="black"></path>
        </HeaderButtonSvg>
      </HeaderButton>
    </HeaderLocation1>
   <HeaderLocation3 className="header__center">
      <Link to = "/"> MUSINSA</Link> 
  
    </HeaderLocation3>
    <HeaderLocation2 className="header__right">
      <HeaderButton className="header__button" aria-label="검색 페이지로 이동">
        <HeaderButtonSvg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M15.5999 15.5999L22.5332 22.5332M17.7665 10.3999C17.7665 14.4684 14.4684 17.7665 10.3999 17.7665C6.33137 17.7665 3.0332 14.4684 3.0332 10.3999C3.0332 6.33137 6.33137 3.0332 10.3999 3.0332C14.4684 3.0332 17.7665 6.33137 17.7665 10.3999Z" stroke="black" stroke-linejoin="round"></path>
        </HeaderButtonSvg>
      </HeaderButton>
      <a href="https://www.musinsa.com/orders/cart" className="header__button" aria-label="장바구니 페이지로 이동">
        <HeaderButtonSvg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M9.53327 8.2334V5.20006C9.53327 3.28548 11.0853 1.7334 12.9999 1.7334C14.9145 1.7334 16.4666 3.28548 16.4666 5.20006V8.2334M4.7666 8.2334H21.2333V22.9667H4.7666V8.2334Z" stroke="black"></path>
        </HeaderButtonSvg>
      </a>
    </HeaderLocation2>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #eaeaea;
`;

const HeaderLocation1 = styled.header__left`
  display: flex;
  align-items: center;
`;

const HeaderLocation2 = styled.header__right`
  display: flex;
  align-items: center;
`;

const HeaderLocation3 = styled.header__center`
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.header__button`
background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
`;


const HeaderButtonSvg = styled.header__button_svg`
  width: 26px;
  height: 26px;
`;


export default Header;
