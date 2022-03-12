import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;

    color: #fff;
    background: var(--blue-light);

    border: 0;
    border-radius: 0.25rem;

    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      //Tag do css bem legal para aplicarmos algumas coisas como blur, opacidade, dropshadow...
      filter: brightness(0.9);
    }
  }
`;
