import styled from "styled-components";
import ConnectorBubble from "../ConnectorBubble";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { QUERIES } from "../constants";
import { useMediaQuery } from "react-responsive";

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
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    gap: 16px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`;

const LeftDecor = styled.div`
  position: absolute;
  left: 80px;
  top: -40px;
  width: 720px;
  height: 100px;

  & svg {
    width: 720px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: left center;
    transition: transform 4.5s;
    transform: scaleX(1);
  }

  & path {
    stroke-dasharray: 2000;
    stroke-dashoffset: ${(p) => (p.inView ? "0" : "2000")};
    transition: stroke-dashoffset 4.5s;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const RightDecor = styled(LeftDecor)`
  top: 100px;
  left: -650px;
  & svg {
    transform: rotate(180deg) scaleX(1);
    transform-origin: right center;
  }
`;

const SkillContainer = styled.div`
  width: 150px;
  height: 150px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  background: radial-gradient(
    circle at top left,
    var(--color-tertiary),
    var(--color-primary),
    var(--color-secondary)
  );
`;

const OtherSkillContainer = styled(SkillContainer)`
  background: radial-gradient(
    circle at top left,
    var(--color-secondary),
    var(--color-primary),
    var(--color-tertiary)
  );
`;

const OpacityBubble = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: var(--color-white-fade);
`;

const SkillImage = styled.img`
  object-fit: contain;
  width: 60px;
  height: 60px;
`;

const MainText = styled.h2`
  font-size: ${72 / 16}rem;
  font-family: var(--font-secondary);
  color: var(--color-text);

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${32 / 16}rem;
    width: max-content;
  }
`;

function Expertise() {
  const [expRef, isInView] = useInView({ triggerOnce: true, delay: 0.5 });
  const isTablet = useMediaQuery({
    query: QUERIES.tabletAndSmaller,
  });

  const animation = {
    initial: { opacity: 0, x: 60, y: -60 },
    animate: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : 60,
      y: isInView ? 0 : -60,
    },
    exit: { opacity: 0, x: -60 },
    transition: { delay: 0.5, duration: 1.8, ease: "easeInOut" },
  };

  return (
    <Wrapper id={"expertise"} ref={expRef}>
      <ConnectorBubble>EXPERTISE</ConnectorBubble>

      <ContentWrapper {...animation}>
        <LeftDecor inView={isInView}>
          <svg viewBox={"0 0 900 100"} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,100 Q450,0 900,100"
              fill="none"
              stroke="#f0eb8e"
              stroke-width="4"
            />
            <path
              d="M855,90 L900,100 L855,110"
              fill="none"
              stroke="#f0eb8e"
              stroke-width="6"
              transform={"rotate(11 900 100)"}
            />
          </svg>
        </LeftDecor>

        <RightDecor inView={isInView}>
          <svg viewBox={"0 0 900 100"} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,100 Q450,0 900,100"
              fill="none"
              stroke="#f0eb8e"
              stroke-width="4"
            />
            <path
              d="M855,90 L900,100 L855,110"
              fill="none"
              stroke="#f0eb8e"
              stroke-width="6"
              transform={"rotate(11 900 100)"}
            />
          </svg>
        </RightDecor>

        <SkillContainer>
          <OpacityBubble>
            <SkillImage src={"/portfolio/folder.svg"} alt={"back-end image"} />
          </OpacityBubble>
        </SkillContainer>

        <MainText>Full-stack Web Development</MainText>

        <OtherSkillContainer>
          <OpacityBubble>
            <SkillImage src={"/portfolio/code.svg"} alt={"front-end image"} />
          </OpacityBubble>
        </OtherSkillContainer>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Expertise;
