import PropTypes from 'prop-types';
import { Container, Welcome } from './style';

export default function Header({ children }) {
  const justTitle = typeof children === 'string';
  const content = (!justTitle)
    ? { h1: children[0], header: children.slice(1) }
    : { h1: '', header: '' };

  return (
    <Container>
      {justTitle ? (
        <Welcome>{children}</Welcome>
      ) : (
        <>
          <Welcome>{content.h1}</Welcome>
          {content.header}
        </>
      )}
    </Container>
  );
}
Header.propTypes = {
  children: PropTypes.any,
};
