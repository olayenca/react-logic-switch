import PropTypes from 'prop-types';

export default function Default({ children }) {
  return children;
}

Default.propTypes = {
  children: PropTypes.node
};

Default.isDefaultComponent = true;