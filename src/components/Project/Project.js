import styled, { css } from "styled-components";
import { hoverSupported } from "../hoverSupported";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { QUERIES } from "../constants";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 64px;
  align-items: flex-start;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 24px;
  }
`;

const ProjectImageContainer = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: 250px;
  height: 250px;
  background-color: var(--color-secondary-fade);
  display: grid;
  place-content: center;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      opacity: 1;
    }
  `)}

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const InsideContainer = styled.div`
  width: 220px;
  height: 220px;
  display: grid;
  place-content: center;
  background: radial-gradient(
    circle at center,
    var(--color-primary),
    var(--color-secondary),
    var(--color-tertiary),
    var(--color-primary)
  );
  border-radius: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    ${ProjectImageContainer}:hover & {
      transform: scale(1.2) rotate(-30deg);
    }
  `)}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--color-text);
  width: 500px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    padding: 12px;
  }
`;

const NameTitle = styled.h2`
  font-family: var(--font-secondary);
  font-size: ${52 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const TabletTopRow = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 12px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    align-items: center;
  }
`;

const TabletProjectImageContainer = styled(ProjectImageContainer)`
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
  }
`;

const TabletNameTitle = styled(NameTitle)`
  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    color: var(--color-text);
    line-height: ${52 / 16}rem;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  color: inherit;
  align-items: baseline;
  line-height: ${24 / 16}rem;
  margin-top: -12px;
  max-width: 100%;
`;

const RowIntro = styled.span`
  font-family: var(--font-primary);
  font-size: ${24 / 16}rem;
  line-height: ${32 / 16}rem;
  color: inherit;
  opacity: 0.6;
`;

const RowValue = styled.p`
  font-family: var(--font-secondary);
  letter-spacing: 0.8px;
  font-size: ${24 / 16}rem;
  line-height: ${32 / 16}rem;
  color: inherit;
  font-style: italic;
  transition: all 0.4s ease-in-out;

  ${(p) =>
    !p.more
      ? `
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  `
      : ""}
`;

const fadeInOut = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const Link = styled.a`
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 3px;
  color: inherit;
  font-family: var(--font-secondary);
  transition: all 0.3s ease-in-out;
  width: max-content;
  ${hoverSupported(css`
    &:hover {
      color: var(--color-tertiary);
    }
  `)}
`;

const MoreBall = styled.div`
  align-self: flex-end;
  margin-top: -40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: var(--color-white-fade);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 0.7;

  ${hoverSupported(css`
    &:hover {
      box-shadow: 1px 1px 5px 0px hsla(57, 77%, 75%, 0.15),
        -1px -1px 5px 0px hsla(57, 77%, 75%, 0.1),
        inset 0px 0px 5px 0px hsla(57, 77%, 75%, 0.05);
    }
  `)}
`;

const MoreDecor = styled.div`
  display: grid;
  place-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    var(--color-secondary),
    var(--color-primary),
    var(--color-text)
  );
`;

const MoreValue = styled.span`
  font-size: ${32 / 16}rem;
  user-select: none;
  transition: all 0.3s ease-in-out;
  transform: rotate(${(p) => (!p.more ? "90" : "-90")}deg);
  color: var(--color-text);

  ${hoverSupported(css`
    ${MoreBall}:hover & {
      color: var(--color-tertiary);
    }
  `)}
`;

const LanguagesWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const LanguageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(
    circle at top left,
    var(--color-text),
    var(--color-tertiary)
  );
  display: grid;
  place-content: center;
`;

const LanguageImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

function Project({ project, ...props }) {
  const [topRef, isInView] = useInView({ triggerOnce: true });
  const detailsRef = useRef(null);
  const imageRef = useRef(null);
  const [more, setMore] = useState(false);

  const animation = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : 60 },
    exit: { opacity: 0, x: -60 },
    transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
  };

  return (
    <Wrapper ref={topRef} {...animation} {...props}>
      <ProjectImageContainer
        ref={imageRef}
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InsideContainer>
          <Image src={project.image} alt={`${project.name} image link`} />
        </InsideContainer>
      </ProjectImageContainer>

      <TabletTopRow>
        <TabletProjectImageContainer
          ref={imageRef}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InsideContainer>
            <Image src={project.image} alt={`${project.name} image link`} />
          </InsideContainer>
        </TabletProjectImageContainer>
        <TabletNameTitle>
          <Link href={project.live} target="_blank" rel="noopener noreferrer">
            {project.name}
          </Link>
        </TabletNameTitle>
      </TabletTopRow>
      <TextWrapper>
        <NameTitle>
          <Link href={project.live} target="_blank" rel="noopener noreferrer">
            {project.name}
          </Link>
        </NameTitle>
        <Row style={{ alignSelf: "flex-end" }}>
          <Link href={project.code} target="_blank" rel="noopener noreferrer">
            <RowIntro>Code</RowIntro>
          </Link>
        </Row>
        <Row>
          <RowIntro>Web-design:</RowIntro>
          <RowValue>{project.webdesign}</RowValue>
        </Row>
        <Row ref={detailsRef} style={{ marginTop: "-32px" }}>
          <RowIntro>Details:</RowIntro>{" "}
          <motion.div
            key={`description-${more}`}
            initial="hidden"
            animate={"visible"}
            exit="exit"
            variants={fadeInOut}
            transition={{ duration: 0.6 }}
          >
            <RowValue more={more}>{project.description}</RowValue>
          </motion.div>
        </Row>
        <MoreBall
          onClick={() => {
            setMore((m) => {
              if (m) {
                imageRef.current.scrollIntoView({ behavior: "smooth" });
              } else {
                detailsRef.current.scrollIntoView({ behavior: "smooth" });
              }

              return !m;
            });
          }}
        >
          <MoreDecor>
            <MoreValue more={more}>&gt;</MoreValue>
          </MoreDecor>
        </MoreBall>

        <Row style={{ alignItems: "center" }}>
          <RowIntro>Languages:</RowIntro>
          <LanguagesWrapper>
            {project.languages.map((lang, index) => (
              <LanguageContainer key={`${project.name}-${lang}-${index}`}>
                <LanguageImage
                  src={`/portfolio/${
                    lang !== "nextjs" ? `${lang}.png` : "nextjs.webp"
                  }`}
                  alt={`${lang} image icon`}
                />
              </LanguageContainer>
            ))}
          </LanguagesWrapper>
        </Row>
      </TextWrapper>
    </Wrapper>
  );
}

export default Project;
