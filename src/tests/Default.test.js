import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import expect from 'expect';

import Default from '../lib/Default';

describe(__filename, () => {
  it('renders children', () => {
    const staticMarkup = render(
      <Default>
        <div>Hello</div>
      </Default>
    );
    expect(staticMarkup).toEqual('<div>Hello</div>');
  });
});
