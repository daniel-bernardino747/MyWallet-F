import styled from 'styled-components';
import COLOR from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 21em;
  gap: 0.5em;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10em;
  height: 7em;
  margin: 1em 0;
  border-radius: 0.3em;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.LIGHT_PURPLE};
  &&:hover {
    width: 12em;
    background-color: ${COLOR.PINK};
  }
`;

export const Icon = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin: 0.5em;
`;

export const TextAction = styled.p`
  width: 1em;
  margin: 0.5em;
  font-weight: 700;
  line-height: 1.3em;
`;
