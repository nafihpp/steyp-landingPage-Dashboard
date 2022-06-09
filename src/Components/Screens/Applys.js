import React from "react";
import styled from "styled-components";
import Right from "../../assets/restricted-background.png";
import Line from "../../assets/line.svg";
function Applys() {
  return (
    <MainSection>
      <Wrapper>
        <MainDiv>
          <Headline>
            <Span>Steyp</Span> is exclusively available for <br />
            students from <Spann>Kerala</Spann>
          </Headline>
          <Button>
            Apply for SAT
            <Spanned className="spanned">
              <ImgSpan src={require("../../assets/right-side.svg").default} />
            </Spanned>
          </Button>
        </MainDiv>
      </Wrapper>
    </MainSection>
  );
}
const Spanned = styled.span`
  margin-left: 8px;
  visibility: hidden;
`;
const Spann = styled.span`
  position: relative;
  ::after {
    content: "";
    display: block;
    width: 126px;
    height: 150px;
    background: url(${Line}) 0% 0% / contain no-repeat;
    position: absolute;
    right: -24px;
    left: -9px;
    top: 41px;
    @media all and (max-width: 768px) {
      width: 73px;
      left: -5px;
      top: 24px;
    }
  }
`;
const ImgSpan = styled.img``;
const Button = styled.a`
  cursor: pointer;
  width: 165px;
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
  justify-content: center;
  border-radius: 5px;
  transition: 0.1s;
  &:hover .spanned {
    visibility: visible;
  }
  &:hover {
    width: 200px;
  }
`;
const MainSection = styled.section`
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  background: url(${Right}) 149% 21% / 36% no-repeat rgb(40 35 35);
  background-size: contain;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: "gorditamedium";
  font-size: 35px;
  color: rgb(255, 255, 255);
  font-weight: 100;
  text-align: center;
  @media all and (max-width: 768px) {
    font-size: 19px;
  }
`;
const Span = styled.span`
  color: rgb(78, 175, 124);
`;
export default Applys;
