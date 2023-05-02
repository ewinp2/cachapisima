import React from "react";
import styled from "styled-components";

export const SectionComponentFour = () => {
  return (
    <BackgraoundSection>
      <Container>
        <BoxContent>
          <Box1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3_4>13</Box1_1_3_4>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3>Platos Deliciosos</Box1_1_3>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
          </Box1>
          <Box1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3_4>1</Box1_1_3_4>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3>Restaurant</Box1_1_3>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
          </Box1>
          <Box1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3_4>60k</Box1_1_3_4>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3>Platos Servidos</Box1_1_3>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
          </Box1>
          <Box1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3_4>89k</Box1_1_3_4>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
            <Box1_1>
              <Box1_1_2></Box1_1_2>
              <Box1_1_3>Clientes Felices</Box1_1_3>
              <Box1_1_4></Box1_1_4>
            </Box1_1>
          </Box1>
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
const Box1 = styled.div`
  height: 100%;
  width: 100%;
`;

const Box1_1 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 20px;
  font-size: 20px;
`;
const Box1_1_2 = styled.div`
  display: flex;
`;
const Box1_1_3 = styled.div``;
const Box1_1_4 = styled.div``;

const Box1_1_3_4 = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
`;
