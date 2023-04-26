import React from "react";
import styled from "styled-components";

export const SectionComponentTwo = () => {
  return (
    <WrapperContentInfo>
      <InfoOne>
        <WrapperInfoOne>
          <Img src="./imagenes/mechada.png"></Img>
        </WrapperInfoOne>
      </InfoOne>
      <InfoTwo>
        <InfoTwo2>
          <h3 className="nosotros">Nosotros</h3>
          <h1 className="cachapas">
            CACHAPAS <br></br>ZULIANAS
          </h1>
          <p className="text-paragraph">
            Nace hace a 3 años de manos de migrantes venezolanos, que abandonan
            su país en busca de una calidad de vida para ellos y principalmente
            para su familia, con una maleta llena de sueños, llegando a un país
            con ganas de trabajar y de dar a conocer lo mejor de la parrilla y
            gastronomía venezolana. <br></br> Somos un restaurante 100% con
            sabor Venezolano destinado para el compartir en familia, donde
            podrán disfrutar de un variado menú, para satisfacer y complacer
            todo tipo de paladar. Nuestro plato principal es la Parrilla y es la
            mejor, no dicho por nosotros sino por nuestros comensales.
          </p>
          <Button>Ver más</Button>
        </InfoTwo2>
      </InfoTwo>
    </WrapperContentInfo>
  );
};
const WrapperContentInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const InfoOne = styled.div`
  width: 50%;
`;
const InfoTwo = styled.div`
  width: 50%;
`;
const WrapperInfoOne = styled.div``;
const Img = styled.img`
  height: 80%;
  width: 80%;
  padding: 85px;
`;
const InfoTwo2 = styled.div`
  padding: 80px;
  .nosotros {
    font-size: 30px;
    color: #f2ab27;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  .cachapas {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2em;
    letter-spacing: 14px;
    padding-bottom: 7px;
  }
  .text-paragraph {
    font-size: 17px;
    color: #8f8c8a;
    line-height: 2em;
    font-family: "Josefin Sans", Sans-serif;
    padding-right: 200px;
    padding-bottom: 60px;
  }
`;
const Button = styled.button`
  height: 70px;
  width: 20%;
  background-color: orange;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
`;
