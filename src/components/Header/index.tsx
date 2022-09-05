import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

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
