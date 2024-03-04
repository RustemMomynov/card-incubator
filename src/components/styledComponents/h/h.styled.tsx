import styled from "styled-components";

type StyledHPropsType = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
};

export const StyledH1 = styled.h1<StyledHPropsType>`
  font-family: intel;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  color: ${(props) => props.color};

  margin-bottom: ${(props) => props.margin};
`;
