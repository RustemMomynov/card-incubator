import styled from "styled-components";

type StyledImgPropsType = {
  width?: string;
  height?: string;
};

export const StyledImg = styled.img<StyledImgPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  margin: 10px 10px 0px 10px;
  border-radius: 10px;
`;
