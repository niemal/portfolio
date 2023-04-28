import styled, { css } from "styled-components";
import ConnectorBubble from "../ConnectorBubble";
import ClickableWrapper from "../ClickableWrapper";
import { hoverSupported } from "../hoverSupported";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { QUERIES } from "../constants";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  gap: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 600px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    max-width: 100%;
    padding: 0px 12px;
  }
`;

const SkillsWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 100%;
  width: 100%;
  position: relative;
`;

const Skill = styled(motion.a)`
  position: relative;
  padding: 8px;
  text-decoration: none;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  gap: 12px;
  background-color: var(--color-secondary-fade);
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
  border: 3px solid transparent;

  &:focus {
    outline: 3px solid var(--color-tertiary);
    outline-offset: 4px;
  }

  ${hoverSupported(css`
    &:hover {
      opacity: 1;
      transform: translateY(-8px);
      border-color: var(--color-primary);
    }
  `)}
`;

const SkillTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${24 / 16}rem;
  font-family: var(--font-primary);
  color: var(--color-text);
  transition: all 0.3s ease-in-out;
  transform: rotate(-30deg);

  ${hoverSupported(css`
    ${Skill}:hover & {
      transform: rotate(0deg) translate(50%, -50%);
      color: var(--color-tertiary);
    }
  `)}
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--color-text);
  width: 130px;
  height: 130px;

  ${hoverSupported(css`
    ${Skill}:hover & {
      border-color: var(--color-tertiary);
    }
  `)}
`;

function useAnimateOnInView(threshold = 0.1) {
  const animationControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  return { ref, animationControls, inView };
}

function MySkill({ children, offsetX, offsetY, inView, ...props }) {
  const ref = useRef(null);
  const [variants, setVariants] = useState({});

  useEffect(() => {
    if (ref?.current) {
      const skill = ref.current;
      const x = offsetX - skill.offsetLeft - skill.clientWidth / 2;
      const y = offsetY - skill.offsetTop - skill.clientHeight / 2;

      const tmp = {
        hidden: {
          scale: 0,
          opacity: 0,
          x: x - 200,
          y,
          position: "absolute",
        },
        visible: {
          scale: 1,
          opacity: 1,
          x: [x, x, 0],
          y: [y, y, 0],
          position: "relative",
          transition: {
            type: "spring",
            damping: 24,
            stiffness: 100,
            duration: 4.4,
            delay: 0.6,
          },
        },
      };

      setVariants(tmp);
    }
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
    >
      <ClickableWrapper
        onClick={() => {
          window.location = `${props.href}`;
        }}
        {...props}
      >
        <Skill {...props}>{children}</Skill>
      </ClickableWrapper>
    </motion.div>
  );
}

function Skills() {
  const { ref, animationControls, inView } = useAnimateOnInView(0.1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (ref?.current) {
      setOffsetX(ref.current.offsetWidth / 2);
      setOffsetY(ref.current.offsetHeight / 2);
    }
  }, [ref]);

  return (
    <Wrapper id={"skills"}>
      <ConnectorBubble>Skills</ConnectorBubble>

      <SkillsWrapper
        ref={ref}
        // variants={skillsWrapperVariant}
        animate={animationControls}
        initial="hidden"
      >
        <MySkill
          href={"https://en.wikipedia.org/wiki/JavaScript"}
          offsetX={offsetX}
          offsetY={offsetY}
          inView={inView}
        >
          <SkillTitle>JavaScript</SkillTitle>
          <Image
            src={"/portfolio/javascript.png"}
            alt={"javascript image icon"}
          />
        </MySkill>

        <MySkill
          href={"https://react.dev/"}
          offsetX={offsetX}
          offsetY={offsetY}
          inView={inView}
        >
          <SkillTitle>React</SkillTitle>
          <Image src={"/portfolio/react.png"} alt={"react.js image icon"} />
        </MySkill>

        <MySkill
          href={"https://nextjs.org/"}
          offsetX={offsetX}
          offsetY={offsetY}
          inView={inView}
        >
          <SkillTitle>NEXTJS</SkillTitle>
          <Image src={"/portfolio/nextjs.webp"} alt={"next.js image icon"} />
        </MySkill>

        <MySkill
          href={"https://en.wikipedia.org/wiki/HTML"}
          offsetX={offsetX}
          offsetY={offsetY}
          inView={inView}
        >
          <SkillTitle>HTML</SkillTitle>
          <Image src={"/portfolio/html.png"} alt={"html image icon"} />
        </MySkill>

        <MySkill
          href={"https://en.wikipedia.org/wiki/CSS"}
          offsetX={offsetX}
          offsetY={offsetY}
          inView={inView}
        >
          <SkillTitle>CSS</SkillTitle>
          <Image src={"/portfolio/css.png"} alt={"css image icon"} />
        </MySkill>

        <MySkill
          href={"https://en.wikipedia.org/wiki/MongoDB"}
          offsetX={offsetX}
          offsetY={offsetY}
          inView={inView}
        >
          <SkillTitle>MONGODB</SkillTitle>
          <Image src={"/portfolio/mongodb.png"} alt={"mongogdb image icon"} />
        </MySkill>
      </SkillsWrapper>
    </Wrapper>
  );
}

export default Skills;
