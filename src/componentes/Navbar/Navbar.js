import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <GeneralWrapper>
      <Titulo>
        <Logo>
          <img src="./imaegnes/logo-mientras.jpeg"></img>
        </Logo>
        <NavWrapper>
          <Lista>
            <ContainerListNavigation>
              <List>HOME</List>
              <List>EMPRESA</List>
              <List>MENU</List>
              <List>CONTACTO</List>
            </ContainerListNavigation>
          </Lista>
          <Contacto>
            <List2>+5699dsdds8</List2>
            <List2>sddsddsdf3442</List2>
          </Contacto>
        </NavWrapper>
      </Titulo>
    </GeneralWrapper>
  );
};

const GeneralWrapper = styled.div``;
const Titulo = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  position: relative;
`;

const Logo = styled.div`
  width: 20%;
  border: solid white 1px;
`;

const NavWrapper = styled.div`
  width: 80%;
  display: flex;
`;
const Lista = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerListNavigation = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid white 1px;
`;

const List = styled.li`
  list-style: none;
`;
const Contacto = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid white 1px;
  padding-left: 20px;
`;
const List2 = styled.li`
  list-style: none;
`;
