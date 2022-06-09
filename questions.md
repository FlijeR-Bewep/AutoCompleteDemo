# Answer to Questions Part 2

## 1. What is the difference between Component and PureComponent? give an example where it might break my app
There is just one difference : PureComponent will handle the shouldComponentUpdate() method for us.\
When the props or state changes, the PureComponent will make a comparison and decide to re-render or not.\
The Component will re-render by default.\
Using PureComponent can, then, optimize the app by deciding to not re-rendering when it's not usefull.\

But, it can break the app if we use mutable Object in props/state : If we modify object in the parent, \
the child (PureComponent) won't update because the comparison will be on the reference and so, won't detect a difference.\

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
ShouldComponentUpdate will interfer with the Context propagation.\
When the Context update, the ShouldComponentUpdate method won't detect any change in its props and will return false.\
And so will stop the propagation to its chrildren.\

## 3. Describe 3 ways to pass information from a component to its PARENT.
- Create callback function from the parent -> Pass the function to child as props -> the child will call the function.\
- Using useState hook -> Pass the function to child as props -> the child will call the function.\
- \

## 4. Give 2 ways to prevent components from re-rendering.
- If using React Component Class, use shouldComponentUpdate() method.\
- If using React Function, use React.memo() tool to wrap the function.\

## 5. What is a fragment and why do we need it? Give an example where it might break my app.
It's a container component that allow the Component to return multiple elements to the DOM. \
It doesn't create extra useless elements in the DOM compare to a `<div>`.\

I don't know how it can break the app.\

## 6. Give 3 examples of the HOC pattern.
\

## 7. What's the difference in handling exceptions in promises, callbacks and async...await.
In async promises, we can catch error by .catch() handler.\
In async callbacks, we can't catch error outside the function because we terminate the trycatch block before function ends.\
--> To prevent it, use await or return an Error in the callback result.\

## 8. How many arguments does setState take and why is it async.
2 arguments : first is the value, second (optionnal) can be a callback action that is called when setState is completed.\
The operation of setState could take some time and this is why it's async to avoid app freeze.\

## 9. List the steps needed to migrate a Class to Function Component.
- Change `class` keyword to `function`,\
- Replace `extends React.Component` by `()`,\
- Remove `constructor` function (replace by `useState` hook for the state),\
- Replace props by parameters of the Function,\
- Remove `render()` method and let the `return` method,\
- Convert methods to functions,\
- Remove `this` reference,\
- Replace Life Cylcle methods by `useEffect` hook,\

## 10. List a few ways styles can be used with components.
- Inline styling `<div style={{ ... }} > ...`.\
- Import css file and using className `import './Product.css' ... <div className='...'>...`.\
- Using `styled-components` (`import styled from 'styled-components'`).\

## 11. How to render an HTML string coming from the server
Using `dangerouslySetInnerHTML` prop (`dangerouslySetInnerHTML={{ __html: htmlString }}`).\