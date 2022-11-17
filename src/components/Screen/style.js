import styled from 'styled-components';
import COLOR from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  width: 21em;
  height: 28em;
  border-radius: 0.3em;
  background-color: ${COLOR.WHITE};
`;
export const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${COLOR.LIGHT_GREY};
  font-weight: 700;
`;
