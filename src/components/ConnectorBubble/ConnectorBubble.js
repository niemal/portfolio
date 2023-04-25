import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInterval } from "../useInterval";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: flex-end;

  @media ${QUERIES.tabletAndSmaller} {
    padding-right: 16px;
  }
`;

const MyBubble = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: all 0.3s ease-in-out;
  padding: 12px;
  border: 2px solid var(--color-secondary);
  box-shadow: 1px 1px 5px 0px hsla(57, 77%, 75%, 0.15),
    -1px -1px 5px 0px hsla(57, 77%, 75%, 0.1),
    inset 0px 0px 5px 0px hsla(57, 77%, 75%, 0.05);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* z-index: -1; */
    border-radius: inherit;
    transition: opacity 600ms linear;
  }
  &:before {
    background: radial-gradient(
      circle at top left,
      ${(p) => p.gradient[0]},
      ${(p) => p.gradient[1]},
      ${(p) => p.gradient[2]}
    );
    opacity: ${(p) => (p.index % 2 === 0 ? 1 : 0)};
  }
  &:after {
    background: radial-gradient(
      circle at top left,
      ${(p) => p.gradient2[0]},
      ${(p) => p.gradient2[1]},
      ${(p) => p.gradient2[2]}
    );
    opacity: ${(p) => (p.index % 2 === 0 ? 0 : 1)};
  }
`;

const Title = styled.h2`
  font-family: var(--font-primary);
  color: var(--color-text);
  font-size: ${60 / 16}rem;
  user-select: none;
`;

function ConnectorBubble({ children, ...props }) {
  const rotation = [
    ["var(--color-primary)", "var(--color-secondary)", "var(--color-tertiary)"],
    [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-secondary)",
    ],
    [
      "var(--color-secondary)",
      "var(--color-primary)",
      "var(--color-secondary)",
    ],
    [
      "var(--color-secondary)",
      "var(--color-secondary)",
      "var(--color-primary)",
    ],
    ["var(--color-tertiary)", "var(--color-secondary)", "var(--color-primary)"],
  ];
  const [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex((index + 1) % (rotation.length - 1));
  }, 1200);

  return (
    <Wrapper {...props}>
      <MyBubble
        gradient={rotation[index]}
        gradient2={rotation[(index + 1) % rotation.length]}
        index={index}
      />
      <Title>{children}</Title>
    </Wrapper>
  );
}

export default ConnectorBubble;
