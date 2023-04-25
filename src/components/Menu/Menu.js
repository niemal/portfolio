import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { hoverSupported } from "../hoverSupported";
import useFirstRender from "../useFirstRender";
import MenuDecor from "../MenuDecor";
import MobileMenu from "../MobileMenu";
import { QUERIES } from "../constants";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 40px;
  left: 0;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: var(--color-secondary);
  transition: all 0.8s ease-in-out;
  ${(p) => (p.firstRender ? "visibility: hidden;" : "")}

  box-shadow: 1px 1px 5px 0px hsla(57, 77%, 75%, 0.15),
    -1px -1px 5px 0px hsla(57, 77%, 75%, 0.1),
    inset 0px 0px 5px 0px hsla(57, 77%, 75%, 0.05);

  @media ${QUERIES.exclusiveWidth1} {
    left: -160px;
  }
  @media ${QUERIES.exclusiveWidth2} {
    left: -185px;
  }
  @media ${QUERIES.exclusiveWidth3} {
    width: 100px;
    height: 100px;
    left: -120px;
  }
`;

const InsideWrapper = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background: radial-gradient(
    circle at bottom right,
    var(--color-tertiary),
    var(--color-text),
    var(--color-secondary)
  );

  @media ${QUERIES.exclusiveWidth3} {
    width: 80px;
    height: 80px;
  }
`;

const InsideFade = styled.div`
  width: 188px;
  height: 188px;
  border-radius: 50%;
  background-color: var(--color-white-fade);

  @media ${QUERIES.exclusiveWidth3} {
    width: 60px;
    height: 60px;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  @media ${QUERIES.exclusiveWidth3} {
    display: grid;
    place-content: center;
  }
`;

const MenuEntry = styled.a`
  font-family: var(--font-primary);
  font-size: ${22 / 16}rem;
  color: var(--color-secondary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 4px;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-tertiary);
    }
  `)}
`;

function Menu() {
  const firstRender = useFirstRender();
  const [showMenu, setShowMenu] = useState(false);
  const isExclusiveWidth3 = useMediaQuery({
    query: QUERIES.exclusiveWidth3,
  });
  const isPhone = useMediaQuery({
    query: QUERIES.phoneAndSmaller,
  });

  const variants = {
    hidden: { opacity: 0, x: -100, scale: 0.6 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 100,
      rotate: 360,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    const onWindowScroll = () => {
      if (
        (window.scrollY > 250 && !isPhone) ||
        (window.scrollY > 450 && isPhone)
      ) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <AnimatePresence mode={"wait"}>
      <Wrapper
        variants={variants}
        animate={showMenu ? "visible" : "hidden"}
        firstRender={firstRender}
      >
        <MenuDecor />
        <MenuWrapper>
          {!isExclusiveWidth3 ? (
            <>
              <MenuEntry href={"/portfolio#about"}>1. About</MenuEntry>
              <MenuEntry href={"/portfolio#expertise"}>2. Expertise</MenuEntry>
              <MenuEntry href={"/portfolio#skills"}>3. Skills</MenuEntry>
              <MenuEntry href={"/portfolio#projects"}>4. Projects</MenuEntry>
            </>
          ) : (
            <MobileMenu />
          )}
        </MenuWrapper>
        <InsideWrapper>
          <InsideFade />
        </InsideWrapper>
      </Wrapper>
    </AnimatePresence>
  );
}

export default Menu;
