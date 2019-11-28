import React, { useState } from 'react';
import { render } from "react-dom";
import { Switch, Case, Default } from './lib';

function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>

      <div>
        <Switch arg={count}>
          <Case match={3}>Count is exactly 3</Case>
          <Case test={arg => arg % 2 === 0}>Count is even</Case>
          <Case test={arg => arg % 2 === 1}>Count is odd</Case>
          <Default>Something went wrong</Default>
        </Switch>
      </div>
    </div>
  );
}

render(<Demo />, document.getElementById("root"));
