import styled from "styled-components";

type StyledPPropsType = {
  fontSize?: string;
  fontWedth?: string;
  color?: string;
  margin?: string;
};

export const StyledP = styled.p<StyledPPropsType>`
  font-family: intel;
  font-size: ${(props) => props.fontSize};

  color: ${(props) => props.color};

  margin-bottom: ${(props) => props.margin};
`;
