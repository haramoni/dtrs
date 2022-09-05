import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import * as S from "./styles";
import Modal from "react-modal";

interface IHeader {
  openModalTransactions: () => void;
}

export const Header = (props: IHeader) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={props.openModalTransactions}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
};
