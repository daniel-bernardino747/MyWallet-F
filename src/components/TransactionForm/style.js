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
  border: none;
  border-radius: 0.3em;
  color: ${COLOR.WHITE};
  font-weight: 700;
  background-color: ${COLOR.LIGHT_PURPLE};
`;

const Label = styled.label`
  display: flex;
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.text,
}))`
  width: 21em;
  height: 3.5em;
  padding: 0 0.5em;
  border: none;
  border-radius: 0.3em;
  color: #000;

  &&::placeholder {
    color: rgba(0, 0, 0, 1);
  }
`;

export {
  Forms, ButtonSubmit, Input, Label,
};
