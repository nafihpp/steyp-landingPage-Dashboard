import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Engineer() {
  return (
    <Mainsec>
      <Wrap>
        <DivMain>
          <DivLeft>
            <Headline>
              <GreenSpan>40%</GreenSpan> of students from a classroom opts for
              Engineering
            </Headline>
            <Paraone>
              A large number of students opts for Engineering because of various
              reasons. Some students opt it out of passion while some out of
              peer pressure. A majority of Engineering graduated do not land a
              core job, because they are not meant to become Engineers, but they
              might become a good artist, a doctor, a teacher, a dancer, etc.
              The fact remains is, everyone are not meant for Engineering.
            </Paraone>
            <Paratwo>
              Here is where Steyp comes in, to check the eligibility of
              students, that whether a student is fit for Engineering or not.
            </Paratwo>
            <Button to="/">
              Apply for SAT{" "}
              <SpanLogo className="Spanned">
                <Imagehov
                  src={require("../../assets/right-side.svg").default}
                />
              </SpanLogo>
            </Button>
          </DivLeft>
          <DivRight>
            <RightImg src={require("../../assets/side-image.png")} />
          </DivRight>
        </DivMain>
      </Wrap>
    </Mainsec>
  );
}
const SpanLogo = styled.span`
  margin-left: 8px;
  display: block;
  visibility: hidden;
`;
const Imagehov = styled.img``;
const GreenSpan = styled.span`
  color: rgb(15, 167, 111);
`;
const Mainsec = styled.section`
  padding: 100px 0;
`;
const Wrap = styled.div`
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
  width: 100%;
  @media all and (max-width: 980px) {
    text-align: center;
  }
`;
const Headline = styled.h1`
  margin-bottom: 10px;
  color: rgb(33, 33, 33);
  font-family: "gorditamedium";
  position: relative;
  font-size: 51px;
  font-weight: 100;
  @media all and (max-width: 980px) {
    font-size: 36px;
    text-align: left;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
const Paraone = styled.p`
  margin-bottom: 10px;
  color: #545454;
  font-family: "gorditamedium";
  @media all and (max-width: 980px) {
    text-align: left;
  }
`;
const Paratwo = styled.p`
  margin-bottom: 20px;
  color: #545454;
  font-family: "gorditamedium";
  @media all and (max-width: 980px) {
    text-align: left;
  }
`;
const Button = styled(Link)`
  text-decoration: none;
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
  display: flex;
  font-family: "gorditamedium";
  align-items: start;
  justify-content: center;
  border-radius: 5px;
  transition: 0.1s;
  &:hover .Spanned {
    visibility: visible;
  }
  &:hover {
    width: 200px;
  }
`;
const DivRight = styled.div`
  width: 50%;
  @media all and (max-width: 980px) {
    width: 100%;
    margin: 0 auto;
  }
`;
const RightImg = styled.img`
  display: block;
  width: 100%;
`;

export default Engineer;
