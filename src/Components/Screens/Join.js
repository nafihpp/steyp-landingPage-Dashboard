import React from "react";
import styled from "styled-components";
function Join() {
  return (
    <SectionMain>
      <DivWrap>
        <DivMain>
          <DivLeft>
            <Img src={require("../../assets/who-can-banner.png")} />
          </DivLeft>
          <DivRight>
            <Headline>
              Who can join in <Greenspan>Steyp?</Greenspan>
            </Headline>
            <Div>
              <Span>
                <Img src={require("../../assets/top-tick.svg").default} />
              </Span>
              <Para>Students who are studying from Class 5 and above</Para>
            </Div>
            <Div>
              <Span>
                <Img src={require("../../assets/red-tick.svg").default} />
              </Span>
              <Para>Students who are Tech Enthusiasts</Para>
            </Div>
            <Div>
              <Span>
                <Img src={require("../../assets/green-tick.svg").default} />
              </Span>
              <Para>Students who can spend one hour on regular basis</Para>
            </Div>
            <Div>
              <Span>
                <Img src={require("../../assets/bottom-tick.svg").default} />
              </Span>
              <Para>
                Students who has a laptop or a desktop for day to day studies
                and practice
              </Para>
            </Div>
          </DivRight>
        </DivMain>
      </DivWrap>
    </SectionMain>
  );
}
const Greenspan = styled.span`
  color: rgb(14, 159, 106);
  font-family: "gorditamedium";
`;
const Para = styled.p`
  font-size: 16px;
  font-family: "gorditamedium";
  display: inline;
  color: rgb(89, 89, 89);
`;
const Div = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  width: 5%;
  display: inline-block;
  margin-right: 20px;
  @media all and (max-width: 980px) {
    width: 10%;
  }
`;
const SectionMain = styled.section`
  background: rgb(249, 249, 249);
  padding: 100px 0;
`;
const DivWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const DivMain = styled.div`
  display: flex;
  @media all and (max-width: 980px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 36px;
  }
`;
const DivLeft = styled.div`
  width: 50%;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 106px;
`;
const Headline = styled.h1`
  margin-bottom: 20px;
  font-size: 34px;
`;
export default Join;
