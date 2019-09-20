export const exercises = [
  // Exercise 1
  `##### Exercise 1 - Components

In this exercise we are going to create a new React app and some components.


1. Create a new React app by using the **React create-react-template** on CodeSandbox 
or locally using the **create-react-app** CLI command.

> I recommend you use **CodeSandbox** (https://codesandbox.io) because that does not require 
any setup so you can start right away.

2. Create the following component hierarchy:

- App
  - Header
  - Timeline
    - Post (1..n)

> Note how this list resembles the **parent-child relation** between the components.

> I recommend placing each component in a **separate file**.

3. Each component should render a text or something so you can verify all components are there.
`,
  // Exercise 2
  `
##### Exercise 2 - Props

In this exercise we will pass **props** between components.

1. In the **App** component, define an array of post objects:

\`\`\`js
const posts = [ 
  { username: 'Bouwe', content: 'Hello World' }, 
  { username: 'Bouwe', content: 'My second tweet :)' } 
]
\`\`\`

> Although not necessary, feel free to change the username to **your username** 
(see the table at the bottom of this page) and enter your own content.

2. Pass the array of post objects as props from **App** to **Timeline**.

3. In the **Timeline** component, render a **Post** component for each post in the posts 
array using the array.map() function. Pass each post object as props to the **Post** component:

\`\`\`js
{props.posts.map(post => <Post post={post} />)}
\`\`\`

4. In **Post**, render (display) the username and content of the post object from props

What we have now is an app that passes data to components using props. 
Each component only receives the data it needs to render its own piece of UI.
`,
  //Exercise 3
  `
##### Exercise 3 - State

In this exercise we make the **App** component stateful so it can manage all posts on your timeline.
Also we create a dummy button that adds random posts to state.

> NOTE: We only update the **App** component in this exercise.

1. Call **useState** and pass in an empty array as the initial state.

2. Make sure you initialize the two variables useState returns.

3. Remove the posts array we made in the previous exercise.

4. Pass the posts variable useState returns as props to **Timeline**.
(Although this might already be the case depending on how you named things.)

5. Create a function within the **App** component: \`addPost(content)\`

6. In this function create a post object containing the provided content and your username:

7. Then call setPosts and provide an array containing both the new post 
object and the current posts.

> **TIP** You might want to check the example code if you're not sure how to do this.

8. For testing purposes, add a dummy button in the **App** component's JSX
with an onClick to call the addPost function.

\`\`\`js
<button onClick={() => addPost("Hello World")}>Dummy</button>
\`\`\`

What we have now is an app that is ready for adding posts. 
`,
  // Exercise 4
  `
##### Exercise 4 - Forms

In this exercise we'll create a new component, **Compose**, 
which contains a form that allows the user to create a new post.

1. Create the **Compose** component that returns something to indicate it's the Compose component.

2. Render the **Compose** component inside the **App** component

In the **Compose** component:

3. Introduce a **content** variable with **useState**.

4. In Compose, render the following form:

\`\`\`
<form>
  <textarea value={content} />
  <button>OK</button>
</form>
\`\`\`

> Replace steps 3 and 4 by uncontrolled inputs if you prefer.

5. For the textarea, implement an **onChange** event that calls **setContent**.

In the **App** component:

6. Pass a reference to the **addPost** function as props to **Compose**

7. Remove the dummy button

In the **Compose** component:

8. Add an onSubmit event handler to the form which calls the addPost function 
from props and passes the content.

9. Clear the textarea value after submitting

What we have now is an app that works! You can add posts that are rendered on the timeline.
However, it's all local state... We need to communicate to a backend to persist the posts.
`,
  // Exercise 5
  `
##### Exercise 5 - API calls

In this exercise we are going to communicate to the REST API so we can persist posts and retrieve the 
timeline.

> **TIP** I recommend you use the **axios** library so you can use the example code I've shown you. 
However, any other HTTP client library will also suffice.

> NOTE: the **:userId** is your username, check the table at the bottom of this page.

1. In the **App** component, use the useEffect hook to retrieve the timeline by performing an HTTP GET 
on /users/:userId/timeline

> **Please don't forget the 2nd argument for useEffect: an empty array!**

2. Update the App's **addPost** function so it performs an HTTP POST on /users/:userId/posts.

> **TIP** Check the example code for error handling, although you might also skip error handling to keep 
it simple.
`,
  // Bonus Exercise
  `##### BONUS EXERCISE

In this exercise we are creating functionality for **following and unfollowing** other users.

However, I leave it up to you how to solve this. We have learned everything what we need to implement 
this.

Possible solution:

1. Show all users

2. Indicate per user whether or not you are following him/her

3. Add toggle button per user

4. Toggling the button calls API to follow or unfollow the user

5. Check the API documentation: https://github.com/bouwe77/nitwit-api/blob/master/README.md
`
];
