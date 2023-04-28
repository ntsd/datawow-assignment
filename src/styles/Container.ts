import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;

  @media (min-width: 1024px) {
    max-width: 768px;
    margin: 3rem auto;
    border-radius: 1rem;
    min-height: unset;
  }
`;

export default Container;
