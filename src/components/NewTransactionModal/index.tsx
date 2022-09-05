import Modal from "react-modal";
import { ButtonContainer, Container, CustomButton } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface INewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: INewTransactionModal) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    console.log(data);
    api.post("/transactions", data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={onRequestClose}
        className="react-modal-close"
        type="button"
      >
        <img src={closeImg} alt="FechmarModal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transacao</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <ButtonContainer>
          <CustomButton
            isActive={type === "deposit"}
            type="button"
            onClick={() => setType("deposit")}
            activeColor="green"
          >
            <img src={incomeImg} alt="icone entrada" />
            <span>Entrada</span>
          </CustomButton>

          <CustomButton
            isActive={type === "withdraw"}
            type="button"
            onClick={() => setType("withdraw")}
            activeColor="red"
          >
            <img src={outcomeImg} alt="icone saida" />
            <span>Saida</span>
          </CustomButton>
        </ButtonContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
