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

# Describing the UI

## Your First Component

### Components: UI building blocks

-   React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.

```
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>
```

### Defining a component

-   Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript.
-   a React component is a JavaScript function that you can sprinkle with markup.

#### Step 1: Export the component

#### Step 2: Define the function

React components are regular JavaScript functions, but their names must start with a capital letter

#### Step 3: Add markup

### Using a component

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

#### Nesting and organizing components

-   Components are regular JavaScript functions, so you can keep multiple components in the same file.
-   you can define a component once, and then use it in as many places and as many times as you like.
-   Components can render other components, but you must never nest their definitions
-   Your React application begins at a “root” component.

## Importing and Exporting Components

### The root component file

These currently live in a root component file, named App.js in this example. In Create React App, your app lives in src/App.js. Depending on your setup, your root component could be in another file, though. If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.

### Exporting and importing a component

1. Make a new JS file to put the components in.
2. Export your function component from that file (using either default or named exports).
3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

-   A file can have no more than one default export, but it can have as many named exports as you like.
-   Default
    export default function Button() {}
    import Button from './button.js';
-   Named
    export function Button() {}
    import { Button } from './button.js';
-   People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values

## Writing Markup with JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

### JSX: Putting markup into JavaScript

-   But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.
-   Each React component is a JavaScript function that may contain some markup that React renders into the browser.

### Converting HTML to JSX

### The Rules of JSX

#### 1. Return a single root element

-   To return multiple elements from a component, wrap them with a single parent tag.
-   If you don’t want to add an extra `<div>` to your markup, you can write <> and </> instead
-   This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

#### 2. Close all the tags

#### 3. camelCase all most of the things!

#### Pro-tip: Use a JSX Converter

We recommend using a [converter](https://transform.tools/html-to-jsx) to translate your existing HTML and SVG to JSX.

## JavaScript in JSX with Curly Braces

JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.Passing strings with quotes

### Passing strings with quotes

-   Here, "https://i.imgur.com/7vQD0fPs.jpg" and "Gregorio Y. Zara" are being passed as strings.
-   But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }

```
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

### Using curly braces: A window into the JavaScript world

```
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```

Any JavaScript expression will work between curly braces, including function calls like formatDate()

#### Where to use curly braces

You can only use curly braces in two ways inside JSX:

1. As text directly inside a JSX tag: `<h1>{name}'s To Do List</h1>` works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
2. As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}"

### Using “double curlies”: CSS and other objects in JSX

```
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

Inline style properties are written in camelCase. For example, HTML `<ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>` in your component.

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
```

## Passing Props to a Component

-   React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.

### Familiar props

Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an `<img>`

```
<img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
/>
```

### Passing props to a component

In this code, the Profile component isn’t passing any props to its child component, Avatar:

```
export default function Profile() {
  return (
    <Avatar />
  );
}
```

You can give Avatar some props in two steps.

#### Step 1: Pass props to the child component

First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):

```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

Now you can read these props inside the Avatar component.

#### Step 2: Read props inside the child component

```
function Avatar({ person, size }) {
  // person and size are available here
}
```

You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions

### Specifying a default value for a prop

```
function Avatar({ person, size = 100 }) {
  // ...
}

```

-   Now, if `<Avatar person={...} />` is rendered with no size prop, the size will be set to 100
-   The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.

### Forwarding props with the JSX spread syntax

```
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

```

-   This forwards all of Profile’s props to the Avatar without listing each of their names.
-   **Use spread syntax with restraint**.

### Passing JSX as children

-   When you nest content inside a JSX tag, the parent component will receive that content in a prop called children.

```
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

### How props change over time

-   Props reflect a component’s data at any point in time, rather than only in the beginning.
-   When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object!

## Conditional Rendering

In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

### Conditionally returning JSX

You can write this as an if/else statement like so:

```
  if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

### Conditionally returning nothing with null

```
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

If isPacked is true, the component will return nothing, null. Otherwise, it will return JSX to render.

### Conditionally including JSX

```
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

In such a situation, you could conditionally include a little JSX to make your code more DRY

### Conditional (ternary) operator (? :)

JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”

```
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

You can read it as “if isPacked is true, then (?) render name + ' ✔', otherwise (:) render name”.

### Logical AND operator (&&)

-   it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise.

```
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

-   You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.
    (\*) : Don’t put numbers on the left side of &&
-   For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!
-   To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.

### Conditionally assigning JSX to a variable

```
let itemContent = name;
  if (isPacked) {
  itemContent = name + " ✔";
}
<li className="item">
  {itemContent}
</li>

```

## Rendering Lists

### Rendering data from arrays

a short example of how to generate a list of items from an array:

1. Move the data into an array:

```
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. Map the people members into a new array of JSX nodes, listItems

```
const listItems = people.map(person => <li>{person}</li>);
```

3. Return listItems from your component wrapped in a `<ul>`:
   `return <ul>{listItems}</ul>;`

### Filtering arrays of items

```
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

-   Let’s say you want a way to only show people whose profession is 'chemist'

1. Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist'

```
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
```

2. Now map over chemists:

```
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);
```

3. Lastly, return the listItems from your component:
   `return <ul>{listItems}</ul>;`

### Keeping list items in order with key

-   You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
    `<li key={person.id}>...</li> `
-   JSX elements directly inside a map() call always need keys!

#### Where to get your key

Different sources of data provide different sources of keys:

-   Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
-   Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

#### Rules of keys

-   Keys must be unique among siblings.
-   Keys must not change or that defeats their purpose! Don’t generate them while rendering.

#### Why does React need keys?

-   They let us uniquely identify an item between its siblings.
-   do not generate keys on the fly, e.g. with key={Math.random()} use a stable ID based on the data.

## Keeping Components Pure

-   Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more.

### Purity: Components as formulas

A pure function is a function with the following characteristics:

-   It minds its own business. It does not change any objects or variables that existed before it was called
-   Same inputs, same output. Given the same inputs, a pure function should always return the same result.
-   React assumes that every component you write is a pure function

### Side Effects: (un)intended consequences

-   React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!
-   Here is a component that breaks this rule:

```
function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
```

-   This component is reading and writing a guest variable declared outside of it. This means that _calling this component multiple times will produce different JSX_!
    You can fix this component by _passing guest as a prop instead_:

```
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```
- In React there are three kinds of inputs that you can read while rendering: *props, state, and context*. You should always treat these inputs as read-only.
- Should set state instead of writing to a variable
- By calling the component functions *twice*, Strict Mode helps find components that break these rules.
- Pure functions only calculate, so calling them twice won’t change anything
- Strict Mode has no effect in production
#### Local mutation: Your component’s little secret
- a *“mutation”* - the component changed a preexisting variable while rendering
- it’s completely fine to change variables and objects that you’ve just created while rendering
``` 
let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
```
- array cups is created them during the same render, inside **TeaGathering**
- This is called “local mutation”
### Where you can cause side effects
- These changes—updating the screen, starting an animation, changing the data—are called side effects.
- They’re things that happen “on the side”, not during rendering.
- In React, side effects usually belong inside event handlers - click to perform some actions
- Even though event handlers are defined inside your component, they don’t run during rendering! So *event handlers* don’t need to be pure.
### Why does React care about purity?
- Your components could run in a different environment—for example, on the server! (same inputs, one component can serve many user requests.)
- You can improve performance by skipping rendering components whose inputs have not changed, safe to cache
- Purity makes it safe to stop calculating at any time.
