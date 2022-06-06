import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarMain>
      <Wrapper>
        <MainList>
          <Childone>
            <HeadDiv>
              <LogoImg src={require("../../assets/steyp-logo.svg").default} />
            </HeadDiv>
          </Childone>
          <Childtwo>
            <DashboardLink href="">Go to dashboard</DashboardLink>
            <DivHamburg>
              <HamburgImg src={require("../../assets/hamburg.svg").default} />
            </DivHamburg>
          </Childtwo>
        </MainList>
      </Wrapper>
    </NavbarMain>
  );
}

const NavbarMain = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 300;
  background: #fff;
`;
const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;
const MainList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Childone = styled.div``;
const HeadDiv = styled.div`
  width: 35%;
`;
const LogoImg = styled.img`
  display: block;
  width: 100%;
`;
const Childtwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DashboardLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  border: 2px solid rgb(78, 175, 124);
  border-radius: 5px;
  color: rgb(78, 175, 124);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;
const HamburgImg = styled.img`
  display: block;
  width: 100%;
`;
const DivHamburg = styled.div`
  width: 18%;
  margin-left: 10px;
`;

export default Navbar;
