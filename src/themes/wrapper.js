import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 3vh;

  @media (max-width: 600px) {
    padding-top: 0;
    width: 100vw;
  }
`;

export default Wrapper;
