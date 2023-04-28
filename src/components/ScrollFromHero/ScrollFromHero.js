import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { hoverSupported } from "../hoverSupported";
import { useInterval } from "../useInterval";
import { useState } from "react";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper/ClickableWrapper";

const Wrapper = styled(motion.a)`
  position: absolute;
  bottom: -5%;
  left: 50%;
  transform: translate(-50%, 5%);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: var(--color-secondary-fade);
  display: grid;
  place-content: center;
  opacity: 0.7;
  box-shadow: 1px 1px 5px 0px hsla(57, 77%, 75%, 0.15),
    -1px -1px 5px 0px hsla(57, 77%, 75%, 0.1),
    inset 0px 0px 5px 0px hsla(57, 77%, 75%, 0.05);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      background-color: var(--color-primary-fade);
      opacity: 1;
    }
  `)}

  &:focus {
    outline: 3px solid var(--color-tertiary);
    outline-offset: 4px;
  }

  @media ${QUERIES.laptop} {
    bottom: -10%;
    transform: translate(-50%, 10%);
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const InnerCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    var(--color-secondary),
    var(--color-primary),
    var(--color-secondary)
  );
  display: grid;
  place-content: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  transition: all 0.6s ease-in-out;
  transform: translateY(${(p) => p.floatImage}px);
`;

const fadeInOutVariants = {
  initial: { opacity: 0, scale: 0.5, x: -100 },
  animate: { opacity: 0.7, scale: 1, x: -100 },
  exit: { opacity: 0, scale: 0, x: -200 },
};

function ScrollFromHero() {
  const [floatImage, setFloatImage] = useState(6);

  useInterval(() => {
    if (floatImage === 6) {
      setFloatImage(-6);
    } else {
      setFloatImage(6);
    }
  }, 500);

  return (
    <ClickableWrapper
      href={"#expertise"}
      onClick={() => {
        window.location = "/portfolio#expertise";
      }}
    >
      <Wrapper
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInOutVariants}
      >
        <InnerCircle>
          <Image
            floatImage={floatImage}
            src={"/portfolio/double_down.svg"}
            alt={"scroll down image"}
          />
        </InnerCircle>
      </Wrapper>
    </ClickableWrapper>
  );
}

export default ScrollFromHero;
