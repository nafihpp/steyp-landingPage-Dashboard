import React from "react";
import styled from "styled-components";

function Foot() {
  return (
    <Mainsection>
      <Wrapper>
        <MainDiv>
          <DivLeft>
            <DivLogo>
              <Img src={require("../../assets/grey-logo.svg").default} />
            </DivLogo>
            <P>
              Steyp Private Limited, <br /> 37/1959, 1st Floor, Infra Futura,
              <br /> Opposite Bharath Matha College,
              <br /> Seaport - Airport Rd, Thrikkakara,
              <br /> Kakkanad, Kerala,
              <br /> India - 682021
            </P>
          </DivLeft>
          <DivRight>
            <DivOne>
              <H5>Programs</H5>
              <DivButtons>
                <Button>Tech Schooling</Button>
                <Button>Tech Degree</Button>
                <Button>Tech Grad</Button>
                <Button>Challenges</Button>
              </DivButtons>
            </DivOne>
            <DivOne>
              <H5>Company</H5>
              <DivButtons>
                <Button>About us</Button>
                <Button>Contact us</Button>
              </DivButtons>
            </DivOne>
            <DivOne>
              <H5>Coummunity</H5>
              <DivButtons>
                <Button>Talrop Talks</Button>
                <Button>Free Ground</Button>
              </DivButtons>
            </DivOne>
            <DivOne>
              <H5>Contact</H5>
              <DivButtons>
                {" "}
                <Button>+91-8589998874</Button>
                <Button>hello@steyp.com</Button>
              </DivButtons>
              <Spanner>
                <Buttons>
                  <ImgSocial
                    src={require("../../assets/instagram.svg").default}
                  />
                </Buttons>
              </Spanner>
              <Buttons>
                <ImgSocial src={require("../../assets/facebook.svg").default} />
              </Buttons>
              <Buttons>
                <ImgSocial src={require("../../assets/twitter.svg").default} />
              </Buttons>
              <Buttons>
                <ImgSocial src={require("../../assets/linkedin.svg").default} />
              </Buttons>
              <Buttons>
                <ImgSocial src={require("../../assets/youtube.svg").default} />
              </Buttons>
            </DivOne>
          </DivRight>
        </MainDiv>
      </Wrapper>
      <Wrapper>
        <DivFoot>
          <Divfirst>
            <Parafirst>
              &copy; 2022, Steyp Private Limited. All rights reserved
            </Parafirst>
          </Divfirst>
          <DivLast>
            <ButtonOne>Terms of Service</ButtonOne>
            <ButtonTwo>Privacy Policy</ButtonTwo>
          </DivLast>
        </DivFoot>
      </Wrapper>
    </Mainsection>
  );
}
const Spanner = styled.span``;
const ImgSocial = styled.img``;
const Buttons = styled.a`
  margin-right: 15px;
  cursor: pointer;
`;
const ButtonOne = styled.a`
  margin-right: 10px;
  cursor: pointer;
`;
const ButtonTwo = styled.a`
  cursor: pointer;
`;
const DivFoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Divfirst = styled.div`
  color: #868686;
`;
const Parafirst = styled.p``;
const DivLast = styled.div`
  color: #868686;
`;
const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivOne = styled.div`
  margin-right: 131px;
  :nth-child(4) {
    margin-right: 0;
  }
`;
const H5 = styled.h5`
  color: rgb(255, 255, 255);
  font-family: "gorditamedium";
  margin-bottom: 20px;
  font-size: 16px;
`;
const Button = styled.a`
  color: rgb(170, 170, 170);
  font-size: 15px;
  font-family: "gorditamedium";
  margin-bottom: 20px;
  cursor: pointer;
`;
const DivLeft = styled.div``;
const DivRight = styled.div`
  display: flex;
`;
const P = styled.p`
  color: rgb(170, 170, 170);
  line-height: 1.5rem;
`;
const Mainsection = styled.section`
  padding: 100px 0 50px 0;
  background-color: rgb(30, 30, 30);
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivLogo = styled.div`
  width: 40%;
  margin-bottom: 20px;
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;

export default Foot;
