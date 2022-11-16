import PropTypes from 'prop-types';
import { Container, Welcome } from './style';

export default function Header({ children }) {
  const justTitle = typeof children === 'string';
  let h1Page;
  let headerContent;

  if (!justTitle) {
    h1Page = children[0];
    headerContent = children.slice(1);
  }
  return (
    <Container>
      {justTitle ? (
        <Welcome>{children}</Welcome>
      ) : (
        <>
          <Welcome>{h1Page}</Welcome>
          {headerContent}
        </>
      )}
    </Container>
  );
}
Header.propTypes = {
  children: PropTypes.any,
};
