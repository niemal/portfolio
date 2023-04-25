import styled from "styled-components";
import { motion } from "framer-motion";
import { QUERIES } from "../constants";

const Wrapper = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  width: ${(p) => {
    switch (p.size) {
      case "big":
        return "400";
      case "medium":
        return "250";
      default:
        return "100";
    }
  }}px;
  height: ${(p) => {
    switch (p.size) {
      case "big":
        return "400";
      case "medium":
        return "250";
      default:
        return "100";
    }
  }}px;
  background: radial-gradient(
    circle at top left,
    var(--color-primary),
    var(--color-secondary),
    var(--color-tertiary)
  );
  border: 4px solid var(--color-primary-fade);

  ${(p) =>
    !p.bottom
      ? `
  ${p.size === "medium" ? "margin-top: -120px;" : ""}
  ${!p.size ? "margin-top: -280px;" : ""}
  `
      : `
      ${
        p.size === "medium"
          ? `
      position: absolute;
      bottom: 60px;
      right: -120px;
      `
          : ""
      }
      ${
        !p.size
          ? `
      position: absolute;
      bottom: 280px;
      right: 24px;
      `
          : ""
      }
      `}

  @media ${QUERIES.phoneAndSmaller} {
    width: ${(p) => {
      switch (p.size) {
        case "big":
          return "200";
        case "medium":
          return "150";
        default:
          return "50";
      }
    }}px;
    height: ${(p) => {
      switch (p.size) {
        case "big":
          return "200";
        case "medium":
          return "150";
        default:
          return "50";
      }
    }}px;

    ${(p) =>
      !p.bottom
        ? `
  ${p.size === "medium" ? "margin-top: -40px;" : ""}
  ${!p.size ? "margin-top: -180px;" : ""}
  `
        : `
      ${
        p.size === "medium"
          ? `
      position: absolute;
      bottom: 60px;
      right: -120px;
      `
          : ""
      }
      ${
        !p.size
          ? `
      position: absolute;
      bottom: 280px;
      right: 24px;
      `
          : ""
      }
      `}
  }
`;

function Bubble({ size, animation, bottom, ...props }) {
  return <Wrapper size={size} bottom={bottom} {...animation} {...props} />;
}

export default Bubble;
