import React from "react";
import styled from "styled-components";

export const SectionComponentThree = () => {
  return (
    <BackgraoundSection>
      <ComponentsOne>
        <H1>LA MEJOR ATENCION</H1>
        <P>Nuestro Personal se Caracteriza por:</P>
        <Ul>
          <Li>Respeto</Li>
          <Li>Amabilidad</Li>
          <Li>Eficiencia</Li>
        </Ul>
        <Button>Ver Menú</Button>
      </ComponentsOne>
      <ComponentsTwo>sdfsdsfds</ComponentsTwo>
    </BackgraoundSection>
  );
};

const BackgraoundSection = styled.div`
  background-image: url("./imagenes/foto-andrea.png");
  content: "";
  height: 1200px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
`;
const ComponentsOne = styled.div`
  width: 50%;
  padding: 85px;
`;
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
const P = styled.p`
  font-size: 23px;
  color: #8f8c8a;
  line-height: 2em;
  font-family: "Josefin Sans", Sans-serif;
`;
const Ul = styled.ul``;
const Li = styled.li`
  font-size: 17px;
  color: #8f8c8a;
  line-height: 2em;
  font-family: "Josefin Sans", Sans-serif;
`;
const Button = styled.button`
  height: 70px;
  width: 20%;
  background-color: orange;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
`;
const ComponentsTwo = styled.div`
  width: 50%;
`;
