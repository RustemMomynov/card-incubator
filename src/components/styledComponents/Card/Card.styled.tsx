import styled from "styled-components";
import { myTheme } from "../../Theme/Theme.styled";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  width: 300px;
  height: 350px;

  background-color: ${myTheme.colors.primary};

  border-radius: 20px;

  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 280px;
    height: 170px;

    margin: 10px 10px 0px 10px;
    border-radius: 10px;
  }

  div {
    margin: 20px 20px 20px 20px;

    h1 {
      font-family: Inter;
      font-weight: 900;
      font-size: 20px;
      margin-bottom: 20px;
    }

    p {
      font-family: Inter;
      font-size: 12px;

      color: ${myTheme.colors.grey};

      margin-bottom: 20px;
    }
  }

  button + button {
    margin-left: 12px;
  }
`;

const StyledImg = styled.img;
