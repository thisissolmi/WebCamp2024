import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCamera, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Footer = () => {

  const handleClick = (item) => {
    // Add the actions to perform on each item click
    console.log(`Clicked ${item}`);
  };

  return (
    <FooterContainer>
      <Navbar>
        <NavList>
          <NavItem onClick={() => handleClick('카테고리')}>
            <FontAwesomeIcon icon={faList} />
            <span>카테고리</span>
          </NavItem>
          <NavItem onClick={() => handleClick('스냅')}>
            <FontAwesomeIcon icon={faCamera} />
            <span>스냅</span>
          </NavItem>
          <NavItem onClick={() => handleClick('홈')}>
            <FontAwesomeIcon icon={faHome} />
            <span>홈</span>
          </NavItem>
          <NavItem onClick={() => handleClick('좋아요')}>
            <FontAwesomeIcon icon={faHeart} />
            <span>좋아요</span>
          </NavItem>
          <NavItem onClick={() => handleClick('마이')}>
            <FontAwesomeIcon icon={faUser} />
            <span>마이</span>
          </NavItem>
        </NavList>
      </Navbar>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-around;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  padding: 5px;

  span {
    margin-top: 5px;
    font-size: 10px;
  }
`;

export default Footer;
