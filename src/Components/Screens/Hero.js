import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
function Hero() {
  return (
    <Wrapper>
      <MainSection>
        <DivLeft>
          <H2>
            <Span>Steyp</Span> is Introducing a <br />{" "}
            <WriteDiv>learning system</WriteDiv> to create <br />
            <Span>
              <Typeds
                strings={["Tech Scientist", "Computer Engineer"]}
                typeSpeed={70}
                backSpeed={60}
                loop
              />
            </Span>
          </H2>
        </DivLeft>
        <DivRight>
          <DivImgRi>
            <ImgRight src={require("../../assets/introduction-logo.png")} />
          </DivImgRi>
        </DivRight>
      </MainSection>
    </Wrapper>
  );
}
const WriteDiv = styled.span`
  position: relative;
  &::before {
    content: "";
    border-radius: 6px;
    position: absolute;
    width: 379px;
    height: 50px;
    background: rgb(74, 237, 194);
    display: block;
    z-index: -1;
    @media all and (max-width: 1380px) {
      //1281
    }
    @media all and (max-width: 1280px) {
      //1051
    }
    @media all and (max-width: 1080px) {
      //981
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
      display: none;
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
      //361
    }
    @media all and (max-width: 360px) {
      //321
    }
  }
`;
const Typeds = styled(Typed)``;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainSection = styled.section`
  display: flex;
  padding-top: 100px;
  justify-content: space-between;
  @media all and (max-width: 980px) {
    padding-top: 29px;
  }
`;
const DivLeft = styled.div`
  width: 50%;
  @media all and (max-width: 768px) {
    width: 55%;
  }
`;
const H2 = styled.h2`
  text-align: left;
  width: 100%;
  font-family: "gorditamedium";
  position: relative;
  font-size: 52px;
  font-weight: 100;
  @media all and (max-width: 768px) {
    font-size: 17px;
  }
  @media all and (max-width: 480px) {
    font-size: 15px;
  }
`;
const Span = styled.span`
  color: rgb(87, 194, 137);
`;
const DivRight = styled.div`
  width: 45%;
`;
const DivImgRi = styled.div``;
const ImgRight = styled.img`
  display: block;
  width: 100%;
`;
export default Hero;
