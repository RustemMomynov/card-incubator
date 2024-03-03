import { FC } from "react";
import { StyledCard } from "../styledComponents/Card/Card.styled";
import { StyledButton } from "../styledComponents/Button/Button.styled";
import { myTheme } from "../Theme/Theme.styled";

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <>
      <StyledCard>
        <img src="/images/img.png" alt="Пейзаж" />

        <div>
          <h1>Headline</h1>
          <p>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </p>

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
