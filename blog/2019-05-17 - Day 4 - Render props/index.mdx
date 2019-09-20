---
date: "2019-05-17"
title: "Day 4 - Render props"
categories:
  - "100 days of code"
  - "React"
  - "render props"
---

**Render what?**

Render props is one of the React patterns that was on my "React To Do list" for some time.
So today I decided to check out what the pattern is and to experiment with it.

As soon as I started reading what the pattern was it became clear to me it's not a thing I will
totally master within one day. My goal today is to have a basic understanding which problem
it solves. And the best way to do that is to make a very simple component and bring render
props into practice.

So what is render props?

> Render props is a pattern you can use to separate how a component _works_ from how it _looks_.

If you make this separation you can reuse the component's functionality in
other components that each define their own UI for that functionality. It also can be a nice 
way to just separate the functionality from the UI when either one is complicated and you want
your code to be more readable or easier testable.

**Toggle component**

Let's create a very simple component, a Toggle component. Its functionality is that you can turn something on or off.
And the component renders a button to allow that:

```js
function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

function Toggle() {
  const [on, setOn] = useState(false);

  return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
}
```

Let's break this down.

What happens here is that the `App` component just renders a `Toggle` component.
In the Toggle component we render a button that you can press to turn it on or off. The button's
text contains the current state of the component: "ON" when the on variable is true, otherwise "OFF".

What the component renders depends on the value of the `on` variable. That's why we call React's
[useState hook]. The useState hook returns two things: the `on` variable that contains the current
boolean value indicating the state is on or off and the `setOn` function which we must use to change
the value of the on variable.

With the button's `onClick` we call the setOn function, which makes React re-render the component
which in turn results in the button showing the current state.

What we have now is just a Toggle component, we haven't done anything with render props.

**Let's refactor first**

The toggle button is fine, but wouldn't it be nice to optionally replace it with a checkbox?
To make this possible the first step to take is moving the button out of the Toggle component into a function:

```js
function renderToggleButton(toggle, on) {
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}
```

This function has two arguments: a toggle function and the current on boolean value. The function renders
a button with an onClick that calls the toggle function. Note we do not pass anything to the toggle
function. It's not this function's responsibility to do the actual toggling. It only defines the UI and
_when_ toggling should take place.

Now we update the Toggle component. It no longer renders the button, but it will call the `renderToggleButton`
function we just created. It passes a function that calls setOn and we also pass the current on boolean value:

```js
function Toggle(props) {
  const [on, setOn] = useState(false);

  return <>{renderToggleButton(() => setOn(!on), on)}</>;
}
```

The only thing we did here was _refactor_ the code by separating the toggle functionality from the toggle UI.
It still only renders the toggle button.

Let's create an alternative UI for toggling, a checkbox. This function returns a checkbox and also displays "ON" of "OFF"
respectively:

```js
function renderToggleCheckbox(toggle, on) {
  return (
    <>
      <input type="checkbox" checked={on} onChange={toggle} />
      {on ? "ON" : "OFF"}
    </>
  );
}
```

Here we also get the toggle function passed in and call it when the checkbox is checked or unchecked.
But the UI is totally different.

Now we can change the Toggle component so it renders a checkbox instead of a button:

```js
function Toggle() {
  const [on, setOn] = useState(false);

  return <>{renderToggleCheckbox(() => setOn(!on), on)}</>;
}
```

The Toggle functionality still works, but _looks different_. We have verified our Toggle component has become _independent_ from
the UI.

**Render props at last**

The final step we have to take is to tell the Toggle component which UI it has to render. And we'll do that by passing in that UI.
And as we already created two functions that return the toggle UI, we need to change the Toggle component so it can receive one of
these functions. The way you pass in a function (or any value for that matter) to a component is by using props. And what we will
pass via props is a render function hence the name _render props_.

Let's render the Toggle component twice so we can pass in both render functions:

```js
function App() {
  return (
    <div>
      <Toggle render={renderToggleButton} />
      <Toggle render={renderToggleCheckbox} />
    </div>
  );
}
```

> Note that the name of the prop containing the render function is called `render`. However, this is not required,
> it's just a _naming convention_, you can give it any name you like.

The Toggle component should now receive props and call the render function from props:

```js
function Toggle(props) {
  const [on, setOn] = useState(false);

  return <>{props.render(() => setOn(!on), on)}</>;
}
```

And that's it! We created a Toggle component that is responsible for the Toggle functionality. How the UI looks is not its concern.
It gets passed in a render prop containing a function it calls to render a UI. What we can do now is create lots of different UIs
that implement ways to toggle.

I am really excited I have not only learned the basics of the render props pattern but
also implemented my first render props and created this blog to explain it to myself and you. My hands are itching (Dutch for being very
eager) to create the most ridiculous toggle UIs I can think off, but maybe that's something for a next time.

Check [my render props implementation] on CodeSandbox or the [Github repo] for the full code of this blog post. Feel free to experiment with it.

And if you want to know more about render props, these two blog posts are great:

- [Use a render prop] by Michael Jackson, where he introduces the pattern way back in 2017.

- [What's going to happen to render props] by Kent C. Dodds where he explains what to do with render props now we have React hooks.

I ignored that last blog post when writing this blog post, but I think it's food for thought and maybe even reason for a second
render props blog post.

[use a render prop]: https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
[what's going to happen to render props]: https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-render-props
[usestate hook]: https://reactjs.org/docs/hooks-state.html
[my render props implementation]: https://codesandbox.io/s/m54oh
[github repo]: https://github.com/bouwe77/react-render-props
