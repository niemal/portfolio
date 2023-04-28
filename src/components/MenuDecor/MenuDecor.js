import styled from "styled-components";
import { motion } from "framer-motion";
import { useInterval } from "../useInterval";
import { useState } from "react";
import { QUERIES } from "../constants";

const BubbleOne = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  /* background-color: var(--color-text); */
  background: radial-gradient(
    circle at bottom,
    var(--color-text),
    var(--color-secondary),
    var(--color-secondary-fade)
  );
  position: absolute;
  transition: all 0.8s ease-in-out;
  right: -80px;
  top: 0px;
  opacity: 1;
  display: grid;
  place-content: center;
  /* transform: scale(${(p) => p.size}px); */
  ${(p) =>
    p.size === 1.2
      ? `
  box-shadow: 3px 3px 12px 0px hsla(57, 77%, 75%, 0.25),
    -3px -3px 12px 0px hsla(57, 77%, 75%, 0.2),
    inset 0px 0px 12px 0px hsla(57, 77%, 75%, 0.15);
  `
      : ""}

  @media ${QUERIES.exclusiveWidth3} {
    width: 50px;
    height: 50px;
  }
`;

const BubbleOneContent = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
    circle at bottom left,
    var(--color-tertiary),
    var(--color-secondary-fade),
    var(--color-primary)
  );

  @media ${QUERIES.exclusiveWidth3} {
    width: 40px;
    height: 40px;
  }
`;

export const BubbleTwo = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-secondary-fade);
  position: absolute;
  transition: all 0.3s ease-in-out;
  right: -80px;
  top: 80px;
  display: grid;
  place-content: center;
  /* transform: translate(-20%, 200%); */
  box-shadow: 3px 3px 12px 0px hsla(57, 77%, 75%, 0.15),
    -3px -3px 12px 0px hsla(57, 77%, 75%, 0.1),
    inset 0px 0px 12px 0px hsla(57, 77%, 75%, 0.05);
`;

export const BubbleTwoContent = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(
    circle at bottom left,
    var(--color-text),
    var(--color-secondary-fade),
    var(--color-tertiary)
  );
`;

export function* indexLoop(arr, index) {
  let direction = 1;

  while (true) {
    yield index;

    index += direction;

    if (index < 0) {
      index = 1;
      direction = 1;
    } else if (index >= arr.length) {
      index = arr.length - 2;
      direction = -1;
    }
  }
}

const bubbleOneSize = [1, 1.2];
const bubbleOneFloat = [8, -8];
const bubbleOneRotate = [40, 120];
const loopOne = indexLoop(bubbleOneSize, 0);
const oneVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const bubbleTwoX = [
  -20, -100, -200, -400, -600, -800, -900, -950, -850, -650, -350, -200, -100,
  0,
];
const bubbleTwoY = [
  200, 350, 450, 550, 550, 450, 300, 80, -200, -320, -340, -240, -140, 0,
];
const bubbleTwoRotate = [
  0, 120, 120, 120, 360, 360, 360, 0, 0, 0, 0, 120, 220, 0,
];
const bubbleTwoScaleStart = [
  1, 1.4, 2, 2, 1, 1, 1, 1, 0.5, 0.5, 0.8, 1.4, 1.4, 1,
];
const loopTwo = indexLoop(bubbleTwoX, 0);

const twoVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MenuDecor() {
  const [indexOne, setIndexOne] = useState(2);
  const [indexTwo, setIndexTwo] = useState(0);
  const [bubbleTwoScale, setBubbleTwoScale] = useState(bubbleTwoScaleStart);

  useInterval(() => {
    setIndexOne(loopOne.next().value);
  }, 900);

  useInterval(() => {
    setIndexTwo(loopTwo.next().value);
  }, 600);

  useInterval(() => {
    const tmp = shuffle(bubbleTwoScale);
    setBubbleTwoScale(tmp);
  }, 600 * bubbleTwoScale.length);

  return (
    <>
      <BubbleOne
        variants={oneVariants}
        initial={"hidden"}
        animate={"visible"}
        size={bubbleOneSize[indexOne]}
        style={{
          y: bubbleOneFloat[indexOne],
          scale: bubbleOneSize[indexOne],
          rotate: bubbleOneRotate[indexOne],
        }}
      >
        <BubbleOneContent />
      </BubbleOne>
      <BubbleTwo
        variants={twoVariants}
        initial={"hidden"}
        animate={"visible"}
        style={{
          x: `${bubbleTwoX[indexTwo]}%`,
          y: `${bubbleTwoY[indexTwo]}%`,
          scale: bubbleTwoScale[indexTwo - 1],
          rotate: bubbleTwoRotate[indexTwo],
        }}
      >
        <BubbleTwoContent />
      </BubbleTwo>
    </>
  );
}

export default MenuDecor;
