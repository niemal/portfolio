import styled, { css } from "styled-components";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column-reverse;
    padding-top: 24px;
    gap: 16px;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`;

const SocialContainer = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--color-secondary-fade);
  transition: all 0.3s ease-in-out;
  opacity: 0.5;

  ${hoverSupported(css`
    &:hover {
      opacity: 1;
    }
  `)}
`;

const SocialImage = styled(motion.img)`
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
`;

const TextIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled(motion.h1)`
  font-size: ${48 / 16}rem;
  color: var(--color-text);
`;

const Name = styled(motion.a)`
  font-family: var(--font-primary);
  color: var(--color-text);
  font-size: ${72 / 16}rem;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-tertiary);
    }
  `)}
`;

const PictureContainer = styled(motion.a)`
  text-decoration: none;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    var(--color-tertiary),
    var(--color-secondary),
    var(--color-primary)
  );
  width: 300px;
  height: 300px;
  display: grid;
  place-content: center;
  position: relative;
  overflow: hidden;
  border: 8px solid var(--color-primary-fade);
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid var(--color-text);
  object-fit: cover;
  width: 100%;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    ${PictureContainer}:hover & {
      transform: scale(1.1) rotate(20deg);
      border-color: var(--color-tertiary);
    }
  `)}
`;

const ImageFade = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  background: radial-gradient(
    circle at top left,
    transparent 20%,
    var(--color-primary-fade)
  );

  ${hoverSupported(css`
    ${PictureContainer}:hover & {
      transform: translate(-50%, -50%) scale(1.5) rotate(120deg);
    }
  `)}
`;

const DescIntro = styled(motion.p)`
  font-size: ${24 / 16}rem;
  line-height: ${32 / 16}rem;
  color: var(--color-text);
  letter-spacing: 1px;
  max-width: 666px;
  margin: 0 auto;
  opacity: 0.7;

  @media ${QUERIES.phoneAndSmaller} {
    max-width: 100%;
    padding: 0px 12px;
  }
`;

function TopSection() {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageControls, imageInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      scale: [1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2,
        delay: 1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: [1.4, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Wrapper id={"about"}>
      <IntroWrapper>
        <TextIntroWrapper>
          <Title
            variants={textVariants}
            initial="hidden"
            animate={textControls}
          >
            Hello! I am{" "}
            <Name
              href={"https://niemal.dev/"}
              variants={textVariants}
              initial="hidden"
              animate={textControls}
            >
              Nick!
            </Name>
          </Title>
          <SocialsWrapper>
            <SocialContainer
              href={"https://twitter.com/niemal_dev"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <SocialImage
                src={"/portfolio/twitter.svg"}
                alt={"twitter icon image"}
              />
            </SocialContainer>
            <SocialContainer
              href={"https://www.frontendmentor.io/profile/niemal"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <SocialImage
                style={{ borderRadius: "50%" }}
                src={"/portfolio/frontendmentor.jpg"}
                alt={"frontendmentor icon image"}
              />
            </SocialContainer>
            <SocialContainer
              href={"https://www.fiverr.com/nickchatzit"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <SocialImage
                style={{ borderRadius: "50%" }}
                src={"/portfolio/fiverr.png"}
                alt={"fiverr icon image"}
              />
            </SocialContainer>
            <SocialContainer
              href={"https://www.linkedin.com/in/nick-chatzitsakyris-597a8326b"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <SocialImage
                src={"/portfolio/linkedin.png"}
                alt={"linkedin icon image"}
              />
            </SocialContainer>
            <SocialContainer
              href={"https://github.com/niemal/"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <SocialImage
                src={"/portfolio/github.svg"}
                alt={"github icon image"}
              />
            </SocialContainer>
          </SocialsWrapper>
        </TextIntroWrapper>
        <PictureContainer
          ref={imageRef}
          href={"https://github.com/niemal/"}
          target={"_blank"}
          rel="noopener noreferrer"
          variants={imageVariants}
          initial="hidden"
          animate={imageControls}
        >
          <Image src={"/portfolio/profile.png"} alt={"profile picture"} />
          <ImageFade />
        </PictureContainer>
      </IntroWrapper>

      <DescIntro
        ref={textRef}
        variants={textVariants}
        initial="hidden"
        animate={textControls}
      >
        I am an energetic 29 year old male individual from Thessaloniki, Greece.
        With over 5 years of hobby programming experience, I have recently set
        my focus on full-stack web development and aim to make a career in the
        professional field. By prioritizing clean, maintainable, and scalable
        code to ensure that my projects can evolve seamlessly over time I am
        well-versed in responsive design, optimizing for performance, and
        ensuring accessibility for all users.
      </DescIntro>
    </Wrapper>
  );
}

export default TopSection;
