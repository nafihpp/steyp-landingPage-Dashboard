import React from "react";
import styled from "styled-components";
import Right from "../../assets/restricted-background.png";
function Applys() {
  return (
    <MainSection>
      <Wrapper>
        <MainDiv>
          <Headline>
            <Span>Steyp</Span> is exclusively available for <br />
            students from Kerala
          </Headline>
          <Button>Apply for SAT</Button>
        </MainDiv>
      </Wrapper>
    </MainSection>
  );
}
const Button = styled.a`
  cursor: pointer;
  width: 200px;
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
  align-items: center;
  justify-content: center;
  border-radius: 5px;
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
`;
const Headline = styled.h1`
  margin-bottom: 18px;
  font-family: "gorditamedium";
  font-size: 35px;
  color: rgb(255, 255, 255);
  font-weight: 100;
  text-align: center;
`;
const Span = styled.span`
  color: rgb(78, 175, 124);
`;
export default Applys;
