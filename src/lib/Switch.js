import React from 'react';
import PropTypes from 'prop-types';

const isCaseComponent = element => element.type.isCaseComponent;
const isDefaultComponent = element => element.type.isDefaultComponent;

function isAllowedChild(child) {
  return isCaseComponent(child) || isDefaultComponent(child);
}

function isCaseComponents({ children }, propName, componentName) {
  let error = null;
  let containsDefault = false;
  React.Children.forEach(children, child => {
    if (!isAllowedChild(child)) {
      error = new Error(
        `${componentName} children should be of type 'Case' or 'Default'. Received ${child.type}`
      );
    } else if (isDefaultComponent(child)) {
      if (containsDefault) {
        error = new Error(
          `${componentName} expected exactly one Default as a child. Received too many.`
        );
      }
      containsDefault = true;
    }
  });
  if (!containsDefault) {
    error = new Error(
      `${componentName} expected exactly one Default as a child. Received zero.`
    );
  }
  return error;
}

function isMatchFor(arg) {
  return caseComponent =>
    caseComponent.props.match === arg ||
    (caseComponent.props.test && caseComponent.props.test(arg));
}

const experimentalVariation = (children, arg) =>
  children.filter(isCaseComponent).find(isMatchFor(arg));

const defaultVariation = variations => variations.find(isDefaultComponent);

export default function Switch({ children, arg }) {
  const cases = React.Children.toArray(children);
  return React.Children.only(
    experimentalVariation(cases, arg) || defaultVariation(cases)
  );
}

Switch.propTypes = {
  children: isCaseComponents,
  arg: PropTypes.any,
};
