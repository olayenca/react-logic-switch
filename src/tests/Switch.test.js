import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import expect from 'expect';

import Switch from '../lib/Switch';
import Default from '../lib/Default';
import Case from '../lib/Case';

describe(__filename, () => {
  describe('Rendering', () => {
    it('renders a matching Case', () => {
      const staticMarkup = render(
        <Switch arg="a">
          <Case match="a">A</Case>
          <Default>Default</Default>
        </Switch>
      );
      expect(staticMarkup).toEqual('A');
    });
    it('ignores a second matching Case', () => {
      const staticMarkup = render(
        <Switch arg="a">
          <Case match="a">A</Case>
          <Case match="a">A+</Case>
          <Default>Default</Default>
        </Switch>
      );
      expect(staticMarkup).toEqual('A');
    });
    it('renders the Default when no Cases match', () => {
      const staticMarkup = render(
        <Switch arg="a">
          <Case match="b">B</Case>
          <Default>Default</Default>
        </Switch>
      );
      expect(staticMarkup).toEqual('Default');
    });
    it('uses the test prop for matching', () => {
      const staticMarkup = render(
        <Switch arg="a">
          <Case test={arg => arg === 'a'}>A</Case>
          <Default>Default</Default>
        </Switch>
      );
      expect(staticMarkup).toEqual('A');
    });
    it('uses the test prop for not matching', () => {
      const staticMarkup = render(
        <Switch arg="a">
          <Case test={arg => arg === 'b'}>A</Case>
          <Default>Default</Default>
        </Switch>
      );
      expect(staticMarkup).toEqual('Default');
    });
  });
  describe('PropTypes', () => {
    it('accepts Default as only child', () => {
      const props = {
        children: [<Default key={0} />],
      };
      const err = Switch.propTypes.children(props, undefined, 'Switch');
      expect(err).toEqual(null);
    });
    it('accepts Default and Case children', () => {
      const props = {
        children: [<Default key={0} />, <Case match="" key={1} />],
      };
      const err = Switch.propTypes.children(props, undefined, 'Switch');
      expect(err).toEqual(null);
    });
    it('requires a Default', () => {
      const props = {
        children: [<Case match="" key={0} />],
      };
      const err = Switch.propTypes.children(props, undefined, 'Switch');
      expect(err).toBeInstanceOf(Error);
    });
    it('rejects a child other than Case or Default', () => {
      const props = {
        children: [<div key={0} />, <Default key={1} />],
      };
      const err = Switch.propTypes.children(props, undefined, 'Switch');
      expect(err).toBeInstanceOf(Error);
    });
    it('rejects multiple defaults', () => {
      const props = {
        children: [<Default key={0} />, <Default key={1} />],
      };
      const err = Switch.propTypes.children(props, undefined, 'Switch');
      expect(err).toBeInstanceOf(Error);
    });
  });
});
