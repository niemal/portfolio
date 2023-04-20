import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-primary);
`;

function MainBody() {
  return <Wrapper role={"main"}></Wrapper>;
}

export default MainBody;
