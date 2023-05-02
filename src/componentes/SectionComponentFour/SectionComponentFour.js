import React from "react";
import styled from "styled-components";

export const SectionComponentFour = () => {
  const listElements = [
    { listElement: "13", listElementSubtitle: "Platos Deliciosos" },
    { listElement: "1", listElementSubtitle: "Restaurant" },
    { listElement: "60K", listElementSubtitle: "Platos Servidos" },
    { listElement: "89K", listElementSubtitle: "Clientes felices" },
  ];
  return (
    <BackgraoundSection>
      <Container>
        <BoxContent>
          {listElements.map((element) => (
            <BoxWrapper key={element.listElement}>
              <ListElementWrapper>
                <ListElement>{element.listElement}</ListElement>
              </ListElementWrapper>
              <ListElementWrapper>
                {element.listElementSubtitle}
              </ListElementWrapper>
            </BoxWrapper>
          ))}
        </BoxContent>
      </Container>
    </BackgraoundSection>
  );
};

const BackgraoundSection = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background-color: #f2ab27;
  /* margin: auto;
  padding: auto; */
`;
const Container = styled.div`
  padding: 70px 0px 60px 0px;
  background-color: #f2ab27;
  position: relative;
  width: 100%;
`;

const BoxContent = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
`;
const BoxWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ListElementWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 20px;
  font-size: 20px;
`;

const ListElement = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
`;
