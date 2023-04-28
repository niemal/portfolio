import styled from "styled-components";
import { useState } from "react";
import { Portal } from "react-portal";
import { AnimatePresence, motion } from "framer-motion";

const BurgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 4px;
`;

const Bar = styled.div`
  width: 40px;
  height: 6px;
  background-color: var(--color-secondary-fade);
  transition: all 0.3s ease-in-out;

  ${(p) =>
    p.first && p.isOpen
      ? `
    transform: rotate(55deg) translateY(100%) translateX(20%);
    background-color: var(--color-secondary);
  `
      : ""}
  ${(p) =>
    p.mid && p.isOpen
      ? `
    opacity: 0;
  `
      : ""}
      ${(p) =>
    p.last && p.isOpen
      ? `
    transform: rotate(-55deg) translateY(-135%) translateX(30%);
    background-color: var(--color-secondary);
  `
      : ""}
`;

const MenuWrapper = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: var(--color-secondary-fade);
  display: grid;
  place-content: center;
  z-index: 10;
`;

const InsideMenuWrapper = styled.div`
  width: 300px;
  height: 300px;

  background: radial-gradient(
    circle at top left,
    var(--color-tertiary),
    var(--color-text),
    var(--color-secondary)
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const MyMenuEntry = styled.a`
  font-family: var(--font-primary);
  font-size: ${40 / 16}rem;
  color: var(--color-secondary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 4px;
  transition: all 0.3s ease-in-out;
  padding: 8px;
`;

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    initial: {
      clipPath: "circle(0% at 50% 50%)",
    },
    loaded: {
      clipPath: "circle(100% at 50% 50%)",
      transition: {
        duration: 0.85,
        ease: "easeOut",
      },
    },
    unloaded: {
      clipPath: "circle(0% at 50% 50%)",
      transition: {
        duration: 0.85,
        ease: "easeOut",
      },
    },
  };

  const menuClicked = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerWrapper
        onClick={() => {
          setIsOpen((o) => !o);
        }}
      >
        <Bar first={true} isOpen={isOpen} />
        <Bar mid={true} isOpen={isOpen} />
        <Bar last={true} isOpen={isOpen} />
      </BurgerWrapper>
      <Portal>
        <AnimatePresence mode={"wait"}>
          <MenuWrapper
            initial="initial"
            animate={isOpen ? "loaded" : "unloaded"}
            variants={menuVariants}
          >
            <InsideMenuWrapper>
              <MyMenuEntry href={"/portfolio#about"} onClick={menuClicked}>
                1. About
              </MyMenuEntry>
              <MyMenuEntry href={"/portfolio#expertise"} onClick={menuClicked}>
                2. Expertise
              </MyMenuEntry>
              <MyMenuEntry href={"/portfolio#skills"} onClick={menuClicked}>
                3. Skills
              </MyMenuEntry>
              <MyMenuEntry href={"/portfolio#projects"} onClick={menuClicked}>
                4. Projects
              </MyMenuEntry>
            </InsideMenuWrapper>
          </MenuWrapper>
        </AnimatePresence>
      </Portal>
    </>
  );
}

export default MobileMenu;
