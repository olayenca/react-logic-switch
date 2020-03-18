# react-logic-switch

[![npm package][npm-badge]][npm]  [![Build Status](https://travis-ci.org/olayenca/react-logic-switch.svg?branch=master)](https://travis-ci.org/olayenca/react-logic-switch)

A React component that lets you do conditional rendering, declaratively.

## Quick start
```
npm install --save react-logic-switch
```

```
import { Switch, Case, Default } from 'react-logic-switch';

function MySwitchComponent({ isNightTime }) {
  return (
    <Switch arg={isNightTime}>
      <Case match={true}>
        <DarkModePage />
      </Case>
      <Default>
        <LightModePage />
      </Default>
    </Switch>
  );
}
```

## Usage guide

`react-logic-switch` exports three React components: `Switch`, `Case` and `Default`. Any meaningful usage will require all 3 components.

### `Switch`
`Switch` is the top-level React component. It only accepts `Case` components, and exactly one `Default` component, as children. It also takes an `arg` prop, which can be used to decide which `Case` to render.

### `Case`
The `Case` component takes exactly one of either the `test` or `match` prop. These are used by the `Switch` parent to decide which component to render.

- `match` - If you pass a `match` prop, the parent `Switch` will render if it's the first `Case` component with a match value equal to the parent `Switch` component's `arg` prop.

- `test` - If you pass a function as a `test` prop, the parent `Switch` will call the function and use the output to decide whether to render the switch.

```
<Switch arg={friends}>
  <Case test={friends => friends.length > 3}>
    Chat with your friends!
  </Case>
  <Default>
    Connect with your friends!
  </Default>
</Switch>
```

If a `Switch` receives more than one matching `Case`, only the first one will be rendered.

### `Default`
The `Switch` component will render the contents of the `Default` component if no `Case` children match.


[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

<sup><sub>Copyright 2020 Elsevier</sub></sup>