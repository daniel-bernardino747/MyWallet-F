import styled from 'styled-components';
import COLOR from '../../constants/colors';

const Forms = styled.form`
  input {
    margin-bottom: 0.7em;
  }
`;

const ButtonSubmit = styled.input.attrs({ type: 'submit' })`
  width: 21em;
  height: 3em;
  background-color: ${COLOR.LIGHT_PURPLE};
  border-radius: 0.3em;
  border: none;
  color: ${COLOR.WHITE};
  font-weight: 700;
`;

export { Forms, ButtonSubmit };
