import styled from 'styled-components';
import COLOR from '../../constants/colors';

const Title = styled.div`
  font-family: 'Saira Stencil One', cursive;
  font-size: 32px;
  line-height: 50px;
  color: ${COLOR.WHITE};
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.text,
}))`
  width: 21em;
  height: 3.5em;
  border: none;
  border-radius: 0.3em;
  color: #000;
  padding: 0 0.5em;

  &&::placeholder {
    color: rgba(0, 0, 0, 1);
  }
`;

const Label = styled.label`
  display: flex;
`;

const SignUp = styled.p`
  color: ${COLOR.WHITE};
  font-weight: 700;
  text-align: center;
  font-size: 0.8em;
`;

export {
  Title, Input, Label, SignUp,
};
