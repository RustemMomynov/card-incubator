import { FC } from "react";
import { StyledCard } from "../styledComponents/Card/Card.styled";
import { StyledButton } from "../styledComponents/Button/Button.styled";
import { myTheme } from "../Theme/Theme.styled";
import { StyledImg } from "../styledComponents/Img/Img.styled";
import { StyledP } from "../styledComponents/p/p.styled";
import { StyledH1 } from "../styledComponents/h/h.styled";

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <>
      <StyledCard>
        <StyledImg src="/images/img.png" width="280px" height="170px" />

        <div>
          <StyledH1 fontWeight="900" fontSize="20px" margin="20px">
            Headline
          </StyledH1>
          <StyledP fontSize="12px" color={myTheme.colors.grey} margin="20px">
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </StyledP>

          <StyledButton
            buttonType="primary"
            fontSize={"10px"}
            color={myTheme.colors.secondary}
          >
            See more
          </StyledButton>
          <StyledButton
            buttonType="outlined"
            fontSize={"10px"}
            color={myTheme.colors.secondary}
          >
            Save
          </StyledButton>
        </div>
      </StyledCard>
    </>
  );
};

export default Card;
