import React from "react";

const Discuss = ({ location }) => {
  const href = `https://twitter.com/search?q=${location.href}`;
  return (
    <>
      <a href={href}>Discuss on Twitter</a>
    </>
  );
};

export default Discuss;
