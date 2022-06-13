import React from "react";
import styled from "styled-components";
import Right from "../../assets/restricted-background.png";
import { Link } from "react-router-dom";
function Sat() {
  return (
    <MainSection>
      <Wrapper>
        <MainDiv>
          <Headline>
            Steyp's Aptitude Test <Span>(SAT)</Span>
          </Headline>
          <Para>
            Steyp’s Engineering program is only for students who qualifies SAT
            (Steyp’s Aptitude Test)
          </Para>
          <DivButton>
            <Button to="/">
              Apply for SAT{" "}
              <SpanLogo className="Spanned">
                <Imagehov
                  src={require("../../assets/right-side.svg").default}
                />
              </SpanLogo>
            </Button>
          </DivButton>
        </MainDiv>
      </Wrapper>
    </MainSection>
  );
}
const DivButton = styled.div`
  width: 175px;
  margin: 0 auto;
  cursor: pointer;
`;
const SpanLogo = styled.span`
  margin-left: 8px;
  display: block;
  visibility: hidden;
`;
const Imagehov = styled.img``;
const Button = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 15px 14px;
  background: linear-gradient(
      100deg,
      rgb(15, 167, 111) 0%,
      rgb(15, 158, 167) 100%
    )
    0% 0% no-repeat padding-box padding-box transparent;
  font-size: 15px;
  color: rgb(255, 255, 255);
  font-family: "gorditamedium";
  display: flex;
  align-items: start;
  border-radius: 5px;
  width: 175px;
  justify-content: center;
  transition: 0.8s;
  &:hover .Spanned {
    visibility: visible;
  }
  &:hover {
    width: 200px;
  }
`;
const MainSection = styled.section`
  padding-top: 100px;
  @media all and (max-width: 980px) {
    padding-top: 13px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  background: url(${Right}) 149% 21% / 36% no-repeat rgb(40 35 35);
  background-size: contain;
  color: #fff;
  flex-direction: column;
  position: relative;
  padding: 98px 0;
  @media all and (max-width: 980px) {
    background-position-x: 176px;
  }
  @media all and (max-width: 480px) {
    background-position-y: -4px;
  }
`;
const Headline = styled.h1`
  margin-bottom: 18px;
  text-align: center;
  font-family: "gorditamedium";
  @media all and (max-width: 480px) {
    font-size: 19px;
  }
`;
const Para = styled.p`
  margin-bottom: 23px;
  text-align: center;
  font-family: "gorditamedium";
`;
const Span = styled.span`
  color: rgb(78, 175, 124);
`;
export default Sat;
