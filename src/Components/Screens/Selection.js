import React from "react";
import styled from "styled-components";
import selection from "../../assets/selection-background.png";
function Selection() {
  return (
    <MainSection>
      <Sectionwrap>
        <DivMain>
          <DivLeft>
            <H1>
              Our <br /> selection <Greenspan>process</Greenspan>
            </H1>
            <Paraone>
              Candidates can take admissions in Steyp only through qualifying
              SAT (Steyp’s Aptitude Test). Candidates can apply for SAT online,
              and attend the test physically from various centres where SAT is
              conducted.
            </Paraone>
            <Paratwo>
              There are 2 tests involved which includes a written Aptitude Test
              and a Personal Interview
            </Paratwo>
            <Button>
              Apply for SAT
              <SpanLogo className="Spanned">
                <Imagehov
                  src={require("../../assets/right-side.svg").default}
                />
              </SpanLogo>
            </Button>
          </DivLeft>
          <DivRight>
            <DivOne>
              <ImageContainer>
                <Img src={require("../../assets/one.svg").default} />
              </ImageContainer>
              <DivContent>
                <H3>Aptitude Test</H3>
                <Para>
                  A written Aptitude Test is the first process where candidates
                  will be assessed on their logical thinking, tech knowledge,
                  general knowledge, and mathematical ability.
                </Para>
              </DivContent>
            </DivOne>
            <DivTwo>
              <ImageContainer>
                <Img src={require("../../assets/two.svg").default} />
              </ImageContainer>
              <DivContent>
                <H3>Personal Interview</H3>
                <Para>
                  A Personal Interview is the next process where candidates will
                  be assessed on critical thinking, situation analysis ability,
                  and soft skills.
                </Para>
              </DivContent>
            </DivTwo>
          </DivRight>
        </DivMain>
      </Sectionwrap>
    </MainSection>
  );
}
const SpanLogo = styled.span`
  margin-left: 8px;
  display: none;
`;
const Imagehov = styled.img``;
const Greenspan = styled.span`
  color: rgb(15, 167, 111);
`;
const MainSection = styled.section`
  background: url(${selection}) 125% 0% / 36% no-repeat rgb(249, 249, 249);
  padding: 100px 0;
`;
const Sectionwrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const DivMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }
`;
const DivLeft = styled.div`
  width: 30%;
  @media all and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const H1 = styled.h1`
  font-size: 35px;
  font-family: "gorditamedium";
  font-weight: 200;
  margin-bottom: 15px;
`;
const Paraone = styled.p`
  margin-bottom: 30px;
`;
const Paratwo = styled.p`
  margin-bottom: 25px;
`;
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
  border-radius: 5px;
  justify-content: center;
  transition: 0.8s;
  @media all and (max-width: 768px) {
    width: 150px;
  }
  &:hover .Spanned {
    visibility: visible;
  }
  &:hover {
    width: 200px;
    @media all and (max-width: 768px) {
      width: 165px;
    }
  }
`;
const DivRight = styled.div`
  width: 60%;
  @media all and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;
const DivOne = styled.div`
  padding: 30px 25px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  border: 1px solid rgba(76, 164, 115, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const DivTwo = styled.div`
  padding: 30px 25px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  border: 1px solid rgba(76, 164, 115, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  @media all and (max-width: 768px) {
    width: 50%;
  }
  @media all and (max-width: 680px) {
    width: 87%;
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const DivContent = styled.div``;
const H3 = styled.h3``;
const Para = styled.p``;
export default Selection;
