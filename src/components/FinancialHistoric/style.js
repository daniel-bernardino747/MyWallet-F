import styled from 'styled-components';
import COLOR from '../../constants/colors';

export const ScrollBar = styled.div`
  height: 26em;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.1em;
  }
`;
export const Movement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2em;
  padding: 0 0.5em;
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
`;
export const Time = styled.p`
  color: ${COLOR.LIGHT_GREY};
`;
export const Description = styled.p`
  margin: 0.3em 1em;
`;
export const Value = styled.p`
  color: ${(props) => (props.type ? COLOR.GREEN : COLOR.RED)};
`;
export const Result = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  min-width: 20em;
  margin: 0.5em;
`;
export const Label = styled.p`
  font-weight: 700;
`;
export const Box = styled.div`
  display: flex;
  gap: 0.5em;
`;
export const DeleteButton = styled.div`
  border: none;
  color: ${COLOR.LIGHT_GREY};
  cursor: pointer;
  background-color: none;
  &&:hover {
    color: red;
  }
`;
