import styled from 'styled-components';
import COLOR from '../../constants/colors';

const Container = styled.div`
  position: relative;
  width: 21em;
  height: 28em;
  border-radius: 0.3em;
  background-color: ${COLOR.WHITE};
`;

const ScrollBar = styled.div`
  height: 26em;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.1em;
  }
`;

const Movement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2em;
  padding: 0 0.5em;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.p`
  color: ${COLOR.LIGHT_GREY};
`;
const Description = styled.p`
  margin: 0.3em 1em;
`;
const Value = styled.p`
  color: ${(props) => (props.type ? COLOR.GREEN : COLOR.RED)};
`;

const Result = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  min-width: 20em;
  margin: 0.5em;
`;

const Label = styled.p`
  font-weight: 700;
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${COLOR.LIGHT_GREY};
  font-weight: 700;
`;

export {
  Container, Movement, Details, Time, Description, Value, Result, Label, ScrollBar, Alert,
};
