import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Mainsection>
      <Wrapper>
        <Headline>
          What our students say about the <br /> experience in{" "}
          <GreenSpan>Steyp</GreenSpan>
        </Headline>
        <MainDiv>
          <Sliders {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
          </Sliders>
        </MainDiv>
        <Button></Button>
      </Wrapper>
    </Mainsection>
  );
}
const Sliders = styled(Slider)``
const Div = styled.div``;
const GreenSpan = styled.span`
  color: rgb(15, 167, 111);
  font-family: "gorditamedium";
`;
const Mainsection = styled.section`
  padding: 100px 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;
`;
const Headline = styled.h1`
  text-align: center;
  font-family: "gorditamedium";
  font-weight: 100;
  font-size: 35px;
`;
const MainDiv = styled.div``;
const Button = styled.a``;
export default Testimonial;
