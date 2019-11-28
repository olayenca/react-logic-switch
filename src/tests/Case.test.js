import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import expect from 'expect';

import Case from '../lib/Case';

describe(__filename, () => {
  it('renders children', () => {
    const staticMarkup = render(
      <Case match="">
        <div>Hello</div>
      </Case>
    );
    expect(staticMarkup).toEqual('<div>Hello</div>');
  });
  describe('PropTypes', () => {
    it('Allows a test function', () => {
      const props = {
        test: () => {},
      };
      const err = Case.propTypes.test(props, undefined, 'Case');
      expect(err).toEqual(null);
    });
    it('Allows a match value', () => {
      const props = {
        match: 'A',
      };
      const err = Case.propTypes.match(props, undefined, 'Case');
      expect(err).toEqual(null);
    });
    it('Rejects a combination of match and test', () => {
      const props = {
        match: 'A',
        test: () => {},
      };
      const err = Case.propTypes.match(props, undefined, 'Case');
      expect(err).toBeInstanceOf(Error);
    });
    it('Rejects a test that is not a function', () => {
      const props = {
        test: 'A',
      };
      const err = Case.propTypes.match(props, undefined, 'Case');
      expect(err).toBeInstanceOf(Error);
    });
    it('Expects one of test or match', () => {
      const props = {};
      const err = Case.propTypes.match(props, undefined, 'Case');
      expect(err).toBeInstanceOf(Error);
    });
  });
});
