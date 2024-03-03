import styled, { css } from "styled-components";

type StyledButtonPropsType = {
  color?: string;
  fontSize?: string;
  // primary?: boolean;
  // outlined?: boolean;
  buttonType?: "primary" | "outlined";
  active?: boolean;
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  border: none;
  border-radius: 5px;

  padding: 10px 20px;

  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;
  min-width: 86px;

  //outlined

  ${(props) =>
    props.buttonType === "outlined" &&
    css<StyledButtonPropsType>`
      border: 2px solid ${(props) => props.color || "blue"};
      color: ${(props) => props.color || "blue"};
      background-color: transparent;

      &:hover {
        border-color: #4053cc;
        color: #4053cc;
        background-color: transparent;
      }
    `}

  // primary

  ${(props) =>
    props.buttonType === "primary" &&
    css<StyledButtonPropsType>`
      border: 2px solid ${(props) => props.color || "blue"};
      background-color: ${(props) => props.color || "blue"};
      color: snow;

      &:hover {
        background-color: #4053cc;
      }
    `}

  // shadow 
  ${(props) =>
    props.active &&
    css<StyledButtonPropsType>`
      box-shadow: 5px 5px black;
    `}
`;
