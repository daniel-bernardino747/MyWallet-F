import styled from 'styled-components';
import COLOR from '../../constants/colors';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(21em, 100vw);
  height: 5em;
`;

const Welcome = styled.h1`
  color: ${COLOR.WHITE};
  font-weight: 700;
  font-size: 1.5em;
`;

export { Container, Welcome };
