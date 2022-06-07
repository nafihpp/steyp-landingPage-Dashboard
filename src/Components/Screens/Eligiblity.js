import React from "react";
import styled from "styled-components";

function Eligiblity() {
  return (
    <MainSection>
      <SectionWrap>
        <Headline>
          Why are we <br /> checking your <Greenspan>ELIGIBILITY?</Greenspan>
        </Headline>
        <MainDiv>
          <DivLeft>
            <Div>
              <SpanImage>
                <Img src={require("../../assets/top-tick.svg").default} />
              </SpanImage>
              <DivContent>
                <Head>Unemployment ratio is increasing</Head>
                <Par>
                  Students take up Engineering due to peer pressure and other
                  irrelevant reasons.
                </Par>
              </DivContent>
            </Div>
            <Div>
              <SpanImage>
                <Img src={require("../../assets/red-tick.svg").default} />
              </SpanImage>
              <DivContent>
                <Head>Lack of skilled work force</Head>
                <Par>
                  A lot of students completes Engineering but fails to pursue
                  needed skills for the industry.
                </Par>
              </DivContent>
            </Div>
            <Div>
              <SpanImage>
                <Img src={require("../../assets/green-tick.svg").default} />
              </SpanImage>
              <DivContent>
                <Head>The right person for the right job</Head>
                <Par>
                  It is high time to realize that if we encourage students what
                  they want to pursue, society will get the right persons for
                  the right duties.
                </Par>
              </DivContent>
            </Div>
            <Div>
              <SpanImage>
                <Img src={require("../../assets/bottom-tick.svg").default} />
              </SpanImage>
              <DivContent>
                <Head>Not everyone are meant to become Engineers</Head>
                <Par>
                  Only the capable, deserving, and passionate students grows to
                  become an Engineer.
                </Par>
              </DivContent>
            </Div>
            <Button>
              Apply for SAT{" "}
              <SpanLogo className="Spanned">
                <Imagehov
                  src={require("../../assets/right-side.svg").default}
                />
              </SpanLogo>
            </Button>
          </DivLeft>
          <DivRight>
            <Image src={require("../../assets/techie-club.png")} />
          </DivRight>
        </MainDiv>
      </SectionWrap>
    </MainSection>
  );
}
const SpanLogo = styled.span`
  margin-left: 8px;
  display: none;
`;
const Imagehov = styled.img``;
const Greenspan = styled.span`
  color: rgb(78, 175, 124);
  font-family: "gorditamedium";
`;
const Headline = styled.h1`
  margin-bottom: 40px;
  font-family: "gorditamedium";
  font-size: 34px;
  font-weight: 400;
`;
const DivContent = styled.div``;
const MainSection = styled.section`
  padding: 100px 0;
`;
const SectionWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivLeft = styled.div`
  width: 45%;
`;
const DivRight = styled.div`
  width: 45%;
`;
const Image = styled.img`
  display: block;
  width: 100%;
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
  margin-left: 67px;
  transition: 0.10s;
  &:hover .Spanned {
    display: block;
  }
  &:hover {
    width: 200px;
  }
`;
const Par = styled.p``;
const Head = styled.h3`
  font-family: "gorditamedium";
  font-size: 22px;
  margin-bottom: 15px;
`;
const Img = styled.img``;
const SpanImage = styled.span`
  margin-right: 20px;
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
export default Eligiblity;
