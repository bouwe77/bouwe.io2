var React = require("react");
var Markdown = require("react-markdown");

function Exercises({ exercises }) {
  return (
    <div>
      {exercises.map((exercise, index) => (
        <Markdown key={index} source={exercise} />
      ))}
    </div>
  );
}

export default Exercises;
