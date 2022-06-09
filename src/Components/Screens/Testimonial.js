import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test from "../../assets/test.svg";

function Testimonial() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
  };
  return (
    <Mainsection>
      <Wrapper>
        <Headline>
          What our students say about the <br /> experience in{" "}
          <GreenSpan>Steyp</GreenSpan>
        </Headline>
        <Sliders {...settings}>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img src={require("../../assets/zanil.jpg")} />
              </ImgContainer>
              <DivContents>
                <H3>Zanil uthakan</H3>
                <P>Kvhhs kannur</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
              <DivButton>
                <ButtonLinkedin></ButtonLinkedin>
              </DivButton>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img src={require("../../assets/person-min.jpg")} />
              </ImgContainer>
              <DivContents>
                <H3>Wazeer Steyp</H3>
                <P>Kvups kannur</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
              <DivButton>
                <ButtonLinkedin></ButtonLinkedin>
              </DivButton>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img
                  src={require("../../assets/Muhammed_Saheerk_jtOOWA8.jpg")}
                />
              </ImgContainer>
              <DivContents>
                <H3>Saheer Khan</H3>
                <P>Jamia Malappuram</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img src={require("../../assets/zanil.jpg")} />
              </ImgContainer>
              <DivContents>
                <H3>Zanil uthakan</H3>
                <P>Kvups kannur</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
              <DivButton>
                <ButtonLinkedin></ButtonLinkedin>
              </DivButton>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img src={require("../../assets/zanil.jpg")} />
              </ImgContainer>
              <DivContents>
                <H3>Zanil uthakan</H3>
                <P>Steyp Trivandrum</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
              <DivButton>
                <ButtonLinkedin></ButtonLinkedin>
              </DivButton>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img src={require("../../assets/person-min.jpg")} />
              </ImgContainer>
              <DivContents>
                <H3>Wazeer Steyp</H3>
                <P>Kvups kannur</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
              <DivButton>
                <ButtonLinkedin></ButtonLinkedin>
              </DivButton>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img
                  src={require("../../assets/Muhammed_Saheerk_jtOOWA8.jpg")}
                />
              </ImgContainer>
              <DivContents>
                <H3>Saheer Khan</H3>
                <P>Jamia Malappuram</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
            </DivMainer>
          </Div>
          <Div>
            <DivMainer>
              <ImgContainer>
                <Img
                  src={require("../../assets/Muhammed_Saheerk_jtOOWA8.jpg")}
                />
              </ImgContainer>
              <DivContents>
                <H3>Saheer Khan</H3>
                <P>Jamia Malappuram</P>
                <Para>Before Joining steyp</Para>
              </DivContents>
            </DivMainer>
          </Div>
        </Sliders>
        <Button>
          Apply for SAT
          <SpanLogo className="Spanned">
            <Imagehov src={require("../../assets/right-side.svg").default} />
          </SpanLogo>
        </Button>
      </Wrapper>
    </Mainsection>
  );
}
const Para = styled.p`
  margin-top: 20px;
  position: relative;
  ::before {
    content: url(${Test});
    position: absolute;
    top: -16px;
    color: rgb(45, 45, 45);
    width: 10px;
    display: block;
  }
`;
const SpanLogo = styled.span`
  margin-left: 8px;
  display: none;
`;
const Imagehov = styled.img``;
const DivMainer = styled.div`
  display: flex !important;
`;
const ButtonLinkedin = styled.a``;
const DivButton = styled.div`
  cursor: pointer;
`;
const DivContents = styled.div``;
const H3 = styled.h3``;
const P = styled.p``;
const Img = styled.img`
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
`;
const ImgContainer = styled.div`
  width: 22%;
  margin-right: 15px;
`;
const Sliders = styled(Slider)`
  display: flex !important;
  justify-content: space-between !important;
`;
const Div = styled.div`
  padding: 20px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 5px;
  margin-bottom: 20px;
  width: 48% !important;
  margin: 0 10px 10px 0;
  @media all and (max-width: 768px) {
    width: 100% !important;
  }
`;
const GreenSpan = styled.span`
  color: rgb(15, 167, 111);
  font-family: "gorditamedium";
`;
const Mainsection = styled.section`
  padding: 100px 0;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Headline = styled.h1`
  text-align: center;
  font-family: "gorditamedium";
  font-weight: 100;
  font-size: 35px;
  margin-bottom: 30px;
`;
const Button = styled.a`
  margin: 35px auto 0px;
  cursor: pointer;
  width: 175px;
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
  justify-content: center;
  align-items: start;
  border-radius: 5px;
  transition: 0.1s;
  &:hover .Spanned {
    display: block;
  }
  &:hover {
    width: 200px;
  }
`;
export default Testimonial;
