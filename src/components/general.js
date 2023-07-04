import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HalfContainer = styled.section`
  width: 100%;
  height: 65vh;
  position: relative;
`;

const CanvasContainer = styled.div`
  background-color: black;
  display: flex;
  max-width: ${ ({ isWideScreen }) => (isWideScreen ? '1920px' :'100%') };
  margin: 0 auto;
}`;

const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 2rem;
`

export { Container, HalfContainer, CanvasContainer, Divider };
