import React from "react";
import styled from "styled-components";

export const SectionComponent = () => {
  return (
    <SectionWrapper>
      <WrapperContent>
        <ContentOne>
          <Texto>
            CACHAPAS Y <br /> GASTRONOMÍA <br />
            VENEZOLANA
          </Texto>{" "}
          <WrapperButton>
            <Button>Ver Menú</Button>
          </WrapperButton>
        </ContentOne>
        <ContentTwo></ContentTwo>
      </WrapperContent>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  background-image: url("./imagenes/section1.jpg");
  content: "";
  height: 700px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
`;
const ContentOne = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
  font-size: 60px;
  color: green;
  font-family: "Josefin Sans", Sans-serif;
  font-weight: 500;
`;
const ContentTwo = styled.div`
  width: 50%;
`;

const Texto = styled.div`
  padding-top: 146px;
  height: 25%;
  width: 100%;
`;
const WrapperButton = styled.div`
  width: 100%;
`;
const Button = styled.button`
  height: 70px;
  width: 20%;
  background-color: orange;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
`;
