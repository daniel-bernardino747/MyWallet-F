import styled from 'styled-components';
import COLOR from '../../constants/colors';

export const Forms = styled.form`
  width: 17.5em;

  input {
    margin-bottom: 0.7em;
  }
`;
export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonSubmit = styled.input.attrs({ type: 'submit' })`
  width: 10em;
  height: 3em;
  border: none;
  border-radius: 0.3em;
  color: ${COLOR.WHITE};
  font-weight: 700;
  background-color: ${COLOR.LIGHT_PURPLE};

  &&:hover {
    background-color: ${COLOR.GREEN};
  }
`;

export const ButtonExit = styled.input.attrs({ type: 'button' })`
  width: 10em;
  height: 3em;
  border: none;
  border-radius: 0.3em;
  color: ${COLOR.WHITE};
  font-weight: 700;
  background-color: ${COLOR.LIGHT_PURPLE};

  &&:hover {
    background-color: ${COLOR.RED};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 17.5em;
  p {
    margin-bottom: 1em;
    font-weight: 700;
    color: ${COLOR.WHITE};
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.text,
}))`
  width: 21em;
  height: 3.5em;
  padding: 0 0.5em;
  border: ${(props) => (props.error ? '0.0625em solid red;' : 'none;')};
  border-radius: 0.3em;
  color: #000;

  &&::placeholder {
    color: rgba(0, 0, 0, 1);
  }
`;
export const InputNumber = styled.input.attrs((props) => ({
  type: 'number',
  placeholder: props.text,
}))`
  width: 21em;
  height: 3.5em;
  padding: 0 0.5em;
  border: ${(props) => (props.error ? '0.0625em solid red;' : 'none;')};
  border-radius: 0.3em;
  color: #000;

  &&::placeholder {
    color: rgba(0, 0, 0, 1);
  }
`;
