import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Bubble from "../Bubble";

const TopContainer = styled.div`
  position: absolute;
  right: -100px;
  top: -100px;
`;

const BottomContainer = styled.div`
  position: absolute;
  left: -100px;
  bottom: -160px;
`;

const bigBubbleAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.5, duration: 0.5 },
};

const otherBubblesAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 1, duration: 0.5 },
};

function BackgroundDecor() {
  const [topRef, topInView] = useInView({ triggerOnce: true });
  const [bottomRef, bottomInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <>
      <TopContainer
        ref={topRef}
        initial="initial"
        animate={topInView ? "animate" : "initial"}
      >
        <Bubble size={"big"} animation={bigBubbleAnimation} />
        <Bubble size={"medium"} animation={otherBubblesAnimation} />
        <Bubble animation={otherBubblesAnimation} />
      </TopContainer>

      <BottomContainer
        ref={bottomRef}
        initial="initial"
        animate={bottomInView ? "animate" : "initial"}
      >
        <Bubble size={"big"} animation={bigBubbleAnimation} />
        <Bubble
          bottom={true}
          size={"medium"}
          animation={otherBubblesAnimation}
        />
        <Bubble bottom={true} animation={otherBubblesAnimation} />
      </BottomContainer>
    </>
  );
}

export default BackgroundDecor;
