import IconPlus from '../../assets/plus-circle.svg';
import IconMinus from '../../assets/minus-circle.svg';
import {
  Container, Button, Icon, TextAction,
} from './style';

export default function FinancialServices() {
  return (
    <Container>
      <Button>
        <Icon src={IconPlus} />
        <TextAction>Nova Entrada</TextAction>
      </Button>
      <Button>
        <Icon src={IconMinus} />
        <TextAction>Nova Saída</TextAction>
      </Button>
    </Container>
  );
}
