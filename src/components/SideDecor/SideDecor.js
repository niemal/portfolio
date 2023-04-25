import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { indexLoop, shuffle } from "../MenuDecor";
import { useInterval } from "../useInterval";
import { QUERIES } from "../constants";

const loopedWalk = keyframes`
0% {
  transform: translateY(0%) translateX(0%);
}
15% {
  transform: translateY(330%) translateX(25%) scale(1.1) rotate(180deg);
  box-shadow: 3px 3px 12px 0px hsla(57, 77%, 75%, 0.15),
    -3px -3px 12px 0px hsla(57, 77%, 75%, 0.1),
    inset 0px 0px 12px 0px hsla(57, 77%, 75%, 0.05);
}
40% {
  transform: translateY(880%) translateX(-25%) scale(1.3) rotate(90deg);
}
50% {
  transform: translateY(1100%) scale(1)rotate(0deg);
}
65% {
  transform: translateY(880%) translateX(25%) scale(0.5) rotate(220deg);
}
90% {
  box-shadow: 3px 3px 12px 0px hsla(267, 83%, 60%, 0.25),
    -3px -3px 12px 0px hsla(267, 83%, 60%, 0.15),
    inset 0px 0px 12px 0px hsla(267, 83%, 60%, 0.1);
  transform: translateY(220%) translateX(-25%) scale(1.3) rotate(100deg);
}
100% {
  transform: translateY(0%) translateX(0%) scale(1) rotate(0deg);
}
`;

const loopedWalkLimited = keyframes`
0% {
  transform: translateY(0%) translateX(0%);
}
15% {
  transform: translateY(330%) translateX(25%) scale(1.1) rotate(180deg);
  box-shadow: 3px 3px 12px 0px hsla(57, 77%, 75%, 0.15),
    -3px -3px 12px 0px hsla(57, 77%, 75%, 0.1),
    inset 0px 0px 12px 0px hsla(57, 77%, 75%, 0.05);
}
40% {
  transform: translateY(580%) translateX(-25%) scale(1.3) rotate(90deg);
}
50% {
  transform: translateY(880%) scale(1)rotate(0deg);
}
65% {
  transform: translateY(580%) translateX(25%) scale(0.5) rotate(220deg);
}
90% {
  box-shadow: 3px 3px 12px 0px hsla(267, 83%, 60%, 0.25),
    -3px -3px 12px 0px hsla(267, 83%, 60%, 0.15),
    inset 0px 0px 12px 0px hsla(267, 83%, 60%, 0.1);
  transform: translateY(220%) translateX(-25%) scale(1.3) rotate(100deg);
}
100% {
  transform: translateY(0%) translateX(0%) scale(1) rotate(0deg);
}
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 80px;
  transition: all 0.6s ease-in;
  width: 80px;
  height: 80px;
  background: linear-gradient(
    90deg,
    var(--color-text),
    var(--color-tertiary),
    var(--color-primary)
  );
  border-radius: 50%;
  display: grid;
  place-content: center;

  animation: ${loopedWalk} 18s ease-in-out infinite;
  will-change: transform;

  @media ${QUERIES.exclusiveWidth1} {
    right: 24px;
  }
  @media ${QUERIES.exclusiveWidth2} {
    right: -12px;
  }

  @media ${QUERIES.exclusiveWidth3} {
    animation: ${loopedWalkLimited} 18s ease-in-out infinite;
  }
`;

const InsideBall = styled.div`
  width: 65px;
  height: 65px;
  background: radial-gradient(
    circle at bottom left,
    var(--color-primary),
    var(--color-tertiary),
    var(--color-text)
  );
  opacity: 0.7;
  border-radius: 50%;
  transition: all 0.6s ease-in-out;
  display: grid;
  place-content: center;
`;

const InsideFade = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(p) =>
    p.index % 3 === 0
      ? "var(--color-primary-fade)"
      : "var(--color-secondary-fade)"};
  transition: all 1s ease-in-out;
  transform: scale(${(p) => (p.index % 2 === 0 ? "0.7" : "1")});

  ${(p) =>
    p.index === 4 || p.index > 6
      ? "background-color: var(--color-text-fade);"
      : ""}
  box-shadow: ${(p) =>
    p.index % 2 === 0
      ? `
  3px 3px 12px 0px hsla(267, 83%, 60%, 0.25),
    -3px -3px 12px 0px hsla(267, 83%, 60%, 0.15),
    inset 0px 0px 12px 0px hsla(267, 83%, 60%, 0.1);
  `
      : "none"};
`;

const rotateOuter = keyframes`
  0% {
    transform: rotate(0deg) translate(120px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(120px) rotate(-360deg);
  }
`;

const OuterBall = styled(InsideFade)`
  position: absolute;
  border: 2px solid var(--color-tertiary);
  border-color: ${(p) =>
    p.index % 2 === 0 ? "var(--color-tertiary)" : "var(--color-primary)"};
  animation: ${rotateOuter} 3.5s linear infinite;
`;

const rotateOuterTwo = keyframes`
  0% {
    transform: rotate(360deg) translate(120px) rotate(-360deg);
  }
  100% {
    transform: rotate(0deg) translate(120px) rotate(0deg);
  }
`;

const OuterBallTwo = styled(OuterBall)`
  border-color: ${(p) =>
    p.index % 2 === 0 ? "var(--color-primary)" : "var(--color-tertiary)"};
  animation: ${rotateOuterTwo} 3s linear infinite;
  background-color: ${(p) =>
    p.index % 3 !== 0
      ? "var(--color-primary-fade)"
      : "var(--color-secondary-fade)"};
`;

const variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    y: -100,
  },
};

const rotates = [0, 120, 120, 120, 360, 360, 360, 0, 0, 0, 0, 120, 220, 0];
const scales = [4, 1.3, 2, 2, 1, 1, 1, 1, 0.5, 0.5, 0.8, 1.4, 1.4, 1];
const opacities = [0.8, 0.4, 1, 0.8, 0.6, 1, 0.4, 0.6, 0.4, 0.8, 0.8, 1, 1, 1];
const loop = indexLoop(rotates, 0);

function SideDecor() {
  const [showBall, setShowBall] = useState(false);
  const [ballScales, setBallScales] = useState(scales);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onWindowScroll = () => {
      if (window.scrollY > 450) {
        setShowBall(true);
      } else {
        setShowBall(false);
      }
    };

    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  useInterval(() => {
    setIndex(loop.next().value);
  }, 1200);

  useInterval(() => {
    setBallScales((s) => shuffle(s));
  }, 18000);

  return (
    <AnimatePresence mode={"wait"}>
      <Wrapper
        variants={variants}
        initial={"hidden"}
        animate={showBall ? "visible" : "hidden"}
        index={index}
        style={{
          opacity: opacities[index - 1],
          scale: ballScales[index + 1],
          rotate: rotates[index + 1],
        }}
      >
        <OuterBall index={index} />
        <OuterBallTwo index={index} />
        <InsideBall index={index}>
          <InsideFade index={index} />
        </InsideBall>
      </Wrapper>
    </AnimatePresence>
  );
}

export default SideDecor;
