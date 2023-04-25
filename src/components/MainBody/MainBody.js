import styled from "styled-components";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundDecor from "../BackgroundDecor";
import TopSection from "../TopSection";
import Skills from "../Skills";
import Expertise from "../Expertise";
import ScrollFromHero from "../ScrollFromHero";
import Projects from "../Projects";
import Menu from "../Menu";
import SideDecor from "../SideDecor";
import Footer from "../Footer";

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-primary);
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const TopHeroWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
`;

function MainBody() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onWindowScroll = () => {
      if (window.scrollY > 250) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <Wrapper role={"main"}>
      <Menu />
      <SideDecor />
      <BackgroundDecor />
      <ContentWrapper>
        <TopHeroWrapper>
          <TopSection />
          <AnimatePresence mode={"wait"}>
            {showScroll ? <ScrollFromHero /> : ""}
          </AnimatePresence>
        </TopHeroWrapper>
        <Expertise />
        <Skills />
        <Projects />
        <Footer />
      </ContentWrapper>
    </Wrapper>
  );
}

export default MainBody;
