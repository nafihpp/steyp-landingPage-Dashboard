import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Spotlight() {
  return (
    <MainSection>
      <Wrapper>
        <MainDiv>
          <DivLeft>
            <Headline>
              Creating <br /> Computer <Greenspan>Engineers</Greenspan>
              <br /> & Tech <Greenspan>Scientists</Greenspan>
            </Headline>
            <Paragraph>
              Steyp is introducing a digital space for students to learn and
              become the future Engineers and Scientists. Steyp is looking for
              capable students who stands out, thinks differently, and keeps a
              spark to shine!
            </Paragraph>
            <ButtonDiv to="">
              Explore
              <SpanLogo className="Spanned">
                <Imagehov
                  src={require("../../assets/right-side.svg").default}
                />
              </SpanLogo>
            </ButtonDiv>
          </DivLeft>
          <DivRight>
            <DivSite>
              <SiteImg src={require("../../assets/spotlight-background.png")} />
            </DivSite>
            <DivMammo>
              <MommoImg src={require("../../assets/spotlight-mammookka.png")} />
            </DivMammo>
          </DivRight>
        </MainDiv>
      </Wrapper>
    </MainSection>
  );
}
const MainSection = styled.section`
  background: rgb(241, 250, 255);
  padding: 100px 0;
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
    //769
  }
  @media all and (max-width: 768px) {
    //641
  }
  @media all and (max-width: 640px) {
    //481
  }
  @media all and (max-width: 480px) {
    //361
  }
  @media all and (max-width: 360px) {
    //321
  }
`;
const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  display: flex;
`;
const DivLeft = styled.div`
  max-width: 550px;
  padding-top: 31px;
`;
const Headline = styled.h1`
  font-size: 44px;
  color: rgb(33, 33, 33);
  margin-bottom: 36px;
  font-weight: 400;
  font-family: "gorditamedium";
  @media all and (max-width: 980px) {
    font-size: 39px;
    //769
  }
  @media (max-width: 480px) {
    font-size: 27px;
  }
`;
const Paragraph = styled.p`
  margin-bottom: 36px;
`;
const Greenspan = styled.span`
  color: #0fa76f;
`;
const ButtonDiv = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 12px 14px;
  width: 175px;
  background: linear-gradient(
      100deg,
      rgb(15, 167, 111) 0%,
      rgb(15, 158, 167) 100%
    )
    0% 0% no-repeat;
  font-size: 16px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: start;
  justify-content: center;
  border-radius: 5px;
  transition: 0.8s;
  &:hover .Spanned {
    display: block;
  }
  &:hover {
    width: 200px;
  }
`;
const SpanLogo = styled.span`
  display: none;
  margin-left: 5px;
`;
const Imagehov = styled.img`
  width: 100%;
  display: block;
`;
const DivRight = styled.div`
  @media all and (max-width: 768px) {
    position: absolute;
  }
  @media all and (max-width: 640px) {
    top: 302px;
  }
`;
const DivMammo = styled.div`
  position: absolute;
  width: 44%;
  right: 86px;
  top: 120px;
`;
const MommoImg = styled.img`
  display: block;
  width: 100%;
`;
const DivSite = styled.div`
  position: relative;
  margin-top: -3%;
`;
const SiteImg = styled.img`
  display: block;
  width: 100%;
`;
export default Spotlight;
