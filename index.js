// ReactDOM.render(<p>Hello World from React</p>, document.getElementById("root"));

/*
Display the following text

Add a div and inside there add h1 and p tag
h1 -> React Course
p -> We will learn react in this course.
*/

// ReactDOM.render(
//   <div>
//     <h1>React Course</h1>
//     <p>We will learn react in this course.</p>
//   </div>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>React Course</h1>
    <p>We will learn react in this course.</p>
  </div>
); // JSX syntax
/*
root.render(
  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "React Course"),
    React.createElement("p", null, "We will learn react in this course.")
  )
); // What Babel does behind scene is taking the JSX syntax and turn it to this code
*/
