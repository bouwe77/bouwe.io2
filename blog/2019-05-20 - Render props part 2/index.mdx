---
date: "2019-05-20"
title: "Render Props Part II: using the Toggle component"
categories:
  - "React"
  - "render props"
---

**Introduction**

In my first [blog post about the render props pattern] I created a Toggle component.
This component contains all the logic to turn _something_ on or off.

I also implemented two components that use that toggle functionality but each
render their own UI: a button and checkbox respectively.

This implementation shows the purpose of the render props pattern: to _separate logic from layout
so we can reuse the logic for different layouts_.

**Is it ON or OFF?**

Now we will use the Toggle component in our app.

Let's render a `form` with a checkbox toggle in the `App` component so a user can save the
toggle state:

```js
function App() {
  return (
    <form onSubmit={save}>
      <Toggle render={renderToggleCheckbox} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}
```

> When a user submits the form, the save function is called. This function somehow saves the
> current toggle state. To keep things simple this is out of scope for this blog post.

The problem with the current Toggle implementation, however, is that there is no way for
the App component to _know_ what the current toggle state is. And we do need that state
to be able to persist it.

The state of the current toggle value is being managed by the Toggle component. What we
could do is _also_ keep that same state in the App component. But that means you have
the same state in two components, which should make you think twice before doing that.

Also, it's good practice to have as little stateful components as possible, because these come
with a cost, both in complexity and maybe even performance.

So let's look at _responsibilities_. Is it really necessary for the Toggle component to have
state? It's responsibility is to toggle and whether that is stateful or not is not really
important for the component to do its thing.

> The reason Toggle was stateful until now was because we just wanted to toggle, nothing more.
> For that the Toggle component was closest to the place where we needed state.

What needs to be done is what in the React documentation is called [lifting state up].

What that means is that we move the state from the Toggle component to the App component.
And because App is now responsible for the state it has to tell the Toggle component
what's the current state and give a way to update the state. That's why we pass both `setOn`
and `on` as props to Toggle.

With these modifications the App component now looks like this:

```js
function App() {
  const [on, setOn] = useState(false);

  return (
    <form onSubmit={save}>
      <Toggle render={renderToggleCheckbox} toggle={setOn} on={on} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}
```

And the Toggle component is becoming even simpler as it already was because it has no state anymore
but instead receives the state and a way to update it via props:

```js
function Toggle(props) {
  return <>{props.render(() => props.toggle(!props.on), props.on)}</>;
}
```

In this code _props_ is mentioned a lot. Let's refactor this by using _object destructuring_.
Also, I'll add some `propTypes` to make it clear which props this component expects:

```js
function Toggle({ render, toggle, on = false }) {
  return <>{render(() => toggle(!on), on)}</>;
}

Toggle.propTypes = {
  render: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool
};
```

> You might ask yourself, is this Toggle component doing anything at all? It so ridiculously simple.
> Yes it is, but that's because toggling is very simple. The only thing the Toggle
> component is doing is inverting a boolean: `toggle(!on)`. I chose this example to keep things simple. But in
> real world apps your logic is probably a bit more complex (or at least has more lines of code) and
> then you are glad something like the render props pattern exists.

**Conclusion**

Long story short, basically we only moved the toggle state from the Toggle component to the App
component. We didn't touch the render methods that render the toggle UI.

What we have done is separated the responsibilities even more:

1. The Toggle component turns _something_ on or off.
2. The button and checkbox render functions define how the toggle functionality _looks_.
3. The App component actually _uses_ the toggle now and is responsible for the state.

For a working example, please check out [this CodeSandbox] or the [Github repo].

[blog post about the render props pattern]: https://bouwe.io/day-4-render-props
[lifting state up]: https://reactjs.org/docs/lifting-state-up.html
[this codesandbox]: https://codesandbox.io/s/nqksb
[github repo]: https://github.com/bouwe77/react-render-props-2
