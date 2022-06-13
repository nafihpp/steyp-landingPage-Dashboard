import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <>
      <Container>
        <Left>
          <Menu>
            <img
              src={require("../../assets/menu-icon.svg").default}
              alt="MenuIcon"
            />
          </Menu>
          <Logo>
            <img
              src={require("../../assets/steyp-logo.svg").default}
              alt="Steyp"
            />
          </Logo>
        </Left>
        <Right>
          <Coins>
            <Image>
              <img src={require("../../assets/coins.png")} alt="" />
            </Image>
            <Text>5 coins</Text>
            <Image>
              <img src={require("../../assets/plus-sign.png")} alt="Coin" />
            </Image>
          </Coins>
          <Notification>
            <img
              src={require("../../assets/messages.svg").default}
              alt="Message"
            />
          </Notification>
          <Profile>
            <LeftProfile>
              <img src={require("../../assets/user.png")} alt="User" />
            </LeftProfile>
            <RightProfile>
              <Text>Mohammed Nafih Yuseph</Text>
              <Arrow>
                <img
                  src={require("../../assets/downarrow.jpg")}
                  alt="DownArrow"
                />
              </Arrow>
            </RightProfile>
          </Profile>
        </Right>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  padding: 13px 50px;
  background: #f9f9fb;
  position: fixed;
  width: 100%;
  top: 0;
  @media (max-width: 768px) {
    padding: 13px 25px;
  }
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    width: 25%;
  }
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 20px;
    margin: 10px;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 980px) {
    width: 75%;
    margin-right: 10px;
  }
`;
const Logo = styled.div`
  width: 100px;
  img {
    display: block;
    width: 100%;
  }
`;
const Image = styled.div`
  width: 20px;
  margin-left: 10px;
  margin-right: 10px;
  img {
    display: block;
    width: 100%;
  }
`;
const Text = styled.h4``;
const Notification = styled.div`
  margin-right: 30px;
  position: relative;
  &::after {
    content: "";
    width: 1px;
    height: 38px;
    background-color: #000;
    position: absolute;
    right: -17px;
    top: -6px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftProfile = styled.div`
  width: 45px;
  margin-right: 5px;
  @media (max-width: 768px) {
    margin-right: 30px;
  }
  img {
    display: block;
    width: 100%;
  }
`;
const RightProfile = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Arrow = styled.div`
  width: 15px;
  margin: 5px 10px;
  @media (max-width: 1180px) {
    margin: 5px 15px;
  }
  @media (max-width: 768px) {
    margin: 5px 25px;
  }

  img {
    display: block;
    width: 100%;
  }
`;
const Coins = styled.div`
  width: 150px;
  margin-right: 30px;
  height: 45px;
  border-radius: 26px 5px 5px 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgb(255, 235, 59) 0%,
    rgb(255, 249, 196) 100%
  );
  @media (max-width: 768px) {
    display: none;
  }
`;
