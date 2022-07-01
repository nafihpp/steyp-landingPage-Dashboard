import React from "react";
import styled from "styled-components";
function Middle() {
    return (
        <>
            <TopContainer>
                <Title>Hi,Mohammed Nafih Yuseph 👋</Title>
                <TitleSecond>Subjects</TitleSecond>
                <Contents>
                    <ImageContainer className="book">
                        <img
                            src={require("../../assets/book.svg").default}
                            alt="book"
                        />
                    </ImageContainer>
                    <InnerTitle>
                        Tech <br /> Schooling
                    </InnerTitle>
                </Contents>
            </TopContainer>
        </>
    );
}
const InnerTitle = styled.h3`
    font-family: "gorditamedium";
    font-weight: 400;
    font-size: 25px;
`;
const ImageContainer = styled.div`
    width: 58px;
    margin-bottom: 20px;
`;
const Contents = styled.div`
    padding: 40px 30px;
    background-color: rgb(236, 253, 237);
    width: 20%;
    height: 264px;
    border-radius: 7px;
    cursor: pointer;
    @media all and (max-width: 768px) {
        width: 30%;
    }
    @media all and (max-width: 640px) {
        width: 50%;
    }
    :hover .book {
    }
`;
const TitleSecond = styled.h3`
    margin: 20px 0;
    font-size: 21px;
    font-family: "gorditamedium";
    font-weight: 100;
`;
const Title = styled.h1`
    width: 86%;
    padding: 10px;
    background: #e4f2e5;
    font-family: "gorditamedium";
    font-weight: 100;
    height: 92px;
    display: flex;
    align-items: center;
`;
const TopContainer = styled.div`
    left: 240px;
    position: relative;
    top: 76px;
    width: 97%;
`;
export default Middle;
