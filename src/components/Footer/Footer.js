import styled from "styled-components";
import { BubbleTwo, BubbleTwoContent } from "../MenuDecor";
import { QUERIES } from "../constants";

const Wrapper = styled.footer`
  margin-top: auto;
  width: max-content;
  align-self: flex-end;
  margin-right: 32px;
  padding-top: 160px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndSmaller} {
    margin-right: 64px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 80px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: baseline;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 0px;
  }
`;

const Intro = styled.p`
  font-family: var(--font-secondary);
  font-size: ${32 / 16}rem;
  color: var(--color-text-fade);
`;

const Energy = styled.span`
  font-family: var(--font-primary);
  font-size: ${42 / 16}rem;
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--color-secondary-fade),
    var(--color-text),
    var(--color-tertiary)
  );
  -webkit-background-clip: text;
  background-clip: text;
  padding-right: 12px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: -60px;
  }
`;

const BubbleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
  align-self: flex-end;
`;

const BubbleLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

const BubbleTop = styled(BubbleLeft)`
  top: 80px;
  left: 0px;
  transform: rotate(-55deg);
`;

const BubbleRight = styled.div`
  position: absolute;
  right: -78px;
  top: 30px;
  transform: rotate(90deg);
`;

function Footer() {
  return (
    <Wrapper>
      <BubbleWrapper>
        <BubbleLeft>
          <BubbleTwo style={{ scale: 0.6 }}>
            <BubbleTwoContent />
          </BubbleTwo>
        </BubbleLeft>
        <BubbleTop>
          <BubbleTwo style={{ scale: 0.9 }}>
            <BubbleTwoContent />
          </BubbleTwo>
        </BubbleTop>
        <BubbleRight>
          <BubbleTwo style={{ scale: 1.6 }}>
            <BubbleTwoContent />
          </BubbleTwo>
        </BubbleRight>
      </BubbleWrapper>
      <TextWrapper>
        <Intro>Web design inspired by</Intro>
        <Energy>Brain Energy.</Energy>
      </TextWrapper>
    </Wrapper>
  );
}

export default Footer;
