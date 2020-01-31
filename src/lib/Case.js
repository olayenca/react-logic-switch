/* Copyright 2020 Elsevier */
import PropTypes from 'prop-types';

export default function Case({ children }) {
  return children;
}

function casePropType(props, propName, componentName) {
  if (props.test && props.match) {
    return new Error(
      `${componentName} accepts either "test" or "match" props. Received both.`
    );
  }
  if (props.test) {
    if (typeof props.test !== 'function') {
      return new Error(
        `${componentName} test prop type expected a function. Value was ${props.test}`
      );
    }
    return null;
  }
  if (props.match === undefined) {
    return new Error(
      `${componentName} expected either "test" or "match" to be defined`
    );
  }
  return null;
}

Case.propTypes = {
  children: PropTypes.node,
  test: casePropType,
  match: casePropType,
};

Case.isCaseComponent = true;
