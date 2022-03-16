import styled from "styled-components";
import { darken } from "polished"; // Biblioteca com diversas funções do js para manipulação de cores

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: #e9e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    background: var(--green);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 0.5rem;
  margin: 1rem 0;
`;

interface TypeButtonProps {
  isActive: boolean;
}

export const TypeButton = styled.button<TypeButtonProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => (props.isActive ? "#eee" : "transparent")};
  //Quando passamos uma função dentro de uma interpolação automaticamente o styled-components passa todas as propriedades para ela

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
