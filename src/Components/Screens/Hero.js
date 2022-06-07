import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
function Hero() {
  return (
    <Wrapper>
      <MainSection>
        <DivLeft>
          <H2>
            <Span>Steyp</Span> is Introducing a{" "}
            <WriteDiv>learning system</WriteDiv> to create
            <br />
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
`;
const DivLeft = styled.div``;
const H2 = styled.h2`
  text-align: left;
  width: 100%;
  font-family: "gorditamedium";
  position: relative;
  font-size: 52px;
  font-weight: 100;
`;
const Span = styled.span`
  color: rgb(87, 194, 137);
`;
const DivRight = styled.div``;
const DivImgRi = styled.div``;
const ImgRight = styled.img``;
export default Hero;
