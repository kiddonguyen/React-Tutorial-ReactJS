[Note for tutorial](#https://beta.reactjs.org/learn#components)

# Quick Start

## Creating and nesting components

-   A component is a piece of the UI (user interface) that has its own logic and appearance
-   React components are JavaScript functions that return markup

## Writing markup with JSX

-   JSX is stricter than HTML. You have to close tags like `<br />`.
-   Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty <>...</> wrapper

## Adding styles

-   In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

## Displaying data

-   JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user
-   You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes.
-   For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute

```
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

## Conditional rendering

-   In React, there is no special syntax for writing conditions
-   the conditional ? operator.

```
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

## Rendering lists

-   You will rely on JavaScript features like for loop and the array map() function to render lists of components

```
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

-   For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID.

## Responding to events

```
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

-   Do not call the event handler function: you only need to **pass it down**

## Updating the screen

-   add state to your component to component to “remember” some information and display it.
-   You will get two things from useState: the current state (count), and the function that lets you update it (setCount).

```
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

-   If you render the same component multiple times, each will get its own state.

## Using Hooks

-   Functions starting with use are called Hooks.
-   You can only call Hooks at the top level of your components (or other Hooks)
-   If you want to use useState in a condition or a loop, extract a new component and put it there.

## Sharing data between components

-   The information you pass down like this is called props.

```
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```
