import styled from 'styled-components';
import COLOR from '../../constants/colors';

const Forms = styled.form`
  input {
    margin-bottom: 0.7em;
  }
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const ButtonSubmit = styled.input.attrs({ type: 'submit' })`
  width: 21em;
  height: 3em;
  border: none;
  border-radius: 0.3em;
  color: ${COLOR.WHITE};
  font-weight: 700;
  background-color: ${COLOR.LIGHT_PURPLE};
  cursor: pointer;
  &&:hover {
    width: 20em;
    background-color: ${COLOR.PINK};
  }
`;

const Title = styled.h1`
  margin-bottom: 0.75em;
  color: ${COLOR.WHITE};
  font-size: 2em;
  font-family: 'Saira Stencil One', cursive;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
`;

const SignUp = styled.p`
  margin: 1.5em 0;
  color: ${COLOR.WHITE};
  font-weight: 700;
  font-size: 0.8em;
  text-align: center;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: props.detail,
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
  Forms, ButtonSubmit, Title, Input, Label, SignUp,
};
