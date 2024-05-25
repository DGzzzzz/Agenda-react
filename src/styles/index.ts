import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
`
export const BotaoAdicionar = styled.button`
  border: none;
  background-image: radial-gradient(
    circle 643px at 1.1% 95.1%,
    rgba(66, 191, 85, 1) 0%,
    rgba(46, 204, 66, 0.84) 90%
  );
  color: white;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
  align-self: flex-end;
  &:hover {
    background-image: radial-gradient(
      circle 624px at 3.3% 8.7%,
      rgba(40, 205, 81, 0.65) 0%,
      rgba(46, 120, 46, 0.93) 100.3%
    );
  }
`
export const BotaoExcluir = styled.button`
  background-image: linear-gradient(
    88.7deg,
    rgba(205, 33, 42, 1) 10.6%,
    rgba(236, 95, 5, 1) 90%
  );
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-image: radial-gradient(
      circle 948px at 0.6% 44%,
      rgba(252, 1, 1, 1) 0%,
      rgba(254, 1, 247, 1) 99.8%
    );
  }
`

export const BotaoCancelar = styled(BotaoExcluir)`
  padding: 8px 10px;
  border-radius: 8px;
  margin: 20px;
  font-size: 16px;
`

export const BotaoEditar = styled.button`
  background-image: radial-gradient(
    circle farthest-corner at -2.6% 51.8%,
    rgba(24, 9, 181, 1) 0%,
    rgba(0, 127, 189, 1) 90%
  );
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      93.2deg,
      rgba(24, 95, 246, 1) 14.4%,
      rgba(27, 69, 166, 1) 90.8%
    );
  }
`

export default EstiloGlobal
