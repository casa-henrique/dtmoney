import { useState } from "react";
import Modal from "react-modal";

import { Container, TransactionTypeContainer, TypeButton } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-close-modal"
      >
        <img src={closeImg} alt="Fechar o modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type == "deposit"} //Propriedade que iremos passar pro componente do styled-componentes
            activeColor='green'
            //para mudar a classe do elemento podemos usar className={ type == 'deposit' ? 'active' : ''}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TypeButton>

          <TypeButton
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type == "withdraw"}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
